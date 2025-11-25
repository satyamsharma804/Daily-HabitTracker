const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./src/config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDb();

app.get('/', (req, res) => res.json({ ok: true, service: 'habit-tracker-api' }));

app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/habits', require('./src/routes/habits'));
app.use('/api/logs', require('./src/routes/logs'));
app.use('/api/admin', require('./src/routes/admin'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`API running on :${port}`));
