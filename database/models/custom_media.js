"use strict";
module.exports = (sequelize, DataTypes) => {
  const custom_media = sequelize.define(
    "custom_media",
    {
      id_img: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {}
  );

  // associations can be defined here
  custom_media.associate = (models) => {
    //Relationship with img
    custom_media.hasOne(models.img, {
      foreignKey: "fk_img",
      onUpdate: "CASCADE",
    });
  };

  return custom_media;
};
