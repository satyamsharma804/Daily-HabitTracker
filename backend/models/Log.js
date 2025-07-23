const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  habit: { type: mongoose.Schema.Types.ObjectId, ref: 'Habit', required: true },
  date: { type: String, required: true } // YYYY-MM-DD
});

module.exports = mongoose.model('Log', LogSchema); 