import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { View } from '../types';
import { useData } from '../context/DataContext';
import { useScoutCartStore } from '../stores/scoutCartStore';
import ScoutCart from '../components/ScoutCart';
import PlayerBrowserCard from '../components/PlayerBrowserCard';
import PlayerSearchBar from '../components/PlayerSearchBar';
import FilterPanel from '../components/FilterPanel';

interface DashboardProps {
    onNavigate: (view: View) => void;
    onSelectPlayer: (playerId: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, onSelectPlayer }) => {
    const { isLoading, scores, players, getTopPlayer, getRecentScores, getPlayersWithScores } = useData();
    const { cart, isCartOpen, setIsCartOpen, addPlayerToCart } = useScoutCartStore();
    const [positionFilter, setPositionFilter] = React.useState<string | null>(null);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [minPerformance, setMinPerformance] = React.useState(0);
    const [sortBy, setSortBy] = React.useState('per_10');
    const [showFilters, setShowFilters] = React.useState(false);
    const [selectedTargetPlayerId, setSelectedTargetPlayerId] = React.useState<number | null>(null);

    if (isLoading) {
        return (
            <div className="flex-1 flex items-center justify-center bg-bg-deep">
                <div className="text-text-main text-lg">Loading...</div>
            </div>
        );
    }

    const topPlayer = getTopPlayer();
    const recentScores = getRecentScores(3);
    const playersWithScores = getPlayersWithScores();

    // Get the target player - either selected or default to top player
    const targetPlayer = selectedTargetPlayerId
        ? playersWithScores.find(p => p.id === selectedTargetPlayerId) || topPlayer
        : topPlayer;

    // Calculate average metrics from all scores
    const avgReleaseSpeed = scores.length > 0
        ? scores.reduce((acc, s) => acc + (s.release_speed || 0), 0) / scores.length
        : 0;
    const avgRouteFidelity = scores.length > 0
        ? scores.reduce((acc, s) => acc + (s.route_fidelity || 0), 0) / scores.length
        : 0;
    const avgLeverage = scores.length > 0
        ? scores.reduce((acc, s) => acc + (s.leverage || 0), 0) / scores.length
        : 0;
    const avgPer10 = scores.length > 0
        ? scores.reduce((acc, s) => acc + (s.per_10_score || 0), 0) / scores.length
        : 0;

    const handlePlayerClick = () => {
        if (targetPlayer) {
            onSelectPlayer(targetPlayer.id);
            onNavigate(View.PLAYER_PROFILE);
        }
    };

    const handlePlayerCardClick = (playerId: number) => {
        onSelectPlayer(playerId);
        onNavigate(View.PLAYER_PROFILE);
    };

    const handleAddToCart = (player: any) => {
        addPlayerToCart({
            id: player.id,
            name: player.name,
            position: player.position,
            number: player.number,
            team: player.team,
            avatar_url: player.avatar_url,
            avg_per_10: player.averagePer10 || 0,
            avg_aftersnap_iq: player.averageIQ || 0,
            total_plays_tagged: player.scoreCount || 0,
            archetype_tags: [],
            notes: '',
            addedAt: new Date().toISOString(),
        });
    };

    // Filter players by position, search query, and performance
    const filteredPlayers = playersWithScores.filter(player => {
        const matchesPosition = !positionFilter || player.position === positionFilter;
        const matchesSearch = !searchQuery ||
            player.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            player.team.toLowerCase().includes(searchQuery.toLowerCase()) ||
            player.number.toString().includes(searchQuery);
        const matchesPerformance = player.averagePer10 >= minPerformance;
        return matchesPosition && matchesSearch && matchesPerformance;
    });

    // Sort filtered players
    const sortedPlayers = [...filteredPlayers].sort((a, b) => {
        switch (sortBy) {
            case 'per_10':
                return b.averagePer10 - a.averagePer10;
            case 'aftersnap_iq':
                return b.averageIQ - a.averageIQ;
            case 'alphabetical':
                return a.name.localeCompare(b.name);
            default:
                return 0;
        }
    });

    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden bg-bg-deep relative">
            <header className="h-24 shrink-0 px-6 lg:px-10 flex items-center justify-between z-20">
                <div className="flex items-center gap-4 lg:hidden">
                    <div className="size-10 bg-white text-black rounded-xl flex items-center justify-center font-bold">
                        <span className="material-symbols-outlined">visibility</span>
                    </div>
                    <span className="font-bold text-xl text-text-main">Sky Vision</span>
                </div>
                <div className="hidden lg:flex items-center gap-4">
                    <h1 className="text-3xl font-bold tracking-tight text-text-main">Sky Vision Dashboard</h1>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-3 bg-bg-elevated rounded-full pl-1 pr-4 py-1 hover:bg-bg-elevated/80 transition-all border border-white/5">
                        <div className="bg-bg-card rounded-full px-3 py-1.5 text-xs font-bold text-text-sub border border-white/5">Now</div>
                        <span className="text-sm font-medium text-text-main">Oct 14</span>
                        <span className="material-symbols-outlined text-text-sub text-[18px]">keyboard_arrow_down</span>
                    </button>

                    {/* Scout Cart Button */}
                    <motion.button
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-4 py-2 bg-primary text-white rounded-xl font-medium hover:bg-primary-hover transition-colors flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <span className="hidden sm:inline">Cart</span>
                        {cart.length > 0 && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute -top-2 -right-2 w-6 h-6 bg-status-red rounded-full flex items-center justify-center text-xs font-bold text-white"
                            >
                                {cart.length}
                            </motion.span>
                        )}
                    </motion.button>

                    <button className="size-11 rounded-full bg-bg-elevated flex items-center justify-center text-text-main hover:bg-primary hover:text-white transition-all">
                        <span className="material-symbols-outlined">notifications</span>
                    </button>
                </div>
            </header>

            <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 lg:p-10 lg:pt-2 scroll-smooth">
                <div className="max-w-[1600px] mx-auto flex flex-col gap-8">
                    
                    {/* Top Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Target Profile Card */}
                        <div className="lg:col-span-5 bg-bg-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between border border-white/5 shadow-xl shadow-black/20">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex flex-col flex-1">
                                    <h2 className="text-text-sub text-sm font-bold tracking-widest uppercase mb-3">Target Profile</h2>

                                    {/* Player Selector Dropdown */}
                                    <div className="relative mb-3">
                                        <select
                                            value={selectedTargetPlayerId || topPlayer?.id || ''}
                                            onChange={(e) => setSelectedTargetPlayerId(Number(e.target.value))}
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-full bg-bg-elevated border border-border-subtle rounded-xl text-lg font-bold text-text-main py-2 pl-3 pr-10 focus:outline-none focus:border-primary appearance-none cursor-pointer hover:bg-bg-elevated/80 transition-colors"
                                        >
                                            {playersWithScores.length > 0 ? (
                                                playersWithScores.map((player) => (
                                                    <option key={player.id} value={player.id}>
                                                        {player.name} • {player.position} #{player.number}
                                                    </option>
                                                ))
                                            ) : (
                                                <option value="">No players available</option>
                                            )}
                                        </select>
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                            <span className="material-symbols-outlined text-text-sub">expand_more</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded-md">
                                            {targetPlayer ? targetPlayer.position : 'N/A'}
                                        </span>
                                        <div className="text-text-sub text-sm font-medium">
                                            {targetPlayer ? `${targetPlayer.team} • #${targetPlayer.number}` : 'Add players to get started'}
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={handlePlayerClick}
                                    className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group/btn shrink-0"
                                >
                                    <span className="material-symbols-outlined text-text-sub group-hover/btn:text-white">arrow_forward</span>
                                </button>
                            </div>
                            <div className="flex items-end justify-between mt-auto relative z-10">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-white">
                                            {targetPlayer ? targetPlayer.averageIQ.toFixed(1) : '0.0'}
                                        </span>
                                        <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-1 rounded-lg">IQ Score</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-text-sub text-xs">PER-10</span>
                                            <span className="text-text-main font-semibold">
                                                {targetPlayer ? targetPlayer.averagePer10.toFixed(1) : '0.0'}
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-text-sub text-xs">Scores</span>
                                            <span className="text-text-main font-semibold">
                                                {targetPlayer ? targetPlayer.scoreCount : 0}
                                            </span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-text-sub text-xs">Position</span>
                                            <span className="text-text-main font-semibold">
                                                {targetPlayer ? targetPlayer.position : 'N/A'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    onClick={handlePlayerClick}
                                    className="relative size-32 rounded-full border-4 border-bg-elevated overflow-hidden shadow-2xl cursor-pointer hover:border-primary transition-all hover:scale-105"
                                >
                                    <div className="bg-center bg-no-repeat bg-cover w-full h-full" style={{backgroundImage: targetPlayer?.avatar_url ? `url("${targetPlayer.avatar_url}")` : 'url("https://picsum.photos/id/65/200/200")'}}></div>
                                </div>
                            </div>
                            <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10 pointer-events-none" preserveAspectRatio="none" viewBox="0 0 400 100">
                                <path d="M0,80 C50,80 80,40 120,50 C160,60 200,20 250,40 C300,60 350,30 400,60 L400,100 L0,100 Z" fill="#4F46E5"></path>
                                <path d="M0,80 C50,80 80,40 120,50 C160,60 200,20 250,40 C300,60 350,30 400,60" fill="none" stroke="#4F46E5" strokeWidth="2"></path>
                            </svg>
                        </div>

                        {/* Metrics Columns */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            {/* Filter Bar */}
                            <div className="bg-bg-card rounded-full p-2 pl-6 flex items-center justify-between border border-white/5">
                                <div className="flex gap-6 overflow-x-auto items-center no-scrollbar">
                                    <div className="flex flex-col justify-center min-w-fit">
                                        <span className="text-[10px] text-text-sub font-bold uppercase tracking-wider">Season</span>
                                        <div className="flex items-center gap-1 text-sm font-bold text-white cursor-pointer hover:text-primary">
                                            2024 <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                        </div>
                                    </div>
                                    <div className="w-px h-8 bg-white/10 shrink-0"></div>
                                    <div className="flex flex-col justify-center min-w-fit">
                                        <span className="text-[10px] text-text-sub font-bold uppercase tracking-wider">Week</span>
                                        <div className="flex items-center gap-1 text-sm font-bold text-white cursor-pointer hover:text-primary">
                                            6 vs CHI <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                        </div>
                                    </div>
                                    <div className="w-px h-8 bg-white/10 shrink-0"></div>
                                    <div className="flex flex-col justify-center min-w-fit">
                                        <span className="text-[10px] text-text-sub font-bold uppercase tracking-wider">Coverage</span>
                                        <div className="flex items-center gap-1 text-sm font-bold text-white cursor-pointer hover:text-primary">
                                            Man <span className="material-symbols-outlined text-[16px]">expand_more</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="size-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-hover transition-all shadow-lg shadow-primary/30 shrink-0 ml-4">
                                    <span className="material-symbols-outlined">filter_list</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                                {/* PER-10 Card */}
                                <div className="bg-bg-card rounded-3xl p-6 border border-white/5 relative overflow-hidden group flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-lg text-text-main">PER-10 Avg</h3>
                                        <span className="material-symbols-outlined text-text-sub">more_horiz</span>
                                    </div>
                                    <div className="flex items-end gap-3 my-4">
                                        <span className="text-4xl font-bold text-white">{avgPer10.toFixed(1)}</span>
                                        <span className="text-status-good text-sm font-bold mb-1 flex items-center">
                                            <span className="material-symbols-outlined text-[16px]">arrow_upward</span> Live
                                        </span>
                                    </div>
                                    <div className="h-12 w-full flex items-end gap-1">
                                        <div className="flex-1 bg-bg-elevated rounded-t-sm h-[40%] group-hover:bg-primary/40 transition-colors"></div>
                                        <div className="flex-1 bg-bg-elevated rounded-t-sm h-[60%] group-hover:bg-primary/50 transition-colors"></div>
                                        <div className="flex-1 bg-bg-elevated rounded-t-sm h-[30%] group-hover:bg-primary/40 transition-colors"></div>
                                        <div className="flex-1 bg-bg-elevated rounded-t-sm h-[80%] group-hover:bg-primary/60 transition-colors"></div>
                                        <div className="flex-1 bg-bg-elevated rounded-t-sm h-[50%] group-hover:bg-primary/50 transition-colors"></div>
                                        <div className="flex-1 bg-white rounded-t-sm h-[90%] shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                                        <div className="flex-1 bg-bg-elevated rounded-t-sm h-[70%] group-hover:bg-primary/60 transition-colors"></div>
                                    </div>
                                </div>
                                {/* Efficiency Card */}
                                <div className="bg-bg-card rounded-3xl p-6 border border-white/5 relative overflow-hidden group flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-bold text-lg text-text-main">Avg Metrics</h3>
                                        <div className="flex gap-1">
                                            <div className="size-2 bg-pillar-a rounded-full"></div>
                                            <div className="size-2 bg-text-sub/20 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-3 my-4">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-xs text-text-sub">Release: {avgReleaseSpeed.toFixed(1)}</span>
                                            <span className="text-xs text-text-sub">Route: {avgRouteFidelity.toFixed(1)}</span>
                                            <span className="text-xs text-text-sub">Leverage: {avgLeverage.toFixed(1)}</span>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-10 gap-1.5 mt-auto">
                                        {Array.from({length: 20}).map((_, i) => (
                                            <div key={i} className={`h-2 w-2 rounded-full ${i % 3 === 0 ? 'bg-pillar-a' : 'bg-bg-elevated'} ${i > 10 && i % 3 === 0 ? 'opacity-50' : ''}`}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Pillar Breakdown with Custom Visual */}
                        <div className="lg:col-span-4 bg-bg-card rounded-3xl p-6 border border-white/5 flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-lg text-text-main">Pillar Breakdown</h3>
                                <button className="p-2 hover:bg-bg-elevated rounded-full transition-colors">
                                    <span className="material-symbols-outlined text-text-sub">info</span>
                                </button>
                            </div>
                            <div className="flex-1 min-h-[300px] flex items-center justify-center relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="size-[240px] rounded-full border border-white/5"></div>
                                    <div className="size-[160px] rounded-full border border-white/5 absolute"></div>
                                    <div className="size-[80px] rounded-full border border-white/5 absolute"></div>
                                </div>
                                <div className="relative w-[240px] h-[240px]">
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                        <span className="text-[10px] font-bold uppercase text-pillar-a tracking-wider">Anticipation</span>
                                        <span className="text-sm font-bold text-text-main">94</span>
                                    </div>
                                    <div className="absolute top-[25%] -right-12 flex flex-col items-start">
                                        <span className="text-[10px] font-bold uppercase text-pillar-s tracking-wider">Separation</span>
                                        <span className="text-sm font-bold text-text-main">88</span>
                                    </div>
                                    <div className="absolute bottom-[25%] -right-12 flex flex-col items-start">
                                        <span className="text-[10px] font-bold uppercase text-pillar-e tracking-wider">Execution</span>
                                        <span className="text-sm font-bold text-text-main">91</span>
                                    </div>
                                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                        <span className="text-[10px] font-bold uppercase text-pillar-inno tracking-wider">Innovation</span>
                                        <span className="text-sm font-bold text-text-main">76</span>
                                    </div>
                                    <div className="absolute bottom-[25%] -left-12 flex flex-col items-end">
                                        <span className="text-[10px] font-bold uppercase text-pillar-improv tracking-wider">Improv</span>
                                        <span className="text-sm font-bold text-text-main">82</span>
                                    </div>
                                    <div className="absolute top-[25%] -left-8 flex flex-col items-end">
                                        <span className="text-[10px] font-bold uppercase text-pillar-eyes tracking-wider">Eyes</span>
                                        <span className="text-sm font-bold text-text-main">95</span>
                                    </div>
                                    <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(79,70,229,0.4)] overflow-visible" viewBox="0 0 100 100">
                                        <polygon fill="rgba(79, 70, 229, 0.2)" points="50,10 85,30 80,70 50,85 20,75 15,35" stroke="#4F46E5" strokeLinejoin="round" strokeWidth="2.5"></polygon>
                                        <circle cx="50" cy="10" fill="white" r="1.5"></circle>
                                        <circle cx="85" cy="30" fill="white" r="1.5"></circle>
                                        <circle cx="80" cy="70" fill="white" r="1.5"></circle>
                                        <circle cx="50" cy="85" fill="white" r="1.5"></circle>
                                        <circle cx="20" cy="75" fill="white" r="1.5"></circle>
                                        <circle cx="15" cy="35" fill="white" r="1.5"></circle>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Performance Timeline */}
                        <div className="lg:col-span-8 bg-bg-card rounded-3xl p-8 border border-white/5 flex flex-col">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="font-bold text-lg text-text-main">Performance Timeline</h3>
                                <button className="text-text-sub hover:text-text-main transition-colors">
                                    <span className="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            <div className="flex-1 flex flex-col justify-between gap-6 relative">
                                <div className="absolute inset-0 flex justify-between px-12 pointer-events-none opacity-10">
                                    <div className="w-px h-full border-r border-dashed border-text-sub"></div>
                                    <div className="w-px h-full border-r border-dashed border-text-sub"></div>
                                    <div className="w-px h-full border-r border-dashed border-text-sub"></div>
                                    <div className="w-px h-full border-r border-dashed border-text-sub"></div>
                                    <div className="w-px h-full border-r border-dashed border-text-sub"></div>
                                </div>
                                
                                {/* Timeline Rows */}
                                {['Q1', 'Q2', 'Q3', 'Q4'].map((q, i) => (
                                    <div key={q} className="flex items-center relative z-10">
                                        <div className="w-16 text-xs text-text-sub font-medium">{q}</div>
                                        <div className="flex-1 h-12 flex items-center relative">
                                            {i === 0 && (
                                                <div className="absolute left-[10%] w-[40%] bg-pillar-eyes text-black rounded-full h-10 flex items-center justify-between px-3 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform cursor-pointer">
                                                    <div className="size-6 rounded-full bg-white/20 flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                                                    </div>
                                                    <span className="text-xs font-bold">16</span>
                                                </div>
                                            )}
                                            {i === 1 && (
                                                <div className="absolute left-[45%] w-[35%] bg-secondary text-black rounded-full h-10 flex items-center justify-between px-3 shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:scale-105 transition-transform cursor-pointer">
                                                    <div className="size-6 rounded-full bg-white/20 flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-[16px]">bolt</span>
                                                    </div>
                                                    <span className="text-xs font-bold">29</span>
                                                </div>
                                            )}
                                            {i === 2 && (
                                                <div className="flex items-center absolute left-[20%] gap-2 w-[60%]">
                                                    <div className="size-8 rounded-full bg-bg-card border border-white/10 flex items-center justify-center shrink-0 z-20">
                                                        <div className="size-6 bg-cover bg-center rounded-full" style={{backgroundImage: 'url("https://picsum.photos/id/65/100/100")'}}></div>
                                                    </div>
                                                    <div className="flex-1 bg-white text-black rounded-full h-10 flex items-center justify-between px-4 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform cursor-pointer">
                                                        <span className="text-xs font-bold">Separation Win</span>
                                                        <span className="text-xs font-bold">15</span>
                                                    </div>
                                                </div>
                                            )}
                                            {i === 3 && (
                                                <div className="absolute left-[60%] w-[25%] bg-pillar-improv text-white rounded-full h-10 flex items-center justify-between px-3 shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:scale-105 transition-transform cursor-pointer">
                                                    <div className="size-6 rounded-full bg-white/20 flex items-center justify-center">
                                                        <span className="material-symbols-outlined text-[16px]">route</span>
                                                    </div>
                                                    <span className="text-xs font-bold">12</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                <div className="flex justify-between pl-16 pt-2 border-t border-white/5 text-[10px] text-text-sub font-mono">
                                    <span>0</span><span>10</span><span>20</span><span>30</span><span>40</span><span>50</span>
                                </div>
                                <div className="flex gap-6 mt-4 justify-end">
                                    <div className="flex items-center gap-2">
                                        <div className="size-2 rounded-full border-2 border-pillar-eyes"></div>
                                        <span className="text-xs text-text-sub">Eyes</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="size-2 rounded-full border-2 border-secondary"></div>
                                        <span className="text-xs text-text-sub">Anticipation</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="size-2 rounded-full border-2 border-white"></div>
                                        <span className="text-xs text-text-sub">Separation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
                        {/* Metric Distribution */}
                        <div className="bg-bg-card rounded-3xl p-8 border border-white/5">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-lg text-text-main">Metric Distribution</h3>
                                <div className="flex gap-2">
                                    <button className="size-8 rounded-full bg-bg-elevated flex items-center justify-center text-text-sub hover:text-white hover:bg-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                                    </button>
                                    <button className="size-8 rounded-full bg-bg-elevated flex items-center justify-center text-text-sub hover:text-white hover:bg-primary transition-colors">
                                        <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-around items-end h-[200px] gap-2">
                                {[
                                    {val: 92, label: 'Antic.', color: 'text-pillar-eyes', bar: 'bg-pillar-eyes', char: 'A'},
                                    {val: 85, label: 'Sep.', color: 'text-pillar-s', bar: 'bg-pillar-s', char: 'S'},
                                    {val: 98, label: 'Exec.', color: 'text-white', bar: 'bg-primary', char: 'E', highlight: true},
                                    {val: 72, label: 'Innov.', color: 'text-pillar-inno', bar: 'bg-pillar-inno', char: 'I'},
                                    {val: 88, label: 'Improv', color: 'text-secondary', bar: 'bg-secondary', char: 'M'},
                                ].map((m, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer w-full">
                                        {m.highlight ? (
                                            <div className="bg-primary text-white h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold mb-2 shadow-lg shadow-primary/30">{m.val}</div>
                                        ) : (
                                            <div className={`bg-${m.bar.split('-')[1]}/20 h-10 w-full rounded-2xl flex items-center justify-center text-xs font-bold ${m.color} mb-2 opacity-0 group-hover:opacity-100 transition-opacity`}>{m.val}</div>
                                        )}
                                        <div className={`w-12 bg-bg-elevated rounded-full relative group-hover:${m.bar} group-hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300`} style={{height: `${m.val * 0.8}%`}}>
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-bg-deep/30 rounded-full size-8 flex items-center justify-center text-xs font-bold text-white group-hover:text-black">{m.char}</div>
                                        </div>
                                        <span className="text-[10px] text-text-sub font-bold uppercase">{m.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between items-center mt-6 pt-6 border-t border-white/5 text-sm">
                                <div className="flex items-center gap-2"><span className="size-3 bg-primary rounded-full block"></span><span className="text-text-sub">Resources</span></div>
                                <div className="flex items-center gap-2"><span className="size-3 bg-pillar-eyes rounded-full block"></span><span className="text-text-sub">Valid</span></div>
                                <div className="flex items-center gap-2"><span className="size-3 bg-secondary rounded-full block"></span><span className="text-text-sub">Invalid</span></div>
                                <span className="font-bold text-white ml-auto">Total: 1,012</span>
                            </div>
                        </div>

                        {/* Smart Highlights List */}
                        <div className="bg-bg-card rounded-3xl p-8 border border-white/5 flex flex-col">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-lg text-text-main">Smart Highlights</h3>
                                <span className="material-symbols-outlined text-text-sub">more_horiz</span>
                            </div>
                            <div className="flex flex-col gap-4 overflow-y-auto pr-2 flex-1 max-h-[300px]">
                                {recentScores.length > 0 ? (
                                    recentScores.map((score, idx) => (
                                        <div key={score.id} className="flex items-center gap-4 p-3 rounded-2xl bg-bg-elevated/50 hover:bg-bg-elevated transition-colors cursor-pointer group border border-transparent hover:border-white/10" onClick={() => onNavigate(View.SCORING)}>
                                            <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                                                <span className="material-symbols-outlined">play_arrow</span>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between mb-1">
                                                    <span className="font-bold text-sm text-white">Score #{score.id}</span>
                                                    <span className="text-xs text-text-sub">{new Date(score.created_at).toLocaleTimeString()}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[10px] font-bold text-pillar-s uppercase bg-pillar-s/10 px-1.5 py-0.5 rounded">
                                                        PER-10: {score.per_10_score?.toFixed(1) || 'N/A'}
                                                    </span>
                                                    <span className="text-xs text-text-muted">Play #{score.play_id}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex items-center justify-center p-8 text-text-sub text-sm">
                                        No scores yet. Start scoring to see highlights!
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5 text-sm">
                                <div className="flex items-center gap-2"><span className="size-3 bg-pillar-s rounded-full block"></span><span className="text-text-sub">Recent</span></div>
                                <div className="flex items-center gap-2"><span className="size-3 bg-status-red rounded-full block"></span><span className="text-text-sub">Top 3</span></div>
                                <span className="font-bold text-white ml-auto">Total: {scores.length}</span>
                            </div>
                        </div>
                    </div>

                    {/* Player Selection Section */}
                    <div className="grid grid-cols-1 gap-6 pb-6">
                        <div className="bg-bg-card rounded-3xl p-8 border border-white/5">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h3 className="font-bold text-lg text-text-main">Player Browser</h3>
                                    <p className="text-text-sub text-sm mt-1">Browse players and add them to your scout cart</p>
                                </div>

                                {/* Toolbar */}
                                <div className="flex items-center gap-3">
                                    <PlayerSearchBar
                                        query={searchQuery}
                                        onChange={setSearchQuery}
                                        playerCount={sortedPlayers.length}
                                    />

                                    <motion.button
                                        onClick={() => setShowFilters(!showFilters)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 bg-bg-elevated border border-border-subtle rounded-xl text-text-main font-medium hover:border-primary transition-colors whitespace-nowrap"
                                    >
                                        <span className="material-symbols-outlined text-lg">tune</span>
                                    </motion.button>
                                </div>
                            </div>

                            {/* Filters Panel */}
                            {showFilters && (
                                <div className="mb-6">
                                    <FilterPanel
                                        filter={{ position: positionFilter, minPerformance }}
                                        onFilterChange={(f) => {
                                            if (f.position !== undefined) setPositionFilter(f.position);
                                            if (f.minPerformance !== undefined) setMinPerformance(f.minPerformance);
                                        }}
                                        sort={sortBy}
                                        onSortChange={setSortBy}
                                    />
                                </div>
                            )}

                            {/* Player Grid */}
                            {sortedPlayers.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {sortedPlayers.map((player, idx) => (
                                        <motion.div
                                            key={player.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.25, delay: idx * 0.05 }}
                                        >
                                            <PlayerBrowserCard
                                                player={{
                                                    id: player.id,
                                                    name: player.name,
                                                    position: player.position,
                                                    number: player.number,
                                                    team: player.team,
                                                    avatar_url: player.avatar_url,
                                                    avg_per_10: player.averagePer10,
                                                    avg_aftersnap_iq: player.averageIQ,
                                                    total_plays_tagged: player.scoreCount,
                                                    archetype_tags: [],
                                                }}
                                                isInCart={cart.some(p => p.id === player.id)}
                                                onAddToCart={() => handleAddToCart(player)}
                                                onViewProfile={() => handlePlayerCardClick(player.id)}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center py-12 text-text-sub">
                                    <span className="material-symbols-outlined text-5xl mb-4 opacity-30">search_off</span>
                                    <p className="text-lg font-medium">No players found</p>
                                    <p className="text-sm mt-1">Try adjusting your filters or search query</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scout Cart Sidebar */}
            <AnimatePresence>
                {isCartOpen && (
                    <ScoutCart onClose={() => setIsCartOpen(false)} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Dashboard;