// In real-world we will use JWT middleware
// For now, mock "req.user" until auth integration

const User = require('../models/User');

// Get logged-in user profile
exports.getProfile = async (req, res) => {
  try {
    const userId = req.user?.id || req.query.id; // TEMP for testing
    console.log("Fetching profile for user ID:", userId);
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update logged-in user profile
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user?.id || req.query.id; // TEMP
    const updates = req.body;
    const user = await User.findByIdAndUpdate(userId, updates, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
