const Job = require('../models/Job');

exports.getSummary = async (req, res) => {
  try {
    const totalProposals = await Job.countDocuments({ status: 'bid_sent' });
    const interviewed = await Job.countDocuments({ status: 'interviewed' });
    const hired = await Job.countDocuments({ status: 'hired' });
    res.json({ totalProposals, interviewed, hired });
  } catch (err) {
    res.status(500).json({ error: 'Failed to compute analytics' });
  }
};
