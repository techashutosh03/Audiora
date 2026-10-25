const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');
const { validateBody } = require('../middleware/validator');

router.post('/register', validateBody(['username', 'email', 'password']), authController.register);
router.post('/login', validateBody(['email', 'password']), authController.login);
router.get('/me', authMiddleware, authController.getMe);

module.exports = router;
