const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.get('/recommendations', profileController.getRecommendations);

module.exports = router;
