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
    .then(session => res.json(session))
    .catch(next)
})

module.exports = router
