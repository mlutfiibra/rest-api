'use strict';
const Helper = require('../helpers/helper')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(user) {
        user.password = Helper.hashPassword(user.password);        
      },
    }
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Todo, {foreignKey: 'user_id'})
  };
  return User;
};