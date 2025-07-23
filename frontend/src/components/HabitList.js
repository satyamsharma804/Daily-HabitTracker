import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../App';
import api from '../api';
import HabitLogs from './HabitLogs';

function HabitList() {
  const { token } = useContext(AuthContext);
  const [habits, setHabits] = useState([]);
  const [selectedHabit, setSelectedHabit] = useState(null);

  const fetchHabits = async () => {
    const res = await api.get('/habits', token);
    setHabits(res.data);
  };

  useEffect(() => {
    fetchHabits();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (id) => {
    await api.delete(`/habits/${id}`, token);
    fetchHabits();
  };

  return (
    <div className="habit-list">
      <h3>Your Habits</h3>
      <ul>
        {habits.map(habit => (
          <li key={habit._id}>
            <span onClick={() => setSelectedHabit(habit)} style={{ cursor: 'pointer' }}>{habit.name} ({habit.time})</span>
            <button onClick={() => handleDelete(habit._id)}>Delete</button>
            {selectedHabit && selectedHabit._id === habit._id && <HabitLogs habit={habit} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitList; 