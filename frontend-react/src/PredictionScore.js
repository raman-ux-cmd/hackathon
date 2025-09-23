import React from 'react';

const PredictionScore = ({ riskLevel, probability }) => {
    const isHighRisk = riskLevel.toUpperCase() === 'HIGH';

    return (
        <div className="bg-[#24292f] p-6 rounded-xl border border-[#30363d] text-center mb-6">
            <p className="text-sm text-gray-400 mb-2">Predicted Risk Level</p>
            <div className="flex items-center justify-center">
                <span className={`text-6xl font-extrabold ${isHighRisk ? 'text-red-500' : 'text-green-500'}`}>{riskLevel}</span>
                {isHighRisk && (
                    <svg className="w-8 h-8 ml-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                )}
            </div>
            <p className="text-sm text-gray-500 mt-2">Probability: {probability}</p>
        </div>
    );
};

export default PredictionScore;