import React, { useEffect, useState } from 'react';
import api from '../services/api';

function ProfileOptimizer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/profile/recommendations').then(res => setData(res.data));
  }, []);

  if (!data) return null;

  return (
    <div>
      <h2>Profile Recommendations</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default ProfileOptimizer;
