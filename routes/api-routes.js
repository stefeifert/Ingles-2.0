const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports = function (app) {

	app.post("/api/authenticate", function (req, res) {
		const {username, password} = req.body;
		User.findOne({ username: username })
			.then(function (user) {
				const isValidPass = user.comparePassword(password);
				if (isValidPass) {
					// NOTE: the secret should ultimately come from an environment variable and not be hard coded into the site
					const token = jwt.sign({ data: user.id }, "superSecretKey");
					res.json({
						id: user.id,
						username: user.username,
						token: token
					});
				} else {
					res.status(404).json({ message: "Incorrect username or password." });
				}
			})
			.catch(function (err) {
				res.status(404).json({ message: "Incorrect username or password." });
			});
	});

	app.post('/api/signup', function(req, res) {
		const userData = {
			username: req.body.username,
			password: req.body.password
		};

		User.create(userData).then(function(dbUser){
			res.json({success:true});
		});
	});

	app.get("/api/protected", function (req, res) {
		res.json({
			message: "Super secret stuff. I mean really.",
			user: req.user
		});
	});

	app.get("/api/public", function (req, res) {
		res.json({
			message: "This is just boring, public data."
		});
	});



}