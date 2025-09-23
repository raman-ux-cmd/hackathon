import React from 'react';

const DashboardHeader = ({ lastUpdated }) => {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">Geospatial AI Disaster Dashboard</h1>
            <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">Last updated: {lastUpdated}</span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                </span>
            </div>
        </header>
    );
};

export default DashboardHeader;