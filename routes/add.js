var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('add');
});
router.post('/submit',function(req,res)
{
 var models = require('../models/');

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `body` and `url_name` variables here
  var createURL = function(name)
  { 
  	if(!name.trim())
  	{
  		return  Math.random().toString(36).substring(2,7);
  
     }
 else {
 	
   return name.replace(/\s/ig,"_").replace(/\W/ig,"");
}
 
  };

  var p = new models.Page({ "title": req.body.pagename, "body":req.body.pagecontent, "url_name": createURL(req.body.pagename)});
  p.save();
  res.redirect('/');
});



module.exports = router;
