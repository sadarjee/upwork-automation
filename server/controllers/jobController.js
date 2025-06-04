const Job = require('../models/Job');

exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ postedAt: -1 }).limit(100);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
};
