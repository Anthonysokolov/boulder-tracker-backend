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

router.get('/graph/:id', function(req, res, next){
  let out = []
  for(let i = 0; i < 10; i++){
    out.push({model_name:"V"+i, field1:0, field2:0})
  }
  Problem.findAll({where:{sessionId:req.params.id}})
    .then(problems => {
      for(let i = 0; i < problems.length; i++){
        let grade = problems[i].grade.slice(1)
        out[grade].field1 += problems[i].sends
        out[grade].field2 += problems[i].attempts
      }
      return res.json(out)
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
