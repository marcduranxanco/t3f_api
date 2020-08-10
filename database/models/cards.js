"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cards = sequelize.define(
    "Cards",
    {
      name: DataTypes.STRING,
      id_user: DataTypes.INTEGER,
    },
    {}
  );

  // Associations are defined here
  Cards.associate = (models) => {
    //Relationship with Users
    Cards.hasOne(models.Users, {
      foreignKey: "id",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  };

  return Cards;
};
