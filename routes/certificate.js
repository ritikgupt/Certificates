var Participant=require('../models/participant')
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('verify');
  });
  router.post('/', (req, res) => {
    Participant.findOne({email: req.body.email}, (err,participant) => {
        console.log(participant)
      if (err)
      {
        res.render('error')}
      else {
          if(participant==null)
          res.render('error')
          console.log('hello');
        res.render('certificate',{participant:participant})
      }
    });
  });
module.exports=router;