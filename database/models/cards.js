"use strict";
const { Cards_Media } = require("./cards_media");

module.exports = (sequelize, DataTypes) => {
  const cards = sequelize.define(
    "cards",
    {
      name: DataTypes.STRING,
      id_user: DataTypes.INTEGER,
    },
    {}
  );

  // Associations are defined here
  cards.associate = (models) => {

    cards.belongsTo(models.Users, {
      foreignKey: "id_user",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

    cards.belongsToMany(models.Media, {
      through: "cards_media",
      foreignKey: "id_card",
      otherKey: "id_media",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

  };

  return cards;
};
