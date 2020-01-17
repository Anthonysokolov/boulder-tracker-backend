const Sequelize = require('sequelize')
const db = require('../db')

const Problem = db.define("problem",{
  index:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  grade:{
    type: Sequelize.STRING
  },
  name:{
    type: Sequelize.STRING
  },
  attempts:{
    type: Sequelize.STRING,
    allowNull: false
  },
  sends:{
    type: Sequelize.STRING
  },
  comments:{
    type: Sequelize.STRING
  }
})

module.exports = Problem
