const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const {
  register,
  login,
  getProfile
} = require('../controllers/authController');

/**
 * @route   POST /api/auth/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', register);

/**
 * @route   POST /api/auth/login
 * @desc    Authenticate user and get JWT token
 * @access  Public
 */
router.post('/login', login);

/**
 * @route   GET /api/auth/profile
 * @desc    Get current user profile
 * @access  Private (requires JWT token)
 */
router.get('/profile', authenticateToken, getProfile);

module.exports = router;
