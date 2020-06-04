'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    user_name: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};