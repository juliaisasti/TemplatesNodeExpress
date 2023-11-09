const getAbout = require('../controllers/about.controller');

const router = require('express').Router()

router.get("/", getAbout); 

module.exports = router;