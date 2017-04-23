var express = require('express');

var router = express.Router();

router.get('/', function(req, res) {
    res.render("page-contact");
});

router.post('/', function(req, res) {
    res.render("page-contact");
});

module.exports = router;
