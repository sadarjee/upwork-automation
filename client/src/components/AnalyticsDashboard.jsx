import React, { useEffect, useState } from 'react';
import api from '../services/api';

function AnalyticsDashboard() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    api.get('/analytics/summary').then(res => setSummary(res.data));
  }, []);

  if (!summary) return null;

  return (
    <div>
      <h2>Analytics</h2>
      <p>Total proposals: {summary.totalProposals}</p>
      <p>Interviews: {summary.interviewed}</p>
      <p>Hires: {summary.hired}</p>
    </div>
  );
}

export default AnalyticsDashboard;
