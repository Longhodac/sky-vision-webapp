import React from 'react';
import { View } from '../types';

interface SidebarProps {
    currentView: View;
    onNavigate: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
    const navItems = [
        { view: View.DASHBOARD, icon: 'dashboard', label: 'Dashboard' },
        { view: View.PLAYER_PROFILE, icon: 'sports_football', label: 'Players' },
        { view: View.COMPARISON, icon: 'compare_arrows', label: 'Comparison' },
        { view: View.SCORING, icon: 'videocam', label: 'Film Room' },
        { view: View.SUMMARY, icon: 'analytics', label: 'Reports' },
    ];

    return (
        <aside className="hidden lg:flex flex-col w-20 xl:w-24 h-full border-r border-border-subtle bg-bg-deep shrink-0 items-center py-8 z-30">
            <div className="mb-10 cursor-pointer" onClick={() => onNavigate(View.DASHBOARD)}>
                <div className="size-12 bg-white text-black rounded-2xl flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <span className="material-symbols-outlined text-[28px]">visibility</span>
                </div>
            </div>

            <nav className="flex flex-col gap-6 w-full items-center flex-1">
                {navItems.map((item) => (
                    <button
                        key={item.view}
                        onClick={() => onNavigate(item.view)}
                        className={`relative size-12 flex items-center justify-center rounded-2xl transition-all group ${
                            currentView === item.view 
                            ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                            : 'bg-bg-elevated text-text-sub hover:bg-primary hover:text-white'
                        }`}
                        title={item.label}
                    >
                        <span className="material-symbols-outlined group-hover:scale-110 transition-transform text-[24px]">{item.icon}</span>
                    </button>
                ))}
            </nav>

            <div className="mt-auto flex flex-col gap-6 items-center w-full pb-4">
                <button className="relative size-12 flex items-center justify-center rounded-2xl bg-bg-elevated text-text-sub hover:bg-primary hover:text-white transition-all group">
                    <span className="material-symbols-outlined group-hover:scale-110 transition-transform">settings</span>
                </button>
                <div className="size-10 rounded-full border border-border-subtle p-0.5">
                    <div 
                        className="bg-center bg-no-repeat bg-cover rounded-full w-full h-full" 
                        style={{ backgroundImage: 'url("https://picsum.photos/100/100?random=1")' }}
                    ></div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;