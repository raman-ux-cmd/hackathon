import React from 'react';

const ReportSection = ({ title, content }) => {
    return (
        <div className="bg-[#24292f] p-4 rounded-xl border border-[#30363d]">
            <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
            {Array.isArray(content) ? (
                <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-sm text-gray-400">{content}</p>
            )}
        </div>
    );
};

export default ReportSection;