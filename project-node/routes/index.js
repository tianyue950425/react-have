var express = require('express');
var router = express.Router();

var userModel = require('../model/user');
/* GET home page. */
router.post('/checkusername', function(req, res, next) {
   userModel.find({
    username:req.body.username
  	}).then(result=>{
  		if(result.length == 1){
  			res.send(false)
  		}else{
  			res.send(true);
  		}
  	})
});
router.post('/registeruser', function(req, res, next) {
   userModel.create({
  	username:req.body.username,
  	password:req.body.password
  }).then(res=>{
	   res.send(res.data)
  }).catch(error=>{
      res.send(true)

  })
});
router.post('/loginuser', function(req, res, next) {
   userModel.find({
    username:req.body.username,
    password:req.body.password
    }).then(result=>{
      
      if(result.length == 1){
        res.send(true)
      }else{
        res.send(false);
      }

    })
});
module.exports = router;
