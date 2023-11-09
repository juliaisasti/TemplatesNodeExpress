// app.get("/", function (req, res) {
//     res.render("home");
//   });

const getHome = require('../controllers/home.controller');

const router = require('express').Router()

router.get("/", getHome);

module.exports = router;