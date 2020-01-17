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
  },
  comments:{
    type: Sequelize.STRING
  },
  userID:{
    type: Sequelize.STRING,
    allowNull: false,
    foreignKey:true
  }
})

module.exports = Session
