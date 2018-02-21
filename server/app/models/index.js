/*
 Database set up can be performed using link
 https://www.techrepublic.com/blog/diy-it-guy/diy-a-postgresql-database-server-setup-anyone-can-handle/
 */

'use strict';

var fs        = require('fs'); // deals with file system
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require('../../config/dbConfig')[env];
var db        = {};

//Create a Sequelize connection to the database using the URL in config/dbConfig.js
var sequelize  = new Sequelize(config.database, config.username, config.password, config);

//Load all the models
fs
	.readdirSync(__dirname)
	.filter(function(file) {
		return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
	})
	.forEach(function(file) {
		var model = sequelize['import'](path.join(__dirname, file));
		db[model.name] = model;

	});

Object.keys(db).forEach(function(modelName) {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

//Export the db Object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;