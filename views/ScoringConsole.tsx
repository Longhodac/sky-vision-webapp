import React, { useState } from 'react';
import { View } from '../types';

interface ScoringConsoleProps {
    onNavigate: (view: View) => void;
}

const ScoringConsole: React.FC<ScoringConsoleProps> = ({ onNavigate }) => {
    const [releaseSpeed, setReleaseSpeed] = useState<number>(9);
    const [routeFidelity, setRouteFidelity] = useState<number>(8);
    const [leverage, setLeverage] = useState<number>(7);

    return (
        <div className="bg-bg-deep text-text-main font-display overflow-hidden h-screen flex flex-col selection:bg-primary selection:text-white">
            <header className="flex items-center justify-between whitespace-nowrap px-8 py-5 bg-bg-deep z-20 shrink-0">
                <div className="flex items-center gap-5 text-text-main cursor-pointer" onClick={() => onNavigate(View.DASHBOARD)}>
                    <div className="size-10 flex items-center justify-center bg-primary text-white rounded-xl shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-2xl">sports_football</span>
                    </div>
                    <div>
                        <h2 className="text-text-main text-lg font-bold leading-none tracking-tight">NFL Analytics Hub</h2>
                        <span className="text-xs text-text-sub font-medium mt-1 block">Scouting Portal</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-bg-elevated rounded-full border border-border-subtle">
                    <button className="px-4 py-1.5 text-xs font-semibold text-text-main bg-bg-card rounded-full shadow-sm">Play Review</button>
                    <button className="px-4 py-1.5 text-xs font-medium text-text-muted hover:text-text-main transition-colors">Monitoring</button>
                    <button className="px-4 py-1.5 text-xs font-medium text-text-muted hover:text-text-main transition-colors">Support</button>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex items-center gap-2 text-xs text-text-muted bg-bg-elevated px-3 py-1.5 rounded-lg border border-border-subtle/50">
                        <span className="material-symbols-outlined text-[16px]">history</span>
                        <span>Last saved: 2 mins ago</span>
                    </div>
                    <div className="flex items-center gap-3 pl-4 border-l border-border-subtle">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-text-main leading-none">Alex Scout</p>
                            <p className="text-xs text-text-muted leading-none mt-1">@alex_nfl</p>
                        </div>
                        <div 
                            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-bg-elevated ring-2 ring-bg-deep" 
                            style={{ backgroundImage: 'url("https://picsum.photos/100/100?random=1")' }}
                        ></div>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden p-6 pt-0 gap-6">
                {/* Left Side */}
                <aside className="w-full lg:w-[60%] flex flex-col gap-6 overflow-y-auto pr-2">
                     <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 group">
                        <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-60 transition-opacity duration-500" style={{backgroundImage: 'url("https://picsum.photos/800/450")'}}></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="flex shrink-0 items-center justify-center rounded-full size-20 bg-primary text-white hover:scale-110 transition-all duration-300 shadow-[0_0_40px_rgba(79,70,229,0.5)] backdrop-blur-md border border-white/20">
                                <span className="material-symbols-outlined text-4xl ml-1 filled">play_arrow</span>
                            </button>
                        </div>
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent pt-16 pb-6 px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                             <div className="relative h-10 flex items-center mb-4 cursor-pointer group/timeline">
                                <div className="absolute h-2 w-full bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                                    <div className="h-full bg-primary w-[35%] shadow-[0_0_15px_rgba(79,70,229,0.6)]"></div>
                                </div>
                                <div className="absolute left-[35%] top-1/2 -translate-y-1/2 size-5 bg-text-main rounded-full shadow-lg ring-4 ring-primary/30 z-20 scale-0 group-hover/timeline:scale-100 transition-transform duration-200"></div>
                                <div className="absolute left-[15%] top-1/2 -translate-y-1/2 z-10 group/marker">
                                    <div className="size-3 bg-pillar-a rounded-full border-2 border-black cursor-pointer hover:scale-150 transition-transform shadow-[0_0_10px_rgba(245,158,11,0.8)]"></div>
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-bg-elevated border border-border-subtle text-text-main text-[10px] px-2 py-1 rounded-md opacity-0 group-hover/marker:opacity-100 whitespace-nowrap pointer-events-none font-bold tracking-wide shadow-xl">Snap</div>
                                </div>
                                {/* More markers can be added here */}
                            </div>
                            <div className="flex items-center justify-between text-text-main">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                                        <span className="material-symbols-outlined">volume_up</span>
                                    </div>
                                    <div className="text-sm font-mono font-medium tracking-wide bg-black/40 px-3 py-1 rounded-lg border border-white/5">
                                        <span className="text-primary">0:04</span> <span className="text-text-muted mx-1">/</span> 0:12
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full" title="Settings">settings</span>
                                    <span className="material-symbols-outlined cursor-pointer hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full" title="Fullscreen">fullscreen</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                         <div className="col-span-2 bg-bg-card rounded-2xl border border-border-subtle p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-6 border-b border-border-subtle pb-4">
                                <div className="size-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                                    <span className="material-symbols-outlined text-lg">analytics</span>
                                </div>
                                <h3 className="text-text-main font-bold text-sm tracking-wide uppercase">Play Context</h3>
                            </div>
                             <div className="grid grid-cols-3 gap-y-6 gap-x-8">
                                <div><p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">Game ID</p><p className="text-text-main font-mono text-sm bg-bg-elevated px-3 py-1.5 rounded-md inline-block border border-white/5">#2492-ATL-NO</p></div>
                                <div><p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">Quarter</p><p className="text-text-main font-mono text-sm">Q3 (08:42)</p></div>
                                <div><p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">Down & Dist</p><p className="text-text-main font-mono text-sm font-bold text-pillar-a">2nd & 8</p></div>
                                <div className="col-span-2">
                                    <p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">Defensive Scheme</p>
                                    <div className="flex items-center gap-2">
                                        <span className="px-3 py-1 rounded-full bg-bg-elevated text-xs font-medium text-text-main border border-border-subtle hover:border-text-muted transition-colors cursor-default">Cover 3 Match</span>
                                        <span className="px-3 py-1 rounded-full bg-bg-elevated text-xs font-medium text-text-main border border-border-subtle hover:border-text-muted transition-colors cursor-default">Nickel</span>
                                    </div>
                                </div>
                                <div><p className="text-text-muted text-xs font-semibold uppercase tracking-wider mb-2">Play ID</p><p className="text-text-main font-mono text-sm">402</p></div>
                            </div>
                         </div>
                         <div className="col-span-1 bg-bg-card rounded-2xl border border-border-subtle p-6 flex flex-col shadow-sm">
                             <div className="flex items-center gap-3 mb-6 border-b border-border-subtle pb-4">
                                <div className="size-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-symbols-outlined text-lg">timer</span>
                                </div>
                                <h3 className="text-text-main font-bold text-sm tracking-wide uppercase">Sequence</h3>
                            </div>
                            <div className="flex-1 flex flex-col justify-center pl-4 relative gap-6">
                                <div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-border-subtle rounded-full"></div>
                                <div className="flex items-center gap-4 relative z-10 group">
                                    <div className="size-3 rounded-full bg-bg-deep ring-2 ring-pillar-a shadow-[0_0_10px_rgba(245,158,11,0.4)] group-hover:scale-125 transition-transform"></div>
                                    <div><span className="text-xs font-bold text-pillar-a block">Snap</span><span className="text-xs text-text-disabled font-mono">0:00</span></div>
                                </div>
                                <div className="flex items-center gap-4 relative z-10 group">
                                    <div className="size-3 rounded-full bg-bg-deep ring-2 ring-pillar-s shadow-[0_0_10px_rgba(59,130,246,0.4)] group-hover:scale-125 transition-transform"></div>
                                    <div><span className="text-xs font-bold text-pillar-s block">Release</span><span className="text-xs text-text-disabled font-mono">0:02</span></div>
                                </div>
                                <div className="flex items-center gap-4 relative z-10 group">
                                    <div className="size-3 rounded-full bg-bg-deep ring-2 ring-pillar-e shadow-[0_0_10px_rgba(139,92,246,0.4)] group-hover:scale-125 transition-transform"></div>
                                    <div><span className="text-xs font-bold text-pillar-e block">Arrival</span><span className="text-xs text-text-disabled font-mono">0:05</span></div>
                                </div>
                            </div>
                         </div>
                    </div>
                </aside>

                {/* Right Side - Console */}
                <main className="w-full lg:w-[40%] bg-bg-card rounded-2xl border border-border-subtle flex flex-col h-full relative shadow-2xl overflow-hidden">
                    <div className="flex-none p-6 border-b border-border-subtle bg-bg-card/95 backdrop-blur z-10">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-text-main text-xl font-bold tracking-tight">Scoring Console</h2>
                            <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20 tracking-wider shadow-[0_0_10px_rgba(79,70,229,0.1)]">
                                LIVE EDIT
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <div className="relative group">
                                <label className="absolute -top-2.5 left-3 bg-bg-card px-1.5 text-[10px] text-primary font-bold tracking-wider z-10">PLAYER</label>
                                <div className="relative">
                                    <select className="w-full bg-bg-elevated border border-border-subtle rounded-xl text-sm text-text-main py-3 pl-4 pr-10 focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none cursor-pointer hover:bg-bg-elevated/80 transition-colors shadow-inner">
                                        <option>WR #18 - J. Jefferson</option>
                                    </select>
                                    <div className="absolute right-3 top-3 pointer-events-none text-text-muted">
                                        <span className="material-symbols-outlined text-xl">expand_more</span>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <label className="absolute -top-2.5 left-3 bg-bg-card px-1.5 text-[10px] text-text-muted font-bold tracking-wider group-hover:text-primary transition-colors z-10">ROLE</label>
                                <div className="relative">
                                    <select className="w-full bg-bg-elevated border border-border-subtle rounded-xl text-sm text-text-main py-3 pl-4 pr-10 focus:ring-2 focus:ring-primary focus:border-primary outline-none appearance-none cursor-pointer hover:bg-bg-elevated/80 transition-colors shadow-inner">
                                        <option>Offense (WR)</option>
                                    </select>
                                    <div className="absolute right-3 top-3 pointer-events-none text-text-muted">
                                        <span className="material-symbols-outlined text-xl">expand_more</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-10 pb-32">
                         <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-pillar-eyes">visibility</span>
                                <h3 className="text-text-main font-bold text-sm uppercase tracking-wider">Sky Vision</h3>
                                <div className="h-px bg-border-subtle flex-1 ml-2"></div>
                                <span className="text-[10px] font-mono text-text-muted bg-bg-elevated px-2 py-1 rounded border border-border-subtle">WEIGHT: 40%</span>
                            </div>
                            
                            <div className="space-y-4 group p-4 rounded-xl border border-transparent hover:bg-bg-elevated/20 hover:border-border-subtle/50 transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <label className="text-text-muted text-sm font-medium flex items-center gap-1.5">
                                        Release Speed
                                        <span className="material-symbols-outlined text-[16px] text-text-disabled cursor-help hover:text-text-main transition-colors" title="Speed off the line">help</span>
                                    </label>
                                    <span className="text-status-good text-xs font-bold px-2 py-0.5 bg-status-good/10 rounded border border-status-good/20 opacity-0 group-hover:opacity-100 transition-opacity">Excellent</span>
                                </div>
                                <div className="flex items-center justify-between gap-1">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                        <button 
                                            key={val}
                                            onClick={() => setReleaseSpeed(val)}
                                            className={`size-8 rounded-lg flex items-center justify-center text-xs font-medium transition-all duration-200 ${
                                                releaseSpeed === val 
                                                ? 'bg-status-good text-bg-deep font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)] ring-2 ring-bg-card transform scale-110 z-10 size-9' 
                                                : 'text-text-muted hover:bg-bg-elevated hover:text-white'
                                            }`}
                                        >
                                            {val}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4 group p-4 rounded-xl border border-transparent hover:bg-bg-elevated/20 hover:border-border-subtle/50 transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <label className="text-text-muted text-sm font-medium flex items-center gap-1.5">
                                        Route Fidelity
                                        <span className="material-symbols-outlined text-[16px] text-text-disabled cursor-help hover:text-text-main transition-colors">help</span>
                                    </label>
                                    <span className="text-text-muted text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">{routeFidelity}/10</span>
                                </div>
                                <div className="py-2 px-1">
                                    <input 
                                        className="w-full bg-transparent rounded-lg appearance-none cursor-pointer" 
                                        type="range" min="1" max="10" 
                                        value={routeFidelity}
                                        onChange={(e) => setRouteFidelity(parseInt(e.target.value))}
                                    />
                                </div>
                                <div className="flex justify-between text-[10px] text-text-disabled px-1 font-medium tracking-wide uppercase">
                                    <span>Poor (1)</span><span>Elite (10)</span>
                                </div>
                            </div>
                        </div>

                         <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-pillar-inno">psychology</span>
                                <h3 className="text-text-main font-bold text-sm uppercase tracking-wider">Aftersnap IQ</h3>
                                <div className="h-px bg-border-subtle flex-1 ml-2"></div>
                                <span className="text-[10px] font-mono text-text-muted bg-bg-elevated px-2 py-1 rounded border border-border-subtle">WEIGHT: 60%</span>
                            </div>

                            <div className="space-y-4 group p-4 rounded-xl border border-transparent hover:bg-bg-elevated/20 hover:border-border-subtle/50 transition-all duration-300">
                                <div className="flex items-center justify-between">
                                    <label className="text-text-muted text-sm font-medium flex items-center gap-1.5">
                                        Leverage Maint.
                                    </label>
                                </div>
                                <div className="flex items-center justify-between gap-1">
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                                        <button 
                                            key={val}
                                            onClick={() => setLeverage(val)}
                                            className={`size-8 rounded-lg flex items-center justify-center text-xs font-medium transition-all duration-200 ${
                                                leverage === val 
                                                ? 'bg-primary text-white font-bold shadow-[0_0_20px_rgba(79,70,229,0.5)] ring-2 ring-bg-card transform scale-110 z-10 size-9' 
                                                : 'text-text-muted hover:bg-bg-elevated hover:text-white'
                                            }`}
                                        >
                                            {val}
                                        </button>
                                    ))}
                                </div>
                            </div>
                         </div>

                        <div className="bg-bg-elevated/40 border border-border-subtle rounded-2xl p-6 mt-8 relative overflow-hidden shadow-lg group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="absolute -right-4 -top-4 opacity-5 pointer-events-none">
                                <span className="material-symbols-outlined text-[140px] text-primary">monitoring</span>
                            </div>
                            <div className="grid grid-cols-2 gap-8 mb-6 relative z-10">
                                <div className="flex flex-col">
                                    <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold mb-2">PER-10 Score</p>
                                    <div className="flex items-baseline">
                                        <div className="text-4xl font-bold text-text-main tracking-tighter">{((releaseSpeed + routeFidelity + leverage)/3 * 1.05).toFixed(1)}</div>
                                        <span className="text-sm text-text-muted font-normal ml-1 mb-1">/10</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                        <div className="h-full bg-text-main w-[84%]"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold mb-2">IQ Rating</p>
                                    <div className="flex items-baseline">
                                        <div className="text-4xl font-bold text-primary tracking-tighter">92</div>
                                        <span className="text-sm text-primary/70 font-normal ml-1 mb-1">%</span>
                                    </div>
                                    <div className="w-full h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                        <div className="h-full bg-primary w-[92%]"></div>
                                    </div>
                                </div>
                            </div>
                             <div className="flex flex-wrap gap-2 relative z-10">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-pillar-improv/10 border border-pillar-improv/20 text-pillar-improv hover:bg-pillar-improv/20 transition-colors cursor-default">
                                    <span className="material-symbols-outlined text-sm">bolt</span>
                                    <span className="text-xs font-bold">Quick Instinct</span>
                                </div>
                             </div>
                        </div>

                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-bg-card/90 border-t border-border-subtle flex gap-4 backdrop-blur-md z-20">
                        <button className="flex-1 py-3.5 px-4 rounded-xl bg-bg-elevated text-text-main font-semibold border border-border-subtle hover:bg-white/5 transition-all duration-200 text-sm hover:border-text-muted shadow-sm hover:shadow-md">
                            Save Draft
                        </button>
                        <button className="flex-[2] py-3.5 px-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 flex items-center justify-center gap-2 text-sm hover:scale-[1.02] active:scale-[0.98]" onClick={() => onNavigate(View.SUMMARY)}>
                            Save & Next Play
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ScoringConsole;