"use strict";
module.exports = (sequelize, DataTypes) => {
  const Img = sequelize.define(
    "Img",
    {
      path: DataTypes.STRING,
    },
    {}
  );
  Img.associate = (models) => {
    // associations can be defined here
  };

  return Img;
};
