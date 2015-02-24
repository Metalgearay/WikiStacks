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

router.get('/:name/wiki',function(req,res,next){
    var name = req.params.name;
    console.log(name);

	 db.Page.find({url_name:name},function (err,docs) {   
	 	console.log("error", err);
	 	console.log("ok");
   		console.log("here", docs);
  		res.render('show', { title: 'WikiStack',docs:docs});
	});
});


module.exports = router;
