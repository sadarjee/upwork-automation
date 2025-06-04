const axios = require('axios');
const Job = require('../models/Job');
const { bidOnJob } = require('./aiBidder');

async function fetchJobs() {
  // Placeholder for Upwork API call
  console.log('Fetching jobs from Upwork...');
  return [];
}

async function checkForJobs(io) {
  const jobs = await fetchJobs();
  for (const job of jobs) {
    const existing = await Job.findOne({ jobId: job.jobId });
    if (!existing) {
      const newJob = await Job.create(job);
      io.emit('newJob', newJob);
      bidOnJob(newJob).catch((err) => console.error(err));
    }
  }
}

function startJobFeedMonitor(io) {
  setInterval(() => {
    checkForJobs(io).catch((err) => console.error(err));
  }, 60000);
}

module.exports = { startJobFeedMonitor };
