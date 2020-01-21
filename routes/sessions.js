const express = require('express')
const router = express.Router()
const {Session, Problem} = require('../database/models')

router.get('/', function(req, res, next){
  Session.findAll()
    .then(sessions => res.status(200).json(sessions))
    .catch(err => next(err))
})

router.get('/:id', function(req, res, next){
  Session.findByPk(req.params.id, {include:[Problem]})
    .then(session => {
      session.numClimbs = session.problems.length
      return res.json(session)
    })
    .catch(err => res.status(404))
})

router.post('/add', function(req, res, next){
  Session.create({
    date:Date(),
    location:req.body.location,//.location,
    comments:req.body.comments,
    userId:req.body.userId
  })
    .then(obj => res.send(obj))
    .catch(err => res.send(err))
})


module.exports = router
