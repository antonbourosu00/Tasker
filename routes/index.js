var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
	res.render("index.html");
	// with res.send - send a strind, with render a file
});

module.exports = router;