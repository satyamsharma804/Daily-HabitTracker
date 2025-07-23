import React, { useContext } from 'react';
import { AuthContext } from '../App';
import HabitList from '../components/HabitList';
import HabitForm from '../components/HabitForm';

function DashboardPage() {
  const { setToken } = useContext(AuthContext);
  const handleLogout = () => {
    setToken(null);
  };
  return (
    <div className="dashboard-container">
      <header>
        <h2>Habit Tracker Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
      </header>
      <HabitForm />
      <HabitList />
    </div>
  );
}

export default DashboardPage; 