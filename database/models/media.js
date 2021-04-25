"use strict";
const { cards_media } = require("./cards_media");

module.exports = (sequelize, DataTypes) => {
  const media = sequelize.define(
    "media",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      year: DataTypes.INTEGER,
      genere: DataTypes.STRING,
      id_user: DataTypes.INTEGER,
      platforms_ids: DataTypes.STRING,
      id_tmdb: DataTypes.INTEGER,
      id_img: DataTypes.INTEGER,
      id_user: DataTypes.INTEGER,
    },
    {}
  );


  // associations can be defined here
  media.associate = (models) => {

    media.belongsTo(models.users, {
      foreignKey: "id_user",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

    media.belongsToMany(models.cards, {
      through: "cards_media",
      foreignKey: "id_media",
      otherKey: "id_card",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

  };

  return media;
};
