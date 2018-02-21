var User = require('../models').User;

module.exports= {

	index(req, res) {

	},


	show(req, res) {

	},

	create(req, res) {
		console.log('inside backend' + req.body);
		User.create(req.body)
			.then(function (newUser) {
				res.status(200).json({
 				  success: 'User Added Successfully!'
					});
			})
			.catch(function (error){
				console.log(error);
				res.json({error: 'Email address already in use!'});
			});
	},

	//Edit an existing user details using model.update()
	update(req, res) {
		User.update(req.body, {
			where: {
				id: req.params.id
			}
		})
			.then(function (updatedRecords) {
				res.status(200).json(updatedRecords);
			})
			.catch(function (error){
				res.status(500).json(error);
			});
	},

	//Delete an existing user by the unique ID using model.destroy()
	delete(req, res) {
		User.destroy({
			where: {
				id: req.params.id
			}
		})
			.then(function (deletedRecords) {
				res.status(200).json(deletedRecords);
			})
			.catch(function (error){
				res.status(500).json(error);
			});
	}
};