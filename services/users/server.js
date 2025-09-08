const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const userRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

// Health check
app.get('/check', (req, res) => {
  res.json({ message: 'User Service Running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`User Service running on port ${PORT}`));
