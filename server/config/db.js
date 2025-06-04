const mongoose = require('mongoose');

function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI not set');
    process.exit(1);
  }
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
  });

  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
}

module.exports = connectDB;
