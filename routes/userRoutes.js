// Import modules

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getCurrentUser } = require('../controllers/userController')

// Define routes

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/current', getCurrentUser)

// Export module

module.exports = router