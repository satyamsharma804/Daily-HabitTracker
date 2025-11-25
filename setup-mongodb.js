// MongoDB Setup Helper Script
// Run this with: node setup-mongodb.js

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 MongoDB Atlas Setup Helper');
console.log('==============================');
console.log('');
console.log('1. Go to: https://www.mongodb.com/atlas');
console.log('2. Create a free account');
console.log('3. Create a new cluster (M0 Sandbox - Free)');
console.log('4. Set up database user with username and password');
console.log('5. Add IP address (0.0.0.0/0 for anywhere)');
console.log('6. Get your connection string');
console.log('');

rl.question('Enter your MongoDB Atlas connection string: ', (connectionString) => {
  if (!connectionString) {
    console.log('❌ No connection string provided. Using local fallback.');
    connectionString = 'mongodb://localhost:27017/habits';
  }

  const envContent = `MONGO_URI=${connectionString}
PORT=5000
JWT_SECRET=your_jwt_secret_key_here_${Date.now()}`;

  fs.writeFileSync(path.join(__dirname, '.env'), envContent);
  
  console.log('✅ .env file created successfully!');
  console.log('📝 Your MongoDB connection string has been saved.');
  console.log('');
  console.log('🔄 Now restart your server with: npm run dev');
  
  rl.close();
});
