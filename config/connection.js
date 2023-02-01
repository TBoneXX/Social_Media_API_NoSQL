const { connect, connection } = require('mongoose');

const connectionMongoDB =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialMediaAPINoSQL';

connect(connectionMongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;