import React from 'react';
import FeatureCard from './FeatureCard';

const RiskMapPanel = ({ featureData }) => {
    return (
        <div className="col-span-1 lg:col-span-2 bg-[#161b22] p-6 rounded-2xl shadow-lg border border-[#30363d]">
            <h2 className="text-2xl font-semibold mb-4 text-white">Risk Map & Data Visualization</h2>
            <p className="text-sm text-gray-400 mb-6">Select a region and view real-time data and historical analysis.</p>

            <div id="map-container" className="w-full h-96 bg-[#010409] rounded-xl overflow-hidden mb-6 flex items-center justify-center text-center text-gray-500">
                <svg className="w-16 h-16 opacity-30" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.3 4.7l1.4 1.4A6.002 6.002 0 0110 4a6 6 0 013.3.9l1.4-1.4A8 8 0 102 10h2c0-2.8 1.1-5.3 2.9-7.1l-1.4-1.4zM10 16a6 6 0 01-3.3-.9l-1.4 1.4A8.002 8.002 0 0010 18h2c2.8 0 5.3-1.1 7.1-2.9l-1.4-1.4A6.002 6.002 0 0110 16z"/>
                </svg>
                <span className="absolute text-sm">Geospatial Map Placeholder</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {featureData.map(feature => (
                    <FeatureCard key={feature.id} title={feature.title} value={feature.value} />
                ))}
            </div>
        </div>
    );
};

export default RiskMapPanel;