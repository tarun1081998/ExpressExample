const User = require('../models/user.model');

async function registerUser(req, res) {
  const { fullName, username, email } = req.body;
  try {
    const existing = await User.findOne({ $or: [{ username }, { email }] });
    if (existing) {
      return res.status(409).json({
        message: "Failed to add user",
        reason: "User already exists",
      });
    }

    const newUser = new User({ fullName, username, email });
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (ex) {
    return res.status(500).json({ message: ex.message });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function getUserByUsername(req, res) {
  const { username } = req.params;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        username,
      });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = { registerUser, getAllUsers, getUserByUsername };
