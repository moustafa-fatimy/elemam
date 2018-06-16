// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});


// route for our menu
router.get('/', function(req, res) {
  res.render('pages/menu');
});



// route for our share
router.get('/', function(req, res) {
  res.render('pages/share');
});



