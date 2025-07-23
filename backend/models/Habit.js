const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  time: { type: String, enum: ['morning', 'night'], required: true }
});

module.exports = mongoose.model('Habit', HabitSchema); 