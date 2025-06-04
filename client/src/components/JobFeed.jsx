import React, { useEffect, useState } from 'react';
import api from '../services/api';
import socket from '../services/socket';

function JobFeed() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get('/jobs').then(res => setJobs(res.data));
    socket.on('newJob', job => {
      setJobs(prev => [job, ...prev]);
    });
  }, []);

  return (
    <div>
      <h2>Job Feed</h2>
      <ul>
        {jobs.map(j => (
          <li key={j._id}>{j.title} - {j.budget}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobFeed;
