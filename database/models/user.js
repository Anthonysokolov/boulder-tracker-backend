const Sequelize = require('sequelize')
const crypto = require('crypto')
const db = require('../db')


const User = db.define("user",{
  username:{
    type: Sequelize.STRING,
    unique:true,
    allowNull: false
  },
  password:{
    type: Sequelize.STRING,
    allowNull: false,
    get(){
      return () => this.getDataValue("password")
    }
  },
  salt:{
    type: Sequelize.STRING,
    get(){
      return () => this.getDataValue("salt")
    }
  }
})

module.exports = User
