const express = require('express')
const router = express.Router()
const {User, Session, Problem} = require('../database/models')

router.get('/', function(req, res, next){
  User.findAll()
    .then(users => res.status(200).json(users))
    .catch(err => next(err))
})

router.get('/:id', function(req, res, next){
  User.findByPk(req.params.id, {include:[{model:Session, include:[Problem]}]})
    .then(user => res.json(user))
    .catch(next)
})

module.exports = router
