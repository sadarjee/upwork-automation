const Job = require('../models/Job');

exports.getBids = async (req, res) => {
  try {
    const bids = await Job.find({ status: 'bid_sent' }).sort({ bidSentAt: -1 });
    res.json(bids);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch bids' });
  }
};
