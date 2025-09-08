const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
connectDB();

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/check', (req, res) => {
  res.json({ message: 'Auth Service Running!' });
});

const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
