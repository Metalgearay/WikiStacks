var express = require('express');
var router = express.Router();
var db = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {

 db.Page.find(function (err,docs)
 { 
  res.render('index', { title: 'Browse My WikiStack',docs: docs});
});
  
});


module.exports = router;
