'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail:true  },
      unique: {  args: true}
      },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false
    }
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};