import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../utils/supabase';
import { Database } from '../types';

type Player = Database['public']['Tables']['players']['Row'];
type Play = Database['public']['Tables']['plays']['Row'];
type Score = Database['public']['Tables']['scores']['Row'];

interface PlayerWithScores extends Player {
    averagePer10: number;
    averageIQ: number;
    scoreCount: number;
}

interface DataContextType {
    players: Player[];
    plays: Play[];
    scores: Score[];
    isLoading: boolean;
    error: string | null;
    refreshData: () => Promise<void>;
    calculatePer10: (releaseSpeed: number, routeFidelity: number, leverage: number) => number;
    calculateIQRating: (per10Score: number) => number;
    getPlayerPer10: (playerId: number) => number;
    getTopPlayer: () => PlayerWithScores | null;
    getPlayersWithScores: () => PlayerWithScores[];
    getRecentScores: (limit: number) => Score[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [players, setPlayers] = useState<Player[]>([]);
    const [plays, setPlays] = useState<Play[]>([]);
    const [scores, setScores] = useState<Score[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Business Logic: PER-10 Score Calculation
    const calculatePer10 = (releaseSpeed: number, routeFidelity: number, leverage: number): number => {
        return ((releaseSpeed + routeFidelity + leverage) / 3) * 1.05;
    };

    // Business Logic: IQ Rating Calculation (maps PER-10 to percentage)
    const calculateIQRating = (per10Score: number): number => {
        // Map 0-10 scale to 0-100% (with 8.5 ≈ 92%)
        // Linear mapping: IQ% = per10Score * 10.8
        return Math.min(100, Math.round(per10Score * 10.8));
    };

    // Get average PER-10 score for a specific player
    const getPlayerPer10 = (playerId: number): number => {
        const playerScores = scores.filter(s => s.player_id === playerId && s.per_10_score !== null);
        if (playerScores.length === 0) return 0;

        const sum = playerScores.reduce((acc, s) => acc + (s.per_10_score || 0), 0);
        return sum / playerScores.length;
    };

    // Get players with their calculated scores
    const getPlayersWithScores = (): PlayerWithScores[] => {
        return players.map(player => {
            const playerScores = scores.filter(s => s.player_id === player.id && s.per_10_score !== null);
            const avgPer10 = playerScores.length > 0
                ? playerScores.reduce((acc, s) => acc + (s.per_10_score || 0), 0) / playerScores.length
                : 0;

            return {
                ...player,
                averagePer10: avgPer10,
                averageIQ: calculateIQRating(avgPer10),
                scoreCount: playerScores.length
            };
        }).sort((a, b) => b.averagePer10 - a.averagePer10);
    };

    // Get the player with the highest PER-10 score
    const getTopPlayer = (): PlayerWithScores | null => {
        const playersWithScores = getPlayersWithScores();
        return playersWithScores.length > 0 ? playersWithScores[0] : null;
    };

    // Get recent scores
    const getRecentScores = (limit: number): Score[] => {
        return [...scores]
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
            .slice(0, limit);
    };

    // Fetch all data from Supabase
    const fetchData = async () => {
        try {
            setIsLoading(true);
            setError(null);

            // Fetch all data in parallel
            const [playersResult, playsResult, scoresResult] = await Promise.all([
                supabase.from('players').select('*').order('name'),
                supabase.from('plays').select('*').order('created_at', { ascending: false }),
                supabase.from('scores').select('*').order('created_at', { ascending: false })
            ]);

            if (playersResult.error) throw playersResult.error;
            if (playsResult.error) throw playsResult.error;
            if (scoresResult.error) throw scoresResult.error;

            setPlayers(playersResult.data || []);
            setPlays(playsResult.data || []);
            setScores(scoresResult.data || []);
        } catch (err: any) {
            console.error('Error fetching data:', err);
            setError(err.message || 'Failed to fetch data');
        } finally {
            setIsLoading(false);
        }
    };

    // Refresh data
    const refreshData = async () => {
        await fetchData();
    };

    // Fetch data on mount
    useEffect(() => {
        fetchData();
    }, []);

    const value: DataContextType = {
        players,
        plays,
        scores,
        isLoading,
        error,
        refreshData,
        calculatePer10,
        calculateIQRating,
        getPlayerPer10,
        getTopPlayer,
        getPlayersWithScores,
        getRecentScores
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
