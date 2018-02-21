var path = require('path');
var app = require('express')();
var users = require('./controllers/users');
var cors = require('cors');  
module.exports = function(app) {

	app.use(cors());
	app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
	app.post('/api/users', users.create);
	


	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
	res.render(path.resolve('./client/index.html')); // load our public/index.html file
		
	});
};