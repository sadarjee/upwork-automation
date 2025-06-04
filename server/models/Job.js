const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobId: { type: String, unique: true },
  title: String,
  clientName: String,
  clientRating: Number,
  budget: Number,
  jobType: String,
  status: { type: String, default: 'new' },
  postedAt: Date,
  description: String,
  proposalText: String,
  bidSentAt: Date,
  interviewedAt: Date,
  hiredAt: Date,
  contractValue: Number
});

module.exports = mongoose.model('Job', jobSchema);
