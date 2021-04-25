"use strict";
module.exports = (sequelize, DataTypes) => {
  const platforms = sequelize.define(
    "platforms",
    {
      name: DataTypes.STRING,
      url_platform: DataTypes.STRING,
      id_img: DataTypes.INTEGER,
    },
    {}
  );

  // associations can be defined here
  platforms.associate = (models) => {
    platforms.belongsTo(models.Img, {
      foreignKey: "fk_imgId",
      onUpdate: "CASCADE",
    });
  };

  return platforms;
};
