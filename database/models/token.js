"use strict";
module.exports = (sequelize, DataTypes) => {
  const token = sequelize.define(
    "token",
    {
      token: DataTypes.STRING,
      id_user: DataTypes.INTEGER,
    },
    {}
  );

  token.associate = (models) => {
    //Relationship with users
    token.hasOne(models.users, {
      foreignKey: "id",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  };

  return token;
};
