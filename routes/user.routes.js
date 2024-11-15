const express = require('express');
const { registerUser, getAllUsers, getUserByUsername } = require('../controllers/user.controller');
const validateRequest = require('../middlewares/validateUser.middleware');
const validateApiKey = require('../middlewares/validateAPIKey.middleware');
const { validateUser } = require('../validation/user.validation');

const router = express.Router();

router.post('/register', validateRequest(validateUser), registerUser);
router.get('/all', validateApiKey, getAllUsers);
router.get('/:username', getUserByUsername);

module.exports = router;
