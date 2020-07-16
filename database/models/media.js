"use strict";
module.exports = (sequelize, DataTypes) => {
  const media = sequelize.define(
    "media",
    {
      id_tmdb: DataTypes.INTEGER,
      id_custom_media: DataTypes.INTEGER,
      id_platform: DataTypes.INTEGER,
    },
    {}
  );

  // associations can be defined here
  media.associate = (models) => {
    //Relationship with platforms
    media.hasMany(models.platforms, {
      foreignKey: "fk_platform",
      onUpdate: "CASCADE",
    });

    //Relationship with custom_media
    media.hasOne(models.custom_media, {
      foreignKey: "fk_custom_media",
      onUpdate: "CASCADE",
    });
  };

  return media;
};
