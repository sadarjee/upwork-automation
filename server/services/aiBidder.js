const { extractPainPoint } = require('../utils/nlpUtils');

async function bidOnJob(job) {
  console.log('Generating proposal for', job.title);
  const painPoint = extractPainPoint(job.description);
  // TODO: call OpenAI API and Upwork submit
  console.log('Pain point:', painPoint);
}

module.exports = { bidOnJob };
