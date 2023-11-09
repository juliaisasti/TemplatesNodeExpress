const getLocation = require('../controllers/location.controller');

const router = require('express').Router()

router.get("/", getLocation); 

module.exports = router;