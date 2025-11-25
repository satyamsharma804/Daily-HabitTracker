# 📊 Daily Habit Tracker

A full-stack web application for tracking daily habits, building streaks, and maintaining consistency in your personal development journey.

## 🎯 Project Overview

The Daily Habit Tracker is a comprehensive habit management system that helps users:
- Create and manage personal habits
- Track daily progress and consistency
- Visualize streaks and achievements
- Monitor long-term habit development
- Access analytics and insights

## 🏗️ Architecture

### Frontend (React + Vite)
- **Framework**: React 18 with Vite
- **Routing**: React Router DOM
- **Charts**: Recharts for data visualization
- **Styling**: CSS with dark/light mode support

### Backend (Node.js + Express)
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based authentication
- **Security**: bcryptjs for password hashing

## 🚀 Features

### Core Features
- ✅ **User Authentication** - Secure registration and login
- ✅ **Habit Management** - Create, edit, and delete habits
- ✅ **Daily Logging** - Track daily habit completion
- ✅ **Streak Tracking** - Monitor consecutive days
- ✅ **Calendar View** - Visual habit calendar
- ✅ **Analytics Dashboard** - Progress insights and charts
- ✅ **Admin Panel** - User management (admin only)

### UI/UX Features
- 🌙 **Dark/Light Mode** - Toggle between themes
- 📱 **Responsive Design** - Works on all devices
- 🎨 **Modern UI** - Clean and intuitive interface
- ⚡ **Fast Performance** - Optimized loading and interactions

## 📁 Project Structure

```
dail habbit traker har/
├── summerinternship/
│   └── summerinternship/
│       ├── client/                 # Frontend React App
│       │   ├── src/
│       │   │   ├── pages/          # React components
│       │   │   ├── App.jsx         # Main app component
│       │   │   ├── api.js          # API client
│       │   │   └── main.jsx        # Entry point
│       │   ├── package.json
│       │   └── vite.config.js
│       │
│       └── server/                  # Backend Node.js API
│           ├── src/
│           │   ├── config/         # Database configuration
│           │   ├── models/         # MongoDB models
│           │   ├── routes/         # API routes
│           │   └── middleware/     # Authentication middleware
│           ├── index.js            # Server entry point
│           └── package.json
```

## 🛠️ Prerequisites

Before running this project, ensure you have:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (optional) - [Download here](https://www.mongodb.com/try/download/community)
- **Git** (for cloning) - [Download here](https://git-scm.com/)

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd "dail habbit traker har"
```

### 2. Backend Setup

Navigate to the server directory:
```bash
cd summerinternship/summerinternship/server
```

Install dependencies:
```bash
npm install
```

Create environment file (optional):
```bash
# Create .env file with:
PORT=5000
MONGO_URI=mongodb://localhost:27017/habits
JWT_SECRET=your_jwt_secret_key_here
```

Start the backend server:
```bash
npm start
# or for development with auto-restart:
npm run dev
```

### 3. Frontend Setup

Open a new terminal and navigate to the client directory:
```bash
cd summerinternship/summerinternship/client
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

## 🌐 Access the Application

Once both servers are running:

- **Frontend Application**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 📱 How to Use

### 1. First Time Setup
1. Open http://localhost:5173 in your browser
2. Click "Register" to create a new account
3. Fill in your email and password
4. Login with your credentials

### 2. Creating Habits
1. Navigate to "My Habits" section
2. Click "Add New Habit"
3. Enter habit name, description, and frequency
4. Set your target count (e.g., 8 glasses of water)

### 3. Daily Tracking
1. Go to "Dashboard" to see your habits
2. Click on a habit to log your progress
3. Enter the count completed for the day
4. Mark as completed when you reach your target

### 4. Viewing Progress
- **Calendar**: See your habit completion history
- **Streaks**: Track consecutive days of completion
- **Analytics**: View charts and progress insights

## 🔧 Development

### Available Scripts

#### Backend (Server)
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
```

#### Frontend (Client)
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

### API Endpoints

#### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

#### Habits
- `GET /api/habits` - Get user habits
- `POST /api/habits` - Create new habit
- `PUT /api/habits/:id` - Update habit
- `DELETE /api/habits/:id` - Delete habit

#### Daily Logs
- `GET /api/logs` - Get daily logs
- `POST /api/logs` - Create daily log
- `PUT /api/logs/:id` - Update daily log

## 🐛 Troubleshooting

### Common Issues

#### 1. "Connection Refused" Error
- Ensure both servers are running
- Check if ports 5000 and 5173 are available
- Restart both servers

#### 2. Database Connection Issues
- The app works without MongoDB (uses fallback)
- For full functionality, install MongoDB locally
- Or set up MongoDB Atlas for cloud database

#### 3. CORS Errors
- Backend is configured to allow all origins
- Check if backend server is running on port 5000

#### 4. Authentication Issues
- Clear browser localStorage
- Check if JWT_SECRET is set in backend
- Ensure backend API is responding

### Port Conflicts
If ports are in use:
```bash
# Find processes using ports
netstat -an | findstr ":5000"
netstat -an | findstr ":5173"

# Kill processes if needed
taskkill /f /im node.exe
```

## 🚀 Deployment

### Production Build

#### Frontend
```bash
cd summerinternship/summerinternship/client
npm run build
```

#### Backend
```bash
cd summerinternship/summerinternship/server
npm start
```

### Environment Variables
For production deployment, set:
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Strong secret key for JWT
- `PORT` - Server port (default: 5000)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:
1. Check the troubleshooting section above
2. Ensure all dependencies are installed
3. Verify both servers are running
4. Check browser console for errors

## 🎉 Success!

Once everything is set up, you should see:
- ✅ Backend server running on port 5000
- ✅ Frontend server running on port 5173
- ✅ Application accessible at http://localhost:5173
- ✅ Full habit tracking functionality

Happy habit building! 🚀

