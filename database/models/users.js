"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      user_name: DataTypes.STRING,
      name: DataTypes.STRING,
      surname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM(('user', 'superAdmin', 'admin')),
    },
    {}
  );
  Users.associate = (models) => {
    // associations can be defined here
  };

  return Users;
};
