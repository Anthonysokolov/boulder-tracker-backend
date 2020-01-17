const Sequelize = require('sequelize')
const db = require('../db')


const User = db.define("user",{
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  id:{
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = User
