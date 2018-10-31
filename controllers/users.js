const User = require('../models/User.js');
const signToken = require('../serverAuth').signToken;

module.exports = {
	// list all users
	index: (req, res) => {
		User.find({}, (err, users) => {
			if(err) return res.json({message: "ERROR", payload: null, code: err.code})
			res.json({ message: "SUCCESS", payload: users})
		})
	},

	// get one user
	show: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			if(err) return res.json({message: "ERROR", payload: null, code: err.code})
			res.json({ message: "SUCCESS", payload: user })
		})
	},

	// create a new user
	create: (req, res) => {
		User.create(req.body, (err, user) => {
			if(err) return res.json({message: "ERROR", payload: null, code: err.code})
			const token = signToken(user);
			res.json({ success: true, token });
		})
	},

	// update an existing user
	update: (req, res) => {
		User.findById(req.params.id, (err, user) => {
			if(!req.body.password) delete req.body.password
			Object.assign(user, req.body)
			user.save((err, updatedUser) => {
				if(err) return res.json({message: "ERROR", payload: null, code: err.code})
				res.json({ message: "SUCCESS", payload: user })
			})
		})
	},

	// delete an existing user
	destroy: (req, res) => {
		User.findByIdAndRemove(req.params.id, (err, user) => {
			if(err) return res.json({message: "ERROR", payload: null, code: err.code})
			res.json({ message: "SUCCESS", payload: user })
		})
	},

	// Authenticate User / Login Action
	authenticate: (req, res) => {
		console.log("user")
		let { email, password } = req.body;
		User.findOne({ email }, (err, user) => {
			if (!user || !user.validPassword(password)) {
				return res.json({ success: false, message: "Invalid Credentials" });
			}

			const token = signToken(user);
			res.json({ success: true, token });
		})
	},

// A Day doesn't exist without having a User. A User must have a JWT in order to hint the daysrouter
	listDays: (req, res) => {
		console.log("req", req.user)
		let { user } = req;
		User.findById(user.id, (err, user) => {
			if (err) res.json({ success: false, err })
			res.json({ success: true, user })
		})
		
	},
	// listDays: (req, res) => {
	// 	res.json({sucess:true, days:req.user.days})
	// },
	
	createDay: (req, res) => {
		let { user } = req; 
		User.findById(user.id, (err, user) => {
			if (err) res.json({ success: false, err });

			// If day already exists.
			let exists;
			user.days.forEach(day => {
				if (day.date === req.body.date) exists =  true;
			});

			if (exists) res.json({ success: false, message: "Date Already exits." })
			user.days.push(req.body)
			user.save((err, day) => {
				if (err) res.json({ success: false, err })
				res.json({success: true, user })
			})
		})
	},
	
	createMeal: (req, res) => {
		User.findById(req.user.id, (err, user) => {
			user.days.meals.push(req.body);
			user.days.caloriesLeft = user.days.caloriesLeft - req.body.calories;

			user.save((err, day) => {
				if (err) res.json({ success: false, err })
				res.json({success: true, user })
			})
		})	
	}
}

