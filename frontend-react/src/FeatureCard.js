import React from 'react';

const FeatureCard = ({ title, value }) => {
    return (
        <div className="bg-[#24292f] p-4 rounded-xl border border-[#30363d] shadow-md">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{value}</p>
        </div>
    );
};

export default FeatureCard;