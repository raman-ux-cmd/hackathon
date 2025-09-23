import React from 'react';
import PredictionScore from './PredictionScore';
import ReportSection from './ReportSection';

const ReportPanel = ({ reportData, riskData }) => {
    return (
        <div className="col-span-1 lg:col-span-1 bg-[#161b22] p-6 rounded-2xl shadow-lg border border-[#30363d]">
            <h2 className="text-2xl font-semibold mb-4 text-white">AI Prediction & Report</h2>
            
            <PredictionScore riskLevel={riskData.riskLevel} probability={riskData.probability} />

            <div className="space-y-4">
                <ReportSection title="Key Factors" content={reportData.keyFactors} />
                <ReportSection title="Historical Trends" content={reportData.historicalTrends} />
                <ReportSection title="Recommended Actions" content={reportData.recommendedActions} />
            </div>
        </div>
    );
};

export default ReportPanel;