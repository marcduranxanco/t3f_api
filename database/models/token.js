"use strict";
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define(
    "Token",
    {
      token: DataTypes.STRING,
      id_user: DataTypes.INTEGER,
    },
    {}
  );

  Token.associate = (models) => {
    //Relationship with users
    Token.hasOne(models.Users, {
      foreignKey: "id",
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };

  return Token;
};
