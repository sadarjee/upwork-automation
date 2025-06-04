import React, { useEffect, useState } from 'react';
import api from '../services/api';

function BidStatus() {
  const [bids, setBids] = useState([]);

  useEffect(() => {
    api.get('/bids').then(res => setBids(res.data));
  }, []);

  return (
    <div>
      <h2>Bids</h2>
      <ul>
        {bids.map(b => (
          <li key={b._id}>{b.title} - {b.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default BidStatus;
