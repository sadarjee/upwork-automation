function startAnalytics() {
  setInterval(() => {
    console.log('Updating conversion analytics...');
    // TODO: fetch updates from Upwork
  }, 300000);
}

module.exports = { startAnalytics };
