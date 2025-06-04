const axios = require('axios');
const { extractPainPoint } = require('../utils/nlpUtils');
const Job = require('../models/Job');

async function bidOnJob(job) {
  console.log('Generating proposal for', job.title);
  const painPoint = extractPainPoint(job.description);
  // Placeholder for OpenAI API call
  const proposal = `Hello, I noticed ${painPoint}. ...`;
  // Placeholder for Upwork proposal submission
  console.log('Submitting proposal for job', job.jobId);
  await Job.updateOne({ jobId: job.jobId }, {
    status: 'bid_sent',
    proposalText: proposal,
    bidSentAt: new Date()
  });
  return proposal;
}

module.exports = { bidOnJob };
