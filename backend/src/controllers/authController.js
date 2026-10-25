const jwt = require('jsonwebtoken');

const mockUsers = [];

const authController = {
  register: async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const newUser = {
        id: `usr_${Date.now()}`,
        username,
        email,
        password, // In production, hash with bcrypt
      };
      mockUsers.push(newUser);

      const token = jwt.sign(
        { id: newUser.id, username: newUser.username, email: newUser.email },
        process.env.JWT_SECRET || 'super_secret_audiora_jwt_key_change_in_prod',
        { expiresIn: '7d' }
      );

      res.status(201).json({
        message: 'User registered successfully',
        user: { id: newUser.id, username: newUser.username, email: newUser.email },
        token,
      });
    } catch (err) {
      next(err);
    }
  },

  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const user = mockUsers.find((u) => u.email === email) || {
        id: 'usr_demo_123',
        username: email.split('@')[0] || 'audiora_user',
        email,
      };

      const token = jwt.sign(
        { id: user.id, username: user.username, email: user.email },
        process.env.JWT_SECRET || 'super_secret_audiora_jwt_key_change_in_prod',
        { expiresIn: '7d' }
      );

      res.json({
        message: 'Login successful',
        user: { id: user.id, username: user.username, email: user.email },
        token,
      });
    } catch (err) {
      next(err);
    }
  },

  getMe: async (req, res) => {
    res.json({ user: req.user });
  },
};

module.exports = authController;
