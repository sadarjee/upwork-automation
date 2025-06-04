require('dotenv').config();

module.exports = {
  clientId: process.env.UPWORK_CLIENT_ID,
  clientSecret: process.env.UPWORK_CLIENT_SECRET,
  accessToken: process.env.UPWORK_ACCESS_TOKEN,
  refreshToken: process.env.UPWORK_REFRESH_TOKEN,
};
