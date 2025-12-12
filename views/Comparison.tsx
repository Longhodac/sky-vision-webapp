import React from 'react';
import { View } from '../types';

interface ComparisonProps {
    onNavigate: (view: View) => void;
}

const Comparison: React.FC<ComparisonProps> = ({ onNavigate }) => {
    return (
        <div className="flex-1 overflow-y-auto px-2 scroll-smooth bg-bg-deep p-6">
            <div className="flex flex-col h-full bg-bg-deep pr-4 py-4 rounded-[2.5rem] w-full max-w-[1600px] mx-auto">
                 <header className="flex items-center justify-between px-6 py-2 mb-4 shrink-0">
                    <div className="flex items-center gap-4 text-text-main">
                        <h2 className="text-white text-3xl font-bold leading-tight tracking-tight font-display uppercase">Comparison</h2>
                    </div>
                    <div className="flex items-center gap-4">
                         <div className="hidden md:flex items-center gap-3 bg-bg-card rounded-full p-1.5 pl-5 pr-2 border border-border-subtle">
                            <span className="text-xs text-text-sub font-medium">Date: <span className="text-white">Now</span></span>
                            <button className="size-8 rounded-full bg-bg-elevated flex items-center justify-center text-text-sub hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                        </div>
                         <div className="flex items-center gap-3 cursor-pointer pl-4">
                             <div className="text-right hidden sm:block">
                                <p className="text-sm font-bold text-white">Alex Morgan</p>
                                <p className="text-[10px] text-text-sub font-medium">@ScoutMaster</p>
                            </div>
                            <div className="relative">
                                <div className="bg-center bg-no-repeat bg-cover rounded-full size-11 border-2 border-bg-elevated" style={{backgroundImage: 'url("https://picsum.photos/id/100/100/100")'}}></div>
                            </div>
                        </div>
                    </div>
                 </header>

                 <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 pb-6 h-full">
                     {/* Left Column */}
                     <div className="xl:col-span-4 flex flex-col gap-6 h-full">
                         {/* Player Select */}
                        <div className="bg-bg-card rounded-3xl p-6 border border-border-subtle flex flex-col gap-5">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-bold text-text-sub uppercase tracking-wider">Player Select</h3>
                                <button className="text-text-sub hover:text-white transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
                            </div>
                            <div className="flex gap-4 items-center">
                                {/* Player A */}
                                <div className="flex-1 bg-bg-deep rounded-2xl p-4 border border-border-subtle hover:border-primary/50 transition-colors group cursor-pointer relative overflow-hidden">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-14 border-2 border-primary group-hover:scale-105 transition-transform" style={{backgroundImage: 'url("https://picsum.photos/id/177/200/200")'}}></div>
                                        <div className="text-center">
                                            <p className="text-white font-bold text-lg leading-tight">D. Adams</p>
                                            <p className="text-text-sub text-xs font-medium">Las Vegas</p>
                                        </div>
                                        <div className="mt-1">
                                            <span className="text-primary text-xl font-bold">8.4</span>
                                            <span className="text-text-sub text-[10px] uppercase ml-1">Per-10</span>
                                        </div>
                                    </div>
                                    <svg className="absolute bottom-0 left-0 w-full h-8 text-primary/20 fill-primary/10 stroke-primary/50" preserveAspectRatio="none" viewBox="0 0 100 20">
                                        <path d="M0,20 L0,15 L10,12 L20,16 L30,10 L40,14 L50,8 L60,12 L70,5 L80,10 L90,8 L100,12 L100,20 Z" vectorEffect="non-scaling-stroke"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <span className="text-text-sub font-bold text-sm">VS</span>
                                </div>
                                {/* Player B */}
                                <div className="flex-1 bg-bg-deep rounded-2xl p-4 border border-border-subtle hover:border-secondary/50 transition-colors group cursor-pointer relative overflow-hidden">
                                     <div className="flex flex-col items-center gap-2">
                                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-14 border-2 border-secondary group-hover:scale-105 transition-transform" style={{backgroundImage: 'url("https://picsum.photos/id/65/200/200")'}}></div>
                                        <div className="text-center">
                                            <p className="text-white font-bold text-lg leading-tight">J. Jefferson</p>
                                            <p className="text-text-sub text-xs font-medium">Minnesota</p>
                                        </div>
                                        <div className="mt-1">
                                            <span className="text-secondary text-xl font-bold">7.2</span>
                                            <span className="text-text-sub text-[10px] uppercase ml-1">Per-10</span>
                                        </div>
                                    </div>
                                    <svg className="absolute bottom-0 left-0 w-full h-8 text-secondary/20 fill-secondary/10 stroke-secondary/50" preserveAspectRatio="none" viewBox="0 0 100 20">
                                        <path d="M0,20 L0,14 L10,16 L20,10 L30,12 L40,8 L50,14 L60,10 L70,12 L80,6 L90,14 L100,10 L100,20 Z" vectorEffect="non-scaling-stroke"></path>
                                    </svg>
                                </div>
                            </div>
                             <div className="flex flex-wrap gap-2 pt-2">
                                <button className="px-4 py-2 rounded-full bg-bg-elevated text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">2023 Season</button>
                                <button className="px-4 py-2 rounded-full bg-bg-elevated text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">Role: WR1</button>
                                <button className="px-4 py-2 rounded-full bg-bg-elevated text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">Zone</button>
                                <button className="size-8 rounded-full bg-primary flex items-center justify-center text-white ml-auto hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-sm">search</span>
                                </button>
                            </div>
                        </div>

                        {/* Metrics Dist */}
                        <div className="bg-bg-card rounded-3xl p-6 border border-border-subtle flex-1 flex flex-col min-h-[300px]">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-sm font-bold text-text-sub uppercase tracking-wider">Metrics Distribution</h3>
                                <button className="text-text-sub hover:text-white transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
                            </div>
                             <div className="flex-1 flex items-end justify-between gap-3 px-2">
                                 {[{a:52, b:81, h:180}, {a:96, b:25, h:180}, {a:48, b:51, h:180}, {a:80, b:49, h:180}, {a:34, b:67, h:180}].map((col, i) => (
                                    <div key={i} className="flex flex-col items-center gap-3 w-12 group">
                                        <div className="flex flex-col gap-1 w-full items-center justify-end h-[180px]">
                                            <div style={{height: `${col.a}%`}} className="w-full bg-white rounded-2xl min-h-8 flex items-center justify-center text-[10px] font-bold text-black mb-1 group-hover:-translate-y-1 transition-transform">{col.a}</div>
                                            <div style={{height: `${col.b}%`}} className="w-full bg-secondary rounded-2xl min-h-8 flex items-center justify-center text-[10px] font-bold text-black mb-1 group-hover:-translate-y-1 transition-transform">{col.b}</div>
                                        </div>
                                    </div>
                                 ))}
                             </div>
                        </div>
                     </div>

                     {/* Right Column */}
                     <div className="xl:col-span-8 grid grid-rows-[auto_1fr] gap-6 h-full">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                             {/* Skill Profile Radar */}
                            <div className="bg-bg-card rounded-3xl p-6 border border-border-subtle flex flex-col">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-sm font-bold text-text-sub uppercase tracking-wider">Skill Profile</h3>
                                    <button className="text-text-sub hover:text-white transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
                                </div>
                                <div className="relative w-full flex-1 flex items-center justify-center">
                                    <svg className="w-full h-full max-h-[300px] drop-shadow-2xl" viewBox="0 0 400 360">
                                        <g className="stroke-border-subtle stroke-[1] fill-none">
                                            <path d="M200,40 L338,120 L338,280 L200,360 L62,280 L62,120 Z" opacity="0.3"></path>
                                            <path d="M200,80 L292,133 L292,240 L200,293 L108,240 L108,133 Z" opacity="0.3"></path>
                                            <path d="M200,120 L246,146 L246,180 L200,226 L154,180 L154,146 Z" opacity="0.1"></path>
                                            <line x1="200" x2="200" y1="200" y2="40"></line>
                                            <line x1="200" x2="338" y1="200" y2="120"></line>
                                            <line x1="200" x2="338" y1="200" y2="280"></line>
                                            <line x1="200" x2="200" y1="200" y2="360"></line>
                                            <line x1="200" x2="62" y1="200" y2="280"></line>
                                            <line x1="200" x2="62" y1="200" y2="120"></line>
                                        </g>
                                        <path className="fill-secondary/20 stroke-secondary stroke-[3px]" d="M200,100 L310,140 L280,290 L200,310 L100,260 L90,140 Z" strokeLinejoin="round"></path>
                                        <path className="fill-primary/20 stroke-primary stroke-[3px]" d="M200,60 L320,130 L300,270 L200,340 L80,270 L70,110 Z" strokeLinejoin="round"></path>
                                        <circle className="fill-bg-card stroke-primary stroke-2" cx="200" cy="60" r="5"></circle>
                                        <circle className="fill-bg-card stroke-primary stroke-2" cx="320" cy="130" r="5"></circle>
                                        <circle className="fill-bg-card stroke-primary stroke-2" cx="300" cy="270" r="5"></circle>
                                        <circle className="fill-bg-card stroke-primary stroke-2" cx="200" cy="340" r="5"></circle>
                                        <circle className="fill-bg-card stroke-primary stroke-2" cx="80" cy="270" r="5"></circle>
                                        <circle className="fill-bg-card stroke-primary stroke-2" cx="70" cy="110" r="5"></circle>
                                    </svg>
                                    <div className="absolute inset-0 pointer-events-none text-[10px] font-bold text-text-sub font-display uppercase">
                                        <span className="absolute top-[5%] left-1/2 -translate-x-1/2 text-pillar-s">Separation</span>
                                        <span className="absolute top-[30%] right-[5%] text-pillar-eyes">Eyes</span>
                                        <span className="absolute bottom-[20%] right-[5%] text-pillar-improv">Improv</span>
                                        <span className="absolute bottom-[0%] left-1/2 -translate-x-1/2 text-pillar-inno">Innovation</span>
                                        <span className="absolute bottom-[20%] left-[5%] text-pillar-e">Execution</span>
                                        <span className="absolute top-[30%] left-[5%] text-pillar-a">Anticipation</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Perf Timeline */}
                             <div className="bg-bg-card rounded-3xl p-6 border border-border-subtle flex flex-col relative overflow-hidden">
                                <div className="flex justify-between items-center mb-6 z-10">
                                    <h3 className="text-sm font-bold text-text-sub uppercase tracking-wider">Performance Timeline</h3>
                                    <button className="text-text-sub hover:text-white transition-colors"><span className="material-symbols-outlined">more_horiz</span></button>
                                </div>
                                <div className="absolute inset-0 top-20 bottom-12 left-16 right-6 flex justify-between pointer-events-none opacity-20 z-0">
                                    <div className="w-px h-full border-r border-dashed border-text-sub"></div>
                                    <div className="w-px h-full border-r border-dashed border-text-sub"></div>
                                    <div className="w-px h-full border-r border-dashed border-text-sub"></div>
                                    <div className="w-px h-full border-r border-dashed border-text-sub"></div>
                                    <div className="w-px h-full border-r border-dashed border-text-sub"></div>
                                </div>
                                <div className="flex flex-col gap-5 relative z-10 flex-1 justify-center">
                                    {['Wk 14', 'Wk 13', 'Wk 12', 'Wk 11'].map((wk, i) => (
                                        <div key={wk} className="flex items-center">
                                            <span className="text-xs text-text-sub w-12 font-mono">{wk}</span>
                                            <div className="flex-1 h-10 relative ml-4">
                                                <div className={`absolute w-[40%] rounded-full h-full flex items-center px-2 justify-between group cursor-pointer hover:shadow-lg transition-all ${i % 2 === 0 ? 'bg-pillar-eyes text-black left-[5%] shadow-pillar-eyes/20' : 'bg-secondary text-black left-[40%] shadow-secondary/20'}`}>
                                                    <div className="size-6 bg-white rounded-full flex items-center justify-center text-black">
                                                        <span className="material-symbols-outlined text-sm">bolt</span>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-black mr-2">16</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                             </div>
                         </div>

                         {/* Table */}
                         <div className="bg-bg-card rounded-3xl p-6 border border-border-subtle flex flex-col h-full overflow-hidden">
                             <div className="flex justify-between items-center mb-6">
                                <h3 className="text-sm font-bold text-text-sub uppercase tracking-wider">Metric Comparison</h3>
                                <button className="text-xs font-bold text-primary hover:text-white transition-colors bg-bg-elevated px-3 py-1.5 rounded-full border border-border-subtle">Export CSV</button>
                            </div>
                            <div className="overflow-x-auto flex-1">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="text-xs text-text-sub border-b border-border-subtle">
                                            <th className="px-4 py-3 font-semibold uppercase tracking-wider w-[40%]">Category</th>
                                            <th className="px-4 py-3 font-semibold text-center w-[20%] text-primary">Adams</th>
                                            <th className="px-4 py-3 font-semibold text-center w-[20%]">Delta</th>
                                            <th className="px-4 py-3 font-semibold text-center w-[20%] text-secondary">Jefferson</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm font-medium">
                                        {[
                                            {label: 'PER-10 Score', sub: 'Efficiency Rating', a: 8.4, b: 7.2, delta: '+1.2', icon: 'speed'},
                                            {label: 'YAC / Reception', sub: 'Yards After Catch', a: 4.2, b: 5.7, delta: '+1.5', icon: 'sports_score', rev: true},
                                            {label: 'Separation (Press)', sub: 'Avg yards at catch', a: 2.8, b: 2.4, delta: '+0.4', icon: 'timeline'},
                                        ].map((row, i) => (
                                             <tr key={i} className="group hover:bg-bg-elevated transition-colors rounded-lg">
                                                <td className="px-4 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="size-8 rounded-full bg-bg-deep border border-border-subtle flex items-center justify-center text-text-sub group-hover:text-white group-hover:border-primary transition-colors">
                                                            <span className="material-symbols-outlined text-lg">{row.icon}</span>
                                                        </div>
                                                        <div>
                                                            <div className="text-white font-bold text-sm group-hover:text-primary transition-colors">{row.label}</div>
                                                            <div className="text-xs text-text-sub">{row.sub}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-center text-white text-base">{row.a}</td>
                                                <td className="px-4 py-4 text-center">
                                                    <span className={`bg-${row.rev ? 'secondary' : 'pillar-eyes'}/20 text-${row.rev ? 'secondary' : 'pillar-eyes'} text-xs font-bold px-2 py-1 rounded-full`}>{row.delta}</span>
                                                </td>
                                                <td className="px-4 py-4 text-center text-text-sub text-base">{row.b}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                         </div>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default Comparison;