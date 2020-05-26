var Participant=require('../models/participant')
var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).render('verify');
  });
  router.post('/', (req, res) => {
    Participant.findOne({email: req.body.email}, (err,participant) => {
      if (err)
      {
        res.render('incorrect');}
      else {
          if(participant==null)
          res.render('incorrect')
          else{
        res.render('certificate',{participant:participant})
          }
      }
    });
  });
// router.get('/certificate',async(req,res)=>{
//     res.render('certificate')
// })


module.exports=router;