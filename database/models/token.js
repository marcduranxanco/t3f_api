'use strict';
module.exports = (sequelize, DataTypes) => {
  const token = sequelize.define('token', {
    token: DataTypes.STRING,
    id_user: DataTypes.INTEGER
  }, {});
  token.associate = function(models) {
    // associations can be defined here
  };
  return token;
};