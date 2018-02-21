// Use this file to create config.conf.js. config.conf.js contains any configuration that could differe from environment to environment
// Configuration should be mentioned in such a way that there is no need of checking environment in code
// All configs should be available through out the app using config.[configOf]
var sequelizeConfig = require('./dbConfig');

var config = {};
config.env = 'development'; // development | staging | production 


//======================================== Sequilize
switch (config.env) {
    case 'production':
        config.sequelize = sequelizeConfig.production;
        break;
    case 'staging':
        config.sequelize = sequelizeConfig.staging;
        break;
    case 'development':
        config.sequelize = sequelizeConfig.development;
        break;
}
// //======================================== /Sequilize

module.exports = config;