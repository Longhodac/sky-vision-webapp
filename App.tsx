import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import PlayerProfile from './views/PlayerProfile';
import ScoringConsole from './views/ScoringConsole';
import Comparison from './views/Comparison';
import SessionSummary from './views/SessionSummary';
import { View } from './types';

function App() {
    const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);

    const renderView = () => {
        switch (currentView) {
            case View.DASHBOARD:
                return <Dashboard onNavigate={setCurrentView} />;
            case View.PLAYER_PROFILE:
                return <PlayerProfile onNavigate={setCurrentView} />;
            case View.SCORING:
                return <ScoringConsole onNavigate={setCurrentView} />;
            case View.COMPARISON:
                return <Comparison onNavigate={setCurrentView} />;
            case View.SUMMARY:
                return <SessionSummary onNavigate={setCurrentView} />;
            default:
                return <Dashboard onNavigate={setCurrentView} />;
        }
    };

    return (
        <div className="flex h-screen w-full overflow-hidden bg-bg-deep font-display text-text-main">
            {currentView !== View.SCORING && <Sidebar currentView={currentView} onNavigate={setCurrentView} />}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                {renderView()}
            </main>
        </div>
    );
}

export default App;