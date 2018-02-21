'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull:true,
        unique: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull:true,
        unique: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull:true,
        unique: false
      },
      phone: {
        type: Sequelize.STRING,
        allowNull:true,
        unique: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull:true,
        unique: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};