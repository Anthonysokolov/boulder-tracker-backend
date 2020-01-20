const express = require('express')
const router = express.Router()
const {Problem} = require('../database/models')

router.post('/add', function(req, res, next){
  Problem.create({
    index:req.query.index,
    grade:req.query.grade,
    name:req.query.name,
    attempts:req.query.attempts,
    sends:req.query.sends,
    comments:req.query.comments,
    sessionId:req.query.sessionId
  })
    .then(obj => res.send(obj))
    .catch(err => res.send(err))
})

module.exports = router
