const {User, Session, Problem} = require("../database/models")

const users = require('../data/users')
//const sessions = require('../data/sessions')


const populateUsersTable = async (users) => {

}


let currentUser = await User.create(users[0])
console.log(currentUser)
