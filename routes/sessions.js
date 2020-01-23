const express = require('express')
const router = express.Router()
const {Session, Problem} = require('../database/models')

router.get('/', function(req, res, next){
  Session.findAll({where:{userId:req.user.id},include:[Problem]})
    .then(user => res.json(user))
    .catch(next)
})

router.get('/:id', function(req, res, next){
  Session.findByPk(req.params.id, {include:[Problem]})
    .then(session => {
      session.numClimbs = session.problems.length
      if(session.userId != req.user.id){
        return res.status(404)
      }
      return res.json(session)
    })
    .catch(err => res.status(404))
})


router.post('/add', function(req, res, next){
  Session.create({
    date:Date(),
    location:req.body.location,//.location,
    comments:req.body.comments,
    userId:req.user.id
  })
    .then(obj => res.send(obj))
    .catch(err => res.send(err))
})


module.exports = router
