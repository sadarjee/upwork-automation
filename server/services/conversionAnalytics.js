const Job = require('../models/Job');

async function updateAnalytics() {
  const totalProposals = await Job.countDocuments({ status: 'bid_sent' });
  console.log('Total proposals sent', totalProposals);
}

function startAnalytics() {
  setInterval(() => {
    updateAnalytics().catch((err) => console.error(err));
  }, 300000);
}

module.exports = { startAnalytics };
