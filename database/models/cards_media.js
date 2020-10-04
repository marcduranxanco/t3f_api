"use strict";

module.exports = (sequelize, DataTypes) => {

  const Cards_Media = sequelize.define(
    "Cards_Media",
    {
      id_card: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cards",
          key: 'id'
        }
      },
      id_media:{
        type: DataTypes.INTEGER,
        references: {
          model: "Media", 
          key: 'id'
        }
      },
    },
    {}
  );

  // associations can be defined here
  Cards_Media.associate = (models) => {

    // models.Cards.belongsToMany(models.Media, { through: Cards_Media, foreignKey: 'id_card' });
    // models.Media.belongsToMany(models.Cards, { through: Cards_Media, foreignKey: 'id_media' });

    //Relationship with cards
    Cards_Media.hasMany(models.Cards, {
      foreignKey: "id",
      // onUpdate: "CASCADE",
      // onDelete: "NO ACTION",
    });

    Cards_Media.hasMany(models.Media, {
      foreignKey: "id",
      // onUpdate: "CASCADE",
      // onDelete: "NO ACTION",
    });

  };

  return Cards_Media;
};
