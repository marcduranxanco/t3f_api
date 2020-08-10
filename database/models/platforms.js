"use strict";
module.exports = (sequelize, DataTypes) => {
  const Platforms = sequelize.define(
    "Platforms",
    {
      name: DataTypes.STRING,
      url_platform: DataTypes.STRING,
      id_img: DataTypes.INTEGER,
    },
    {}
  );

  // associations can be defined here
  Platforms.associate = (models) => {
    Platforms.belongsTo(models.Img, {
      foreignKey: "fk_imgId",
      onUpdate: "CASCADE",
    });
  };

  return Platforms;
};
