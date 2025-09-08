const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected for User Service");
  } catch (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
