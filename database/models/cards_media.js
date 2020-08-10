"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cards_Media = sequelize.define(
    "Cards_Media",
    {
      id_card: DataTypes.INTEGER,
      id_media: DataTypes.INTEGER,
    },
    {}
  );

  // associations can be defined here
  Cards_Media.associate = (models) => {
    //Relationship with cards
    Cards_Media.hasOne(models.cards, {
      foreignKey: "fk_cards",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

    //Relationship with media
    Cards_Media.hasOne(models.Media, {
      foreignKey: "fk_media",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  };

  return Cards_Media;
};
