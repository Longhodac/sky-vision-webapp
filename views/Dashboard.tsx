import React from 'react';
import { View } from '../types';

interface DashboardProps {
    onNavigate: (view: View) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
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
                    <div className="relative hidden md:block">
                        <input className="bg-bg-elevated border-none rounded-full py-3 pl-12 pr-6 text-sm w-64 focus:ring-1 focus:ring-primary placeholder-text-sub/50 text-text-main" placeholder="Search..." type="text"/>
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-sub text-[20px]">search</span>
                    </div>
                    <button className="flex items-center gap-3 bg-bg-elevated rounded-full pl-1 pr-4 py-1 hover:bg-bg-elevated/80 transition-all border border-white/5">
                        <div className="bg-bg-card rounded-full px-3 py-1.5 text-xs font-bold text-text-sub border border-white/5">Now</div>
                        <span className="text-sm font-medium text-text-main">Oct 14</span>
                        <span className="material-symbols-outlined text-text-sub text-[18px]">keyboard_arrow_down</span>
                    </button>
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
                        <div className="lg:col-span-5 bg-bg-card rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between border border-white/5 shadow-xl shadow-black/20 cursor-pointer group" onClick={() => onNavigate(View.PLAYER_PROFILE)}>
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex flex-col">
                                    <h2 className="text-text-sub text-sm font-bold tracking-widest uppercase mb-1">Target Profile</h2>
                                    <div className="flex items-center gap-3">
                                        <h1 className="text-3xl xl:text-4xl font-bold text-white tracking-tight group-hover:text-primary transition-colors">Justin Jefferson</h1>
                                        <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded-md">WR</span>
                                    </div>
                                    <div className="text-text-sub text-sm mt-2 font-medium"> Minnesota Vikings • #18 </div>
                                </div>
                                <button className="size-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <span className="material-symbols-outlined text-text-sub">more_horiz</span>
                                </button>
                            </div>
                            <div className="flex items-end justify-between mt-auto relative z-10">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-5xl font-bold text-white">92.4</span>
                                        <span className="text-primary text-sm font-bold bg-primary/10 px-2 py-1 rounded-lg">IQ Score</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex flex-col">
                                            <span className="text-text-sub text-xs">Height</span>
                                            <span className="text-text-main font-semibold">6'1"</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-text-sub text-xs">Weight</span>
                                            <span className="text-text-main font-semibold">195 lbs</span>
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-text-sub text-xs">College</span>
                                            <span className="text-text-main font-semibold">LSU</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative size-32 rounded-full border-4 border-bg-elevated overflow-hidden shadow-2xl">
                                    <div className="bg-center bg-no-repeat bg-cover w-full h-full" style={{backgroundImage: 'url("https://picsum.photos/id/65/200/200")'}}></div>
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
                                        <span className="text-4xl font-bold text-white">8.4</span>
                                        <span className="text-status-good text-sm font-bold mb-1 flex items-center">
                                            <span className="material-symbols-outlined text-[16px]">arrow_upward</span> 1.2%
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
                                        <h3 className="font-bold text-lg text-text-main">Efficiency</h3>
                                        <div className="flex gap-1">
                                            <div className="size-2 bg-pillar-a rounded-full"></div>
                                            <div className="size-2 bg-text-sub/20 rounded-full"></div>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-3 my-4">
                                        <span className="text-4xl font-bold text-white">9.1</span>
                                        <span className="text-status-good text-sm font-bold mb-1 flex items-center">
                                            <span className="material-symbols-outlined text-[16px]">arrow_upward</span> 0.8%
                                        </span>
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
                                <div className="flex items-center gap-4 p-3 rounded-2xl bg-bg-elevated/50 hover:bg-bg-elevated transition-colors cursor-pointer group border border-transparent hover:border-white/10" onClick={() => onNavigate(View.SCORING)}>
                                    <div className="size-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                                        <span className="material-symbols-outlined">play_arrow</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between mb-1">
                                            <span className="font-bold text-sm text-white">Deep Post vs Sauce Gardner</span>
                                            <span className="text-xs text-text-sub">14:02</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-bold text-pillar-s uppercase bg-pillar-s/10 px-1.5 py-0.5 rounded">Separation Win</span>
                                            <span className="text-xs text-text-muted">Target Share +12%</span>
                                        </div>
                                    </div>
                                </div>
                                {/* ... more items */}
                            </div>
                            <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5 text-sm">
                                <div className="flex items-center gap-2"><span className="size-3 bg-pillar-s rounded-full block"></span><span className="text-text-sub">Wins</span></div>
                                <div className="flex items-center gap-2"><span className="size-3 bg-status-red rounded-full block"></span><span className="text-text-sub">Errors</span></div>
                                <span className="font-bold text-white ml-auto">Total: 284</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;