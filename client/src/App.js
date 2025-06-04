import React from 'react';
import JobFeed from './components/JobFeed';
import BidStatus from './components/BidStatus';
import AnalyticsDashboard from './components/AnalyticsDashboard';
import ProfileOptimizer from './components/ProfileOptimizer';

function App() {
  return (
    <div>
      <h1>Upwork Dashboard</h1>
      <JobFeed />
      <BidStatus />
      <AnalyticsDashboard />
      <ProfileOptimizer />
    </div>
  );
}

export default App;
