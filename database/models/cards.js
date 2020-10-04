"use strict";
const { Cards_Media } = require("./cards_media");

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

    Cards.belongsTo(models.Users, {
      foreignKey: "id_user",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

    Cards.belongsToMany(models.Media, {
      through: "Cards_Media",
      foreignKey: "id_card",
      otherKey: "id_media",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

  };

  return Cards;
};
