const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/notesapp';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to the MongoDB database');
});

module.exports = db;
