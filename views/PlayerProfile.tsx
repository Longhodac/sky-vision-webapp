import React from 'react';
import { View } from '../types';

interface PlayerProfileProps {
    onNavigate: (view: View) => void;
}

const PlayerProfile: React.FC<PlayerProfileProps> = ({ onNavigate }) => {
    return (
        <div className="flex-1 overflow-y-auto p-6 lg:px-8 lg:py-10 bg-bg-deep">
            <div className="mx-auto max-w-[1400px] flex flex-col gap-8">
                {/* Breadcrumb */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-text-sub">
                    <span className="hover:text-white transition-colors cursor-pointer" onClick={() => onNavigate(View.DASHBOARD)}>Scouting</span>
                    <span className="material-symbols-outlined text-[14px] text-text-muted">chevron_right</span>
                    <span className="hover:text-white transition-colors">WR</span>
                    <span className="material-symbols-outlined text-[14px] text-text-muted">chevron_right</span>
                    <span className="text-white font-medium">Justin Jefferson</span>
                </div>

                {/* Profile Header */}
                <section className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between glass-panel p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                        <div className="relative group">
                            <div className="size-28 md:size-36 rounded-full bg-cover bg-center border-4 border-bg-elevated shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" style={{backgroundImage: 'url("https://picsum.photos/id/65/200/200")'}}></div>
                            <div className="absolute -bottom-1 -right-1 flex size-10 items-center justify-center rounded-full bg-primary text-white font-bold border-4 border-bg-card shadow-lg text-sm">18</div>
                        </div>
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <div className="flex flex-col items-center md:items-start">
                                <h1 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight">Justin Jefferson</h1>
                                <div className="flex items-center gap-3 text-text-sub text-base mt-2">
                                    <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded text-xs tracking-wide">WR</span>
                                    <span className="size-1 rounded-full bg-text-muted"></span>
                                    <span>Minnesota Vikings</span>
                                    <span className="size-1 rounded-full bg-text-muted"></span>
                                    <span>6'1" • 195 lbs</span>
                                    <span className="size-1 rounded-full bg-text-muted"></span>
                                    <span>Exp: 4 Years</span>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                                <div className="group relative cursor-help flex items-center gap-1.5 rounded-full bg-pillar-inno/10 border border-pillar-inno/20 px-4 py-1.5 text-xs font-semibold text-pillar-inno hover:bg-pillar-inno/20 transition-all hover:border-pillar-inno/40">
                                    <span className="material-symbols-outlined text-[16px]">bolt</span> Quick Instinct
                                </div>
                                <div className="flex items-center gap-1.5 rounded-full bg-bg-elevated border border-border-subtle px-4 py-1.5 text-xs font-medium text-text-sub hover:text-white hover:border-text-muted transition-colors cursor-default">
                                    <span className="material-symbols-outlined text-[16px]">timeline</span> Route Technician
                                </div>
                                <div className="flex items-center gap-1.5 rounded-full bg-bg-elevated border border-border-subtle px-4 py-1.5 text-xs font-medium text-text-sub hover:text-white hover:border-text-muted transition-colors cursor-default">
                                    <span className="material-symbols-outlined text-[16px]">sports_football</span> YAC Monster
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 relative z-10 self-center md:self-start mt-4 md:mt-2">
                        <button className="flex items-center gap-2 rounded-lg bg-bg-elevated border border-border-subtle px-5 py-2.5 text-sm font-medium text-text-main hover:bg-bg-elevated/80 hover:border-text-muted transition-all" onClick={() => onNavigate(View.SCORING)}>
                            <span className="material-symbols-outlined text-[20px]">movie</span> Watch Tape
                        </button>
                        <button className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:shadow-primary/40 hover:-translate-y-0.5">
                            <span className="material-symbols-outlined text-[20px] fill-1">bookmark</span> Shortlist
                        </button>
                    </div>
                </section>

                {/* Key Stats Row */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* PER-10 */}
                    <div className="glass-panel relative overflow-hidden rounded-2xl p-6 group">
                        <div className="absolute right-0 top-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                            <span className="material-symbols-outlined text-7xl text-primary">speed</span>
                        </div>
                        <div className="flex flex-col justify-between h-full gap-4 relative z-10">
                            <div>
                                <p className="text-sm font-medium text-text-sub mb-1">PER-10 Score</p>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-bold text-primary tracking-tighter">9.2</span>
                                    <div className="flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary border border-primary/20">
                                        <span className="material-symbols-outlined text-[12px]">arrow_upward</span> Top 1%
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1.5 rounded-full bg-bg-elevated overflow-hidden">
                                <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-primary to-indigo-400 shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                            </div>
                        </div>
                    </div>

                    {/* Aftersnap IQ */}
                    <div className="glass-panel relative overflow-hidden rounded-2xl p-6 group">
                        <div className="flex flex-col justify-between h-full gap-4">
                            <div>
                                <p className="text-sm font-medium text-text-sub mb-1">AFTERSNAP IQ</p>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-bold text-white tracking-tighter">8.8</span>
                                    <span className="text-sm font-medium text-pillar-eyes">94th %ile</span>
                                </div>
                            </div>
                            <div className="flex items-end gap-[3px] h-8 mt-2">
                                {[20,30,40,50,70,60,40,85,30,10].map((h, i) => (
                                    <div key={i} className={`flex-1 rounded-sm transition-all ${i === 7 ? 'bg-pillar-eyes shadow-[0_0_8px_rgba(16,185,129,0.4)]' : 'bg-bg-elevated group-hover:bg-bg-elevated/70'}`} style={{height: `${h}%`}}></div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Total Snaps */}
                    <div className="glass-panel relative overflow-hidden rounded-2xl p-6 group">
                        <div className="flex flex-col justify-between h-full gap-4">
                            <div>
                                <p className="text-sm font-medium text-text-sub mb-1">Total Snaps</p>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-bold text-white tracking-tighter">450</span>
                                    <span className="text-xs font-medium text-status-red flex items-center bg-status-red/10 px-1.5 py-0.5 rounded">
                                        <span className="material-symbols-outlined text-[12px]">arrow_downward</span> 2.1%
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between text-xs text-text-sub pt-2 border-t border-border-subtle/50 mt-1">
                                <span>Pass: <span className="text-white font-medium">280</span></span>
                                <span>Run: <span className="text-white font-medium">170</span></span>
                            </div>
                        </div>
                    </div>

                    {/* Target Share */}
                    <div className="glass-panel relative overflow-hidden rounded-2xl p-6 group">
                        <div className="flex flex-col justify-between h-full gap-4">
                            <div>
                                <p className="text-sm font-medium text-text-sub mb-1">Target Share</p>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-bold text-white tracking-tighter">28.5<span className="text-2xl text-text-sub">%</span></span>
                                    <span className="text-xs font-medium text-secondary flex items-center bg-secondary/10 px-1.5 py-0.5 rounded">
                                        <span className="material-symbols-outlined text-[12px]">arrow_upward</span> 4.5%
                                    </span>
                                </div>
                            </div>
                            <div className="text-xs text-text-sub pt-2 border-t border-border-subtle/50 mt-1">
                                League Avg: 18.2% (WR1)
                            </div>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Sky Vision Profile (Radar) */}
                    <div className="glass-panel flex flex-col rounded-2xl p-6 lg:col-span-1 min-h-[420px]">
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="font-bold text-lg text-white">Sky Vision Profile</h3>
                            <button className="text-text-sub hover:text-white transition-colors p-1 rounded-md hover:bg-bg-elevated">
                                <span className="material-symbols-outlined text-[20px]">more_horiz</span>
                            </button>
                        </div>
                        <div className="relative flex flex-1 items-center justify-center">
                            {/* SVG Radar implementation for better styling control than Recharts default */}
                            <svg className="w-full max-w-[300px]" viewBox="0 0 200 200">
                                <circle cx="100" cy="100" fill="none" r="20" stroke="#27272A" strokeWidth="1"></circle>
                                <circle cx="100" cy="100" fill="none" r="40" stroke="#27272A" strokeWidth="1"></circle>
                                <circle cx="100" cy="100" fill="none" r="60" stroke="#27272A" strokeWidth="1"></circle>
                                <circle cx="100" cy="100" fill="none" r="80" stroke="#27272A" strokeWidth="1"></circle>
                                <line stroke="#27272A" strokeWidth="1" x1="100" x2="100" y1="20" y2="180"></line>
                                <line stroke="#27272A" strokeWidth="1" x1="30.7" x2="169.3" y1="60" y2="140"></line>
                                <line stroke="#27272A" strokeWidth="1" x1="30.7" x2="169.3" y1="140" y2="60"></line>
                                <polygon fill="rgba(79, 70, 229, 0.15)" filter="drop-shadow(0 0 4px rgba(79, 70, 229, 0.5))" points="100,25 165,65 150,135 100,175 45,135 35,65" stroke="#4F46E5" strokeLinejoin="round" strokeWidth="2.5"></polygon>
                                <text className="font-sans" fill="#A1A1A1" fontSize="8" fontWeight="600" textAnchor="middle" x="100" y="12">Separation</text>
                                <text className="font-sans" fill="#A1A1A1" fontSize="8" fontWeight="600" textAnchor="middle" x="175" y="52">Hands</text>
                                <text className="font-sans" fill="#A1A1A1" fontSize="8" fontWeight="600" textAnchor="middle" x="175" y="152">YAC</text>
                                <text className="font-sans" fill="#A1A1A1" fontSize="8" fontWeight="600" textAnchor="middle" x="100" y="192">Route</text>
                                <text className="font-sans" fill="#A1A1A1" fontSize="8" fontWeight="600" textAnchor="middle" x="25" y="152">Release</text>
                                <text className="font-sans" fill="#A1A1A1" fontSize="8" fontWeight="600" textAnchor="middle" x="25" y="52">Speed</text>
                            </svg>
                        </div>
                    </div>

                    {/* Metric Breakdown */}
                    <div className="glass-panel flex flex-col rounded-2xl p-6 lg:col-span-2 min-h-[420px]">
                        <div className="mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <h3 className="font-bold text-lg text-white">Metric Breakdown</h3>
                                <div className="flex rounded-lg bg-bg-elevated p-1 border border-border-subtle">
                                    <button className="rounded-md bg-bg-card px-3 py-1 text-xs font-medium text-white shadow-sm">All</button>
                                    <button className="rounded-md px-3 py-1 text-xs font-medium text-text-sub hover:text-white transition-colors">Physical</button>
                                    <button className="rounded-md px-3 py-1 text-xs font-medium text-text-sub hover:text-white transition-colors">Technical</button>
                                </div>
                            </div>
                            <button className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors">
                                Export Data <span className="material-symbols-outlined text-[16px]">download</span>
                            </button>
                        </div>
                        <div className="flex flex-col gap-4 overflow-y-auto pr-2 flex-1">
                            {/* Items */}
                            <div className="grid grid-cols-12 items-center gap-4 rounded-xl bg-bg-elevated/50 p-4 border border-transparent hover:border-pillar-s/30 hover:bg-bg-elevated transition-all group">
                                <div className="col-span-12 sm:col-span-3 flex flex-col">
                                    <span className="text-sm font-semibold text-white">Separation</span>
                                    <span className="text-xs text-pillar-s font-medium">Vs. Man Coverage</span>
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <div className="relative h-2 w-full rounded-full bg-bg-deep/80">
                                        <div className="absolute top-0 left-0 h-full w-[98%] rounded-full bg-pillar-s shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-1 text-right sm:text-left">
                                    <span className="text-lg font-bold text-white">98</span>
                                    <span className="text-[10px] text-text-sub">/100</span>
                                </div>
                                <div className="col-span-6 sm:col-span-2 flex justify-end">
                                    <span className="material-symbols-outlined text-pillar-s opacity-70 group-hover:opacity-100 transition-opacity">show_chart</span>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-12 items-center gap-4 rounded-xl bg-bg-elevated/50 p-4 border border-transparent hover:border-pillar-e/30 hover:bg-bg-elevated transition-all group">
                                <div className="col-span-12 sm:col-span-3 flex flex-col">
                                    <span className="text-sm font-semibold text-white">Contested Catch</span>
                                    <span className="text-xs text-pillar-e font-medium">Win Rate</span>
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <div className="relative h-2 w-full rounded-full bg-bg-deep/80">
                                        <div className="absolute top-0 left-0 h-full w-[85%] rounded-full bg-pillar-e shadow-[0_0_8px_rgba(139,92,246,0.4)]"></div>
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-1 text-right sm:text-left">
                                    <span className="text-lg font-bold text-white">85</span>
                                    <span className="text-[10px] text-text-sub">/100</span>
                                </div>
                                <div className="col-span-6 sm:col-span-2 flex justify-end">
                                    <span className="material-symbols-outlined text-pillar-e opacity-70 group-hover:opacity-100 transition-opacity">show_chart</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-12 items-center gap-4 rounded-xl bg-bg-elevated/50 p-4 border border-transparent border-l-4 border-l-status-red hover:bg-bg-elevated transition-all group">
                                <div className="col-span-12 sm:col-span-3 flex flex-col">
                                    <span className="text-sm font-semibold text-white">Blocking</span>
                                    <span className="text-xs text-text-sub">Run Support</span>
                                </div>
                                <div className="col-span-12 sm:col-span-6">
                                    <div className="relative h-2 w-full rounded-full bg-bg-deep/80">
                                        <div className="absolute top-0 left-0 h-full w-[45%] rounded-full bg-status-red shadow-[0_0_8px_rgba(239,68,68,0.4)]"></div>
                                    </div>
                                </div>
                                <div className="col-span-6 sm:col-span-1 text-right sm:text-left">
                                    <span className="text-lg font-bold text-white">45</span>
                                    <span className="text-[10px] text-text-sub">/100</span>
                                </div>
                                <div className="col-span-6 sm:col-span-2 flex justify-end">
                                    <span className="material-symbols-outlined text-status-red opacity-70 group-hover:opacity-100 transition-opacity">trending_down</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="glass-panel flex flex-col rounded-2xl p-6 lg:col-span-2">
                         <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-lg text-white">Performance Trend (Last 8 Games)</h3>
                                <p className="text-xs text-text-sub mt-1">PER-10 vs AFTERSNAP IQ</p>
                            </div>
                            <div className="flex items-center gap-6 text-xs font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="size-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(79,70,229,0.8)]"></span>
                                    <span className="text-white">PER-10</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="size-2.5 rounded-full bg-text-muted"></span>
                                    <span className="text-text-sub">AFTERSNAP IQ</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full h-[220px] mt-auto">
                            <svg className="w-full h-full preserve-3d" viewBox="0 0 600 200">
                                <line stroke="#27272A" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="180" y2="180"></line>
                                <line stroke="#27272A" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="100" y2="100"></line>
                                <line stroke="#27272A" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="600" y1="20" y2="20"></line>
                                <polyline fill="none" filter="drop-shadow(0 0 8px rgba(79, 70, 229, 0.6))" points="0,120 85,80 170,90 255,40 340,50 425,30 510,40 600,20" stroke="#4F46E5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>
                                <circle cx="85" cy="80" fill="#09090B" r="5" stroke="#4F46E5" strokeWidth="2.5"></circle>
                                <circle cx="255" cy="40" fill="#09090B" r="5" stroke="#4F46E5" strokeWidth="2.5"></circle>
                                <circle cx="425" cy="30" fill="#09090B" r="5" stroke="#4F46E5" strokeWidth="2.5"></circle>
                                <circle cx="600" cy="20" fill="#09090B" r="5" stroke="#4F46E5" strokeWidth="2.5"></circle>
                                <polyline fill="none" points="0,140 85,110 170,120 255,80 340,90 425,70 510,80 600,60" stroke="#52525B" strokeDasharray="6 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
                            </svg>
                            <div className="flex justify-between mt-3 text-xs font-medium text-text-disabled">
                                <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span><span>Week 5</span><span>Week 6</span><span>Week 7</span><span>Week 8</span>
                            </div>
                        </div>
                    </div>

                     <div className="glass-panel flex flex-col rounded-2xl p-6 lg:col-span-1 border border-status-red/30 bg-gradient-to-b from-status-red/5 to-transparent">
                        <div className="mb-5 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-status-red animate-pulse">warning</span>
                                <h3 className="font-bold text-lg text-white">Critical Flags</h3>
                            </div>
                            <span className="flex size-6 items-center justify-center rounded-full bg-status-red text-xs font-bold text-white shadow-lg shadow-status-red/30">2</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="group flex flex-col gap-2 rounded-xl bg-bg-elevated p-4 border border-transparent hover:border-status-red/40 transition-all hover:bg-bg-elevated/80">
                                <div className="flex justify-between items-start">
                                    <span className="text-sm font-semibold text-white">Press Coverage Release</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-status-red bg-status-red/10 px-2 py-0.5 rounded">High Priority</span>
                                </div>
                                <p className="text-xs text-text-sub leading-relaxed">Struggles to disengage against physical DBs within 5 yards. Efficiency drops 15%.</p>
                                <div className="mt-2 flex w-fit items-center gap-1 text-xs font-medium text-primary hover:text-white transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined text-[16px]">play_circle</span> View 12 Plays
                                </div>
                            </div>
                        </div>
                        <button className="mt-auto pt-5 text-center text-xs font-medium text-text-sub hover:text-white transition-colors w-full border-t border-border-subtle/50">
                            View all historical flags
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlayerProfile;