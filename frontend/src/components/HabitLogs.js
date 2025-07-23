import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../App';
import api from '../api';

function HabitLogs({ habit }) {
  const { token } = useContext(AuthContext);
  const [logs, setLogs] = useState([]);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchLogs = async () => {
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - 6);
    const startStr = start.toISOString().slice(0, 10);
    const endStr = today.toISOString().slice(0, 10);
    const res = await api.get(`/habits/${habit._id}/logs?start=${startStr}&end=${endStr}`, token);
    setLogs(res.data);
    const streakRes = await api.get(`/habits/${habit._id}/streak`, token);
    setStreak(streakRes.data.streak);
    setMaxStreak(streakRes.data.maxStreak);
    setLoading(false);
  };

  useEffect(() => {
    fetchLogs();
    // eslint-disable-next-line
  }, [habit]);

  const markDone = async () => {
    const today = new Date().toISOString().slice(0, 10);
    await api.post(`/habits/${habit._id}/log`, { date: today }, token);
    fetchLogs();
  };

  if (loading) return <div>Loading logs...</div>;

  return (
    <div className="habit-logs">
      <h4>Logs (last 7 days)</h4>
      <ul>
        {logs.map(log => (
          <li key={log._id}>{log.date}</li>
        ))}
      </ul>
      <button onClick={markDone}>Mark as Done Today</button>
      <div>Current Streak: {streak}</div>
      <div>Max Streak: {maxStreak}</div>
    </div>
  );
}

export default HabitLogs; 