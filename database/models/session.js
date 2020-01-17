const Sequelize = require('sequelize')
const db = require('../db')

const Session = db.define("session",{
  date:{
    type: Sequelize.DATE,
    allowNull: false
  },
  time:{
    type: Sequelize.TIME,
    allowNull: false
  },
  location:{
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Session
