// Mock data for demonstration when MongoDB is not available
const mockUsers = [
  {
    _id: 'mock-user-1',
    email: 'demo@example.com',
    password: '$2a$10$mock.hash.for.demo',
    role: 'user',
    createdAt: new Date()
  }
];

const mockHabits = [
  {
    _id: 'mock-habit-1',
    userId: 'mock-user-1',
    name: 'Drink Water',
    description: 'Drink 8 glasses of water daily',
    frequency: 'daily',
    targetCount: 8,
    createdAt: new Date()
  },
  {
    _id: 'mock-habit-2',
    userId: 'mock-user-1',
    name: 'Exercise',
    description: '30 minutes of exercise',
    frequency: 'daily',
    targetCount: 1,
    createdAt: new Date()
  }
];

const mockLogs = [
  {
    _id: 'mock-log-1',
    userId: 'mock-user-1',
    habitId: 'mock-habit-1',
    date: new Date().toISOString().split('T')[0],
    count: 6,
    completed: false,
    createdAt: new Date()
  }
];

module.exports = { mockUsers, mockHabits, mockLogs };

