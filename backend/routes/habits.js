const express = require('express');
const Habit = require('../models/Habit');
const Log = require('../models/Log');
const auth = require('../middleware/auth');
const router = express.Router();

// Get all habits for user
router.get('/', auth, async (req, res) => {
  const habits = await Habit.find({ user: req.user._id });
  res.json(habits);
});

// Add habit
router.post('/', auth, async (req, res) => {
  const { name, time } = req.body;
  const habit = new Habit({ user: req.user._id, name, time });
  await habit.save();
  res.json(habit);
});

// Delete habit
router.delete('/:id', auth, async (req, res) => {
  await Habit.deleteOne({ _id: req.params.id, user: req.user._id });
  await Log.deleteMany({ habit: req.params.id, user: req.user._id });
  res.json({ message: 'Deleted' });
});

// Mark habit as done for a date
router.post('/:id/log', auth, async (req, res) => {
  const { date } = req.body; // YYYY-MM-DD
  let log = await Log.findOne({ user: req.user._id, habit: req.params.id, date });
  if (!log) {
    log = new Log({ user: req.user._id, habit: req.params.id, date });
    await log.save();
  }
  res.json(log);
});

// Get logs for a habit (for a week)
router.get('/:id/logs', auth, async (req, res) => {
  const { start, end } = req.query; // YYYY-MM-DD
  const logs = await Log.find({
    user: req.user._id,
    habit: req.params.id,
    date: { $gte: start, $lte: end }
  });
  res.json(logs);
});

// Get streak for a habit
router.get('/:id/streak', auth, async (req, res) => {
  const logs = await Log.find({ user: req.user._id, habit: req.params.id }).sort({ date: 1 });
  let streak = 0, maxStreak = 0, prevDate = null;
  logs.forEach(log => {
    if (!prevDate) {
      streak = 1;
    } else {
      const diff = (new Date(log.date) - new Date(prevDate)) / (1000 * 60 * 60 * 24);
      streak = diff === 1 ? streak + 1 : 1;
    }
    maxStreak = Math.max(maxStreak, streak);
    prevDate = log.date;
  });
  res.json({ streak, maxStreak });
});

module.exports = router; 