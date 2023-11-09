const getMission = require('../controllers/mission.controller');

const router = require('express').Router()

router.get("/", getMission); 

module.exports = router;