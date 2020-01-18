const Sequelize = require('sequelize')
const db = require('../db')

const Session = db.define("session",{
  date:{
    type: Sequelize.DATE,
    allowNull: false
  },
  location:{
    type: Sequelize.STRING,
    allowNull: false
  },
  comments:{
    type: Sequelize.STRING
  }
})

module.exports = Session
