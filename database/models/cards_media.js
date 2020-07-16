"use strict";
module.exports = (sequelize, DataTypes) => {
  const cards_media = sequelize.define(
    "cards_media",
    {
      id_card: DataTypes.INTEGER,
      id_media: DataTypes.INTEGER,
    },
    {}
  );

  // associations can be defined here
  cards_media.associate = (models) => {
    //Relationship with cards
    cards_media.hasOne(models.cards, {
      foreignKey: "fk_cards",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

    //Relationship with media
    cards_media.hasOne(models.media, {
      foreignKey: "fk_media",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  };

  return cards_media;
};
