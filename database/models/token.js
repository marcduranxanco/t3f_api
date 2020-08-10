"use strict";
module.exports = (sequelize, DataTypes) => {
  const Token = sequelize.define(
    "Token",
    {
      Token: DataTypes.STRING,
      id_user: DataTypes.INTEGER,
      expires: DataTypes.STRING,
    },
    {}
  );

  Token.associate = (models) => {
    //Relationship with users
    Token.hasOne(models.users, {
      foreignKey: "id",
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  };

  return Token;
};
