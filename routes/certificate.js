var Certificate = require('../models/certificate');
var Participant=require('../models/participant')
var express = require('express');
var router = express.Router();

router.get('/verify', (req, res) => {
    res.status(200).render('verify');
  });
  router.post('/verify', (req, res) => {
    Participant.findOne({email: req.body.email}, (err,participant) => {
        console.log(participant)
      if (err)
      {
        res.send('not found');}
      else {
          console.log('hello');
        res.render('certificate',{participant:participant})
      }
    });
  });
// router.get('/certificate',async(req,res)=>{
//     res.render('certificate')
// })


module.exports=router;