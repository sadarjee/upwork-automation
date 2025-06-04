function startJobFeedMonitor() {
  setInterval(() => {
    console.log('Checking for new jobs...');
    // TODO: call Upwork API and emit events
  }, 60000);
}

module.exports = { startJobFeedMonitor };
