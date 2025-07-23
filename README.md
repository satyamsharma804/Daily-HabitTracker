# Daily Habit Tracker

A full-stack web application to help you track your daily habits, visualize your progress, and stay motivated.

## Features
- User registration and login (JWT authentication)
- Add, view, and delete daily habits
- Mark habits as done for each day
- View habit logs and streaks
- Simple, clean React frontend
- Node.js/Express backend with MongoDB

## Tech Stack
- **Frontend:** React, Axios, React Router
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB instance (local or cloud)

### Backend Setup
1. Navigate to the `backend` folder:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```
   The backend will run on `http://localhost:5000` by default.

### Frontend Setup
1. Open a new terminal and navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend app:
   ```sh
   npm start
   ```
   The frontend will run on `http://localhost:3000` by default.

## Usage
- Register a new account or log in.
- Add your daily habits (e.g., "Drink Water", "Exercise").
- Mark habits as done each day.
- View your progress and streaks on the dashboard.

## Folder Structure
```
backend/    # Express API, MongoDB models, routes
frontend/   # React app, components, pages
```

## License
This project is open source and available under the [MIT License](LICENSE). 