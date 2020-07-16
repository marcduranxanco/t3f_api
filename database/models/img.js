"use strict";
module.exports = (sequelize, DataTypes) => {
  const img = sequelize.define(
    "img",
    {
      path: DataTypes.STRING,
    },
    {}
  );
  img.associate = (models) => {
    // associations can be defined here
  };

  return img;
};
