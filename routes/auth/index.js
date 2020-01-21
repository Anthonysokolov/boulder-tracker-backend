const express = require("express");
const router = express.Router();
const { User } = require("../../database/models");

router.post("/login", function(request, response, next) {
	User.findOne({
		where: {
			username: request.body.username
		}
	})
	.then(function(user) {
		console.log("Found user: ", user);
		request.login(function(user, error) {
			return err ? next(err) : res.json(user);
		});
	})
	.catch(function(err) {
		console.log("Login error: ", err);
		next(err);
	})
});

module.exports = router;