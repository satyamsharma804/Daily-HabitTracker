import React, { useState, useContext } from 'react';
import { AuthContext } from '../App';
import api from '../api';

function HabitForm() {
  const { token } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [time, setTime] = useState('morning');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/habits', { name, time }, token);
    setName('');
    setTime('morning');
    window.location.reload(); // Simple way to refresh list
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Habit name" value={name} onChange={e => setName(e.target.value)} required />
      <select value={time} onChange={e => setTime(e.target.value)}>
        <option value="morning">Morning</option>
        <option value="night">Night</option>
      </select>
      <button type="submit">Add Habit</button>
    </form>
  );
}

export default HabitForm; 