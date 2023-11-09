const getContact = require('../controllers/contact.controller');

const router = require('express').Router()

router.get("/", getContact); 

module.exports = router;