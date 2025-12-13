import React from 'react';
import { View } from '../types';
import { useData } from '../context/DataContext';

interface SessionSummaryProps {
    onNavigate: (view: View) => void;
}

const SessionSummary: React.FC<SessionSummaryProps> = ({ onNavigate }) => {
    const { isLoading, scores, getPlayersWithScores, players } = useData();

    if (isLoading) {
        return (
            <div className="flex-1 flex items-center justify-center bg-bg-deep">
                <div className="text-text-main text-lg">Loading...</div>
            </div>
        );
    }

    const playersWithScores = getPlayersWithScores();
    const totalScores = scores.length;
    const uniquePlayers = new Set(scores.map(s => s.player_id)).size;

    // Calculate quick instinct tags (scores above 9.0 PER-10)
    const quickInstinctCount = scores.filter(s => (s.per_10_score || 0) >= 9.0).length;

    // Calculate red flags (scores below 6.0 PER-10)
    const redFlagCount = scores.filter(s => (s.per_10_score || 0) < 6.0).length;

    return (
        <div className="flex-1 overflow-y-auto bg-bg-deep p-6">
            <div className="px-4 md:px-10 lg:px-12 flex flex-1 justify-center py-8">
                <div className="flex flex-col max-w-[1600px] flex-1 gap-10">
                    
                    {/* Header */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <span className="px-3 py-1 rounded-full bg-status-good/10 text-status-good text-[10px] font-bold uppercase tracking-widest border border-status-good/10">Tagging Complete</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <h1 className="text-text-main text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-2">Session Summary</h1>
                                <div className="flex items-center gap-4 text-text-sub text-sm font-medium">
                                    <div className="flex items-center gap-2 bg-bg-card px-3 py-1.5 rounded-lg border border-border-subtle/50">
                                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                        <span className="text-xs tracking-wide">Oct 24, 2023 14:30 EST</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-bg-card px-3 py-1.5 rounded-lg border border-border-subtle/50">
                                        <span className="material-symbols-outlined text-[16px]">tag</span>
                                        <span className="text-xs tracking-wide">Session ID: <span className="font-mono text-text-main">#88219</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: 'Plays Annotated', value: totalScores.toString(), icon: 'edit_note', color: 'primary' },
                            { label: 'Unique Players', value: uniquePlayers.toString(), icon: 'groups', color: 'text-sub' },
                            { label: 'Quick Instinct Tags', value: quickInstinctCount.toString(), icon: 'flash_on', color: 'pillar-improv' },
                            { label: 'Red Flags', value: redFlagCount.toString(), icon: 'flag', color: 'status-red' }
                        ].map((item, i) => (
                            <div key={i} className="bg-bg-card border border-border-subtle shadow-xl backdrop-blur-sm rounded-3xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:translate-y-[-2px] hover:border-border-subtle/80 relative overflow-hidden group">
                                <div className="flex justify-between items-start mb-6 z-10 relative">
                                    <p className="text-text-sub text-[11px] font-bold uppercase tracking-widest">{item.label}</p>
                                    <div className="bg-bg-elevated/50 p-2 rounded-full">
                                        <span className={`material-symbols-outlined text-${item.color} text-xl`}>{item.icon}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 relative z-10">
                                    <p className="text-text-main tracking-tighter text-5xl font-bold">{item.value}</p>
                                    <div className="h-2 w-full bg-bg-elevated rounded-full overflow-hidden">
                                        <div className={`h-full bg-${item.color} w-[85%] rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]`}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content Row */}
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Table */}
                        <div className="flex flex-col flex-1 gap-5 min-w-0 w-full">
                            <div className="flex items-center justify-between px-2">
                                <h2 className="text-text-main text-2xl font-bold leading-tight tracking-tight">Player Performance Breakdown</h2>
                                <button className="group flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-hover transition-colors" onClick={() => onNavigate(View.DASHBOARD)}>
                                    View Full Report 
                                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                            <div className="w-full overflow-hidden rounded-3xl bg-bg-card border border-border-subtle shadow-xl">
                                <div className="overflow-x-auto">
                                    <table className="w-full min-w-[700px]">
                                        <thead>
                                            <tr className="bg-bg-elevated/50 border-b border-border-subtle">
                                                <th className="px-8 py-5 text-left text-text-sub text-[10px] font-bold uppercase tracking-widest w-[35%]">Player Name</th>
                                                <th className="px-6 py-5 text-left text-text-sub text-[10px] font-bold uppercase tracking-widest w-[15%]">Position</th>
                                                <th className="px-6 py-5 text-right text-text-sub text-[10px] font-bold uppercase tracking-widest w-[15%]">Avg PER-10</th>
                                                <th className="px-6 py-5 text-right text-text-sub text-[10px] font-bold uppercase tracking-widest w-[15%]">Avg IQ</th>
                                                <th className="px-8 py-5 text-right text-text-sub text-[10px] font-bold uppercase tracking-widest w-[20%]">Flagged Plays</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-border-subtle/50">
                                            {playersWithScores.length > 0 ? (
                                                playersWithScores.slice(0, 10).map((p) => {
                                                    const playerFlagCount = scores.filter(s => s.player_id === p.id && (s.per_10_score || 0) < 6.0).length;
                                                    return (
                                                        <tr key={p.id} className="group hover:bg-bg-elevated/40 transition-colors">
                                                            <td className="px-8 py-5">
                                                                <div className="flex items-center gap-4">
                                                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 ring-2 ring-border-subtle group-hover:ring-primary/40 transition-all" style={{backgroundImage: p.avatar_url ? `url("${p.avatar_url}")` : 'url("https://picsum.photos/id/65/100/100")'}}></div>
                                                                    <div>
                                                                        <span className="text-text-main text-base font-bold block mb-0.5">{p.name}</span>
                                                                        <span className="text-text-sub text-xs font-medium">{p.team} • #{p.number}</span>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-6 py-5">
                                                                <span className="inline-flex items-center justify-center rounded-lg bg-bg-elevated border border-border-subtle px-3 py-1.5 text-xs font-bold text-primary">{p.position}</span>
                                                            </td>
                                                            <td className="px-6 py-5 text-right">
                                                                <span className="text-status-good text-base font-bold">{p.averagePer10.toFixed(1)}</span>
                                                            </td>
                                                            <td className="px-6 py-5 text-right">
                                                                <span className="text-text-main text-base font-medium">{p.averageIQ.toFixed(0)}</span>
                                                            </td>
                                                            <td className="px-8 py-5 text-right">
                                                                {playerFlagCount > 0 ? (
                                                                    <div className="inline-flex items-center justify-center h-8 px-3 rounded-lg bg-status-red/10 border border-status-red/20 text-status-red font-bold text-sm gap-2">
                                                                        <span>{playerFlagCount}</span> <span className="material-symbols-outlined text-sm">flag</span>
                                                                    </div>
                                                                ) : <span className="text-text-disabled">-</span>}
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            ) : (
                                                <tr>
                                                    <td colSpan={5} className="px-8 py-12 text-center text-text-sub">
                                                        No scores yet. Start scoring to see player rankings!
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Export Card */}
                        <div className="flex flex-col gap-6 lg:w-[420px] shrink-0">
                            <div className="h-12 hidden lg:block"></div>
                            <div className="flex flex-col h-auto bg-bg-card border border-border-subtle rounded-3xl p-8 shadow-2xl sticky top-28">
                                <div className="flex items-start justify-between mb-8">
                                    <div className="bg-primary/5 border border-primary/20 p-4 rounded-2xl inline-flex shadow-[0_0_20px_rgba(79,70,229,0.1)]">
                                        <span className="material-symbols-outlined text-primary text-3xl">download</span>
                                    </div>
                                    <div className="px-3 py-1.5 bg-bg-elevated rounded-lg border border-border-subtle">
                                        <p className="text-text-sub text-[11px] font-mono tracking-tight">UTF-8 • CSV</p>
                                    </div>
                                </div>
                                <h3 className="text-text-main text-2xl font-bold tracking-tight">Export Data</h3>
                                <p className="text-text-sub text-sm mt-3 mb-8 leading-relaxed">
                                    Download the annotated play data for your records. The export includes all pillars, derived metrics, and intern notes.
                                </p>
                                <div className="bg-bg-deep border border-border-subtle rounded-xl mb-8 relative group/code overflow-hidden shadow-inner">
                                    <div className="flex items-center justify-between px-5 py-3 bg-bg-elevated/50 border-b border-border-subtle">
                                        <span className="text-[10px] font-bold text-text-sub uppercase tracking-widest">Schema Preview</span>
                                        <span className="material-symbols-outlined text-text-disabled text-base">data_object</span>
                                    </div>
                                    <div className="p-5 max-h-[140px] overflow-y-auto">
                                        <code className="text-xs text-pillar-improv font-mono leading-relaxed break-words block">
                                            <span className="text-pillar-e">game_id</span>, <span className="text-pillar-e">play_id</span>, <span className="text-pillar-e">player_id</span>, role, <span className="text-pillar-s">pillar_name</span>, raw_value, <span className="text-secondary">per_10</span>, aftersnap_iq, <span className="text-pillar-improv">quick_instinct</span>, lead_flag, <span className="text-status-red">red_flag</span>, notes
                                        </code>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 mt-auto">
                                    <button className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:shadow-primary/30 active:translate-y-0.5">
                                        <span className="material-symbols-outlined">file_download</span>
                                        Export CSV
                                    </button>
                                    <button className="bg-transparent border border-border-subtle hover:bg-bg-elevated hover:border-text-disabled text-text-main font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 transition-all">
                                        <span className="material-symbols-outlined text-lg">content_copy</span>
                                        Copy Schema
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SessionSummary;