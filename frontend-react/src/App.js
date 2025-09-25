import React from 'react';

// The main App component that renders the entire dashboard.
function App() {
  // Sample data for the dashboard components.
  const featureData = [
    { id: 1, title: 'Population Density', value: '1,250/km²' },
    { id: 2, title: 'Average Income', value: '$45,000' },
    { id: 3, title: 'Crime Rate', value: '2.3%' },
    { id: 4, title: 'Education Level', value: '78% Graduate' },
    { id: 5, title: 'Age Demographics', value: 'Median: 34' },
    { id: 6, title: 'Employment Rate', value: '92.5%' },
    { id: 7, title: 'Housing Cost', value: '$1,800/month' },
    { id: 8, title: 'Public Safety', value: 'Good' }
  ];

  const reportData = {
    keyFactors: [
      'High population density in urban areas',
      'Economic stability indicators trending positive',
      'Education levels above national average',
      'Infrastructure development ongoing'
    ],
    historicalTrends: [
      '5-year crime rate decline of 12%',
      'Population growth steady at 2.1% annually',
      'Economic indicators improved over last 3 years',
      'Public service satisfaction increased 15%'
    ],
    recommendedActions: [
      'Continue monitoring high-density areas',
      'Implement community outreach programs',
      'Increase patrol frequency in identified zones',
      'Review and update emergency response protocols'
    ]
  };

  const riskData = {
    riskLevel: 'LOW',
    probability: '15.3%'
  };

  return (
    <>
      <style>
        {`
        /* Consolidated CSS from index.css and App.css */
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #010409;
        }

        code {
          font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        h1, h2, h3, h4, h5, h6 {
          margin: 0;
          font-weight: 600;
        }

        p, ul, ol {
          margin: 0;
        }

        ul, ol {
          padding: 0;
        }

        button {
          cursor: pointer;
          border: none;
          background: none;
          font-family: inherit;
        }
        
        .app-container {
          min-height: 100vh;
          background-color: #010409;
          color: white;
          padding: 24px;
        }

        .main-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .app-header {
          margin-bottom: 32px;
          text-align: center;
        }

        .app-header h1 {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
          margin: 0 0 8px 0;
        }

        .app-header p {
          color: #9ca3af;
          margin: 0;
          font-size: 1.1rem;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        @media (min-width: 1024px) {
          .dashboard-grid {
            grid-template-columns: 2fr 1fr;
          }
        }

        /* Risk Map Panel Styles */
        .risk-map-panel {
          background-color: #161b22;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border: 1px solid #30363d;
        }

        .risk-map-panel h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 16px 0;
          color: white;
        }

        .risk-map-panel .subtitle {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-bottom: 24px;
        }

        .map-container {
          width: 100%;
          height: 384px;
          background-color: #010409;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #6b7280;
          position: relative;
        }

        .map-placeholder-icon {
          width: 64px;
          height: 64px;
          opacity: 0.3;
          fill: currentColor;
        }

        .map-placeholder-text {
          position: absolute;
          font-size: 0.875rem;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        @media (min-width: 768px) {
          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .feature-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Feature Card Styles */
        .feature-card {
          background-color: #24292f;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #30363d;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .feature-card h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          margin: 0 0 8px 0;
        }

        .feature-card p {
          font-size: 0.875rem;
          color: #9ca3af;
          margin: 0;
        }

        /* Report Panel Styles */
        .report-panel {
          background-color: #161b22;
          padding: 24px;
          border-radius: 16px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          border: 1px solid #30363d;
        }

        .report-panel h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0 0 16px 0;
          color: white;
        }

        .report-sections {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        /* Prediction Score Styles */
        .prediction-score {
          background-color: #24292f;
          padding: 24px;
          border-radius: 12px;
          border: 1px solid #30363d;
          text-align: center;
          margin-bottom: 24px;
        }

        .prediction-score .label {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-bottom: 8px;
        }

        .prediction-score-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .risk-level {
          font-size: 3.75rem;
          font-weight: 800;
        }

        .risk-level.high {
          color: #ef4444;
        }

        .risk-level.low {
          color: #10b981;
        }

        .risk-icon {
          width: 32px;
          height: 32px;
          color: #ef4444;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }

        .probability {
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 8px;
        }

        /* Report Section Styles */
        .report-section {
          background-color: #24292f;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid #30363d;
        }

        .report-section h3 {
          font-size: 1.125rem;
          font-weight: 600;
          color: white;
          margin: 0 0 8px 0;
        }

        .report-section ul {
          font-size: 0.875rem;
          color: #9ca3af;
          list-style-type: disc;
          list-style-position: inside;
          margin: 0;
          padding: 0;
        }

        .report-section li {
          margin-bottom: 4px;
        }

        .report-section p {
          font-size: 0.875rem;
          color: #9ca3af;
          margin: 0;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .app-container {
            padding: 16px;
          }
          
          .app-header h1 {
            font-size: 2rem;
          }
          
          .map-container {
            height: 256px;
          }
          
          .risk-level {
            font-size: 2.5rem;
          }
        }
        `}
      </style>
      <div className="app-container">
        <div className="main-content">
          <header className="app-header">
            <h1>Risk Assessment Dashboard</h1>
            <p>AI-powered predictive analytics and risk management</p>
          </header>

          <div className="dashboard-grid">
            <RiskMapPanel featureData={featureData} />
            <ReportPanel reportData={reportData} riskData={riskData} />
          </div>
        </div>
      </div>
    </>
  );
}

// PredictionScore Component
const PredictionScore = ({ riskLevel, probability }) => (
  <div className="prediction-score">
    <div className="prediction-score-content">
      <span className={`risk-level ${riskLevel.toLowerCase()}`}>
        {riskLevel}
      </span>
      <div className="flex flex-col">
        <p className="probability">{probability}</p>
        <span className="text-gray-400 text-sm">Overall Risk</span>
      </div>
    </div>
  </div>
);

// FeatureCard Component
const FeatureCard = ({ title, value }) => (
  <div className="feature-card">
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

// RiskMapPanel Component
const RiskMapPanel = ({ featureData }) => (
  <div className="risk-map-panel">
    <h2>Risk Map & Data Visualization</h2>
    <p className="subtitle">Select a region and view real-time data and historical analysis.</p>

    <div className="map-container">
      <svg className="map-placeholder-icon" viewBox="0 0 20 20">
        <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.3 4.7l1.4 1.4A6.002 6.002 0 0110 4a6 6 0 013.3.9l1.4-1.4A8 8 0 102 10h2c0-2.8 1.1-5.3 2.9-7.1l-1.4-1.4zM10 16a6 6 0 01-3.3-.9l-1.4 1.4A8.002 8.002 0 0010 18h2c2.8 0 5.3-1.1 7.1-2.9l-1.4-1.4A6.002 6.002 0 0110 16z"/>
      </svg>
      <span className="map-placeholder-text">Geospatial Map Placeholder</span>
    </div>

    <div className="feature-grid">
      {featureData.map(feature => (
        <FeatureCard key={feature.id} title={feature.title} value={feature.value} />
      ))}
    </div>
  </div>
);

// ReportSection Component
const ReportSection = ({ title, content }) => {
    return (
        <div className="report-section">
            <h3>{title}</h3>
            {Array.isArray(content) ? (
                <ul>
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>{content}</p>
            )}
        </div>
    );
};

// ReportPanel Component
const ReportPanel = ({ reportData, riskData }) => {
    return (
        <div className="report-panel">
            <h2>AI Prediction & Report</h2>
            
            <PredictionScore riskLevel={riskData.riskLevel} probability={riskData.probability} />

            <div className="report-sections">
                <ReportSection title="Key Factors" content={reportData.keyFactors} />
                <ReportSection title="Historical Trends" content={reportData.historicalTrends} />
                <ReportSection title="Recommended Actions" content={reportData.recommendedActions} />
            </div>
        </div>
    );
};

export default App;
