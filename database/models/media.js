"use strict";
const { Cards_Media } = require("./cards_media");

module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define(
    "Media",
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
  Media.associate = (models) => {

    Media.belongsTo(models.Users, {
      foreignKey: "id_user",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

    Media.belongsToMany(models.Cards, {
      through: "Cards_Media",
      foreignKey: "id_media",
      otherKey: "id_card",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });

  };

  return Media;
};
