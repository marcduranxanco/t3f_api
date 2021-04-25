"use strict";

module.exports = (sequelize, DataTypes) => {

  const cards_media = sequelize.define(
    "cards_media",
    {
      id_card: {
        type: DataTypes.INTEGER,
        references: {
          model: "cards",
          key: 'id'
        }
      },
      id_media:{
        type: DataTypes.INTEGER,
        references: {
          model: "media", 
          key: 'id'
        }
      },
    },
    {}
  );

  // associations can be defined here
  cards_media.associate = (models) => {

    // models.Cards.belongsToMany(models.Media, { through: Cards_Media, foreignKey: 'id_card' });
    // models.Media.belongsToMany(models.Cards, { through: Cards_Media, foreignKey: 'id_media' });

    //Relationship with cards
    cards_media.hasMany(models.Cards, {
      foreignKey: "id",
      // onUpdate: "CASCADE",
      // onDelete: "NO ACTION",
    });

    cards_media.hasMany(models.Media, {
      foreignKey: "id",
      // onUpdate: "CASCADE",
      // onDelete: "NO ACTION",
    });

  };

  return cards_media;
};
