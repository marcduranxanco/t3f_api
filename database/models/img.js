"use strict";
module.exports = (sequelize, DataTypes) => {
  const Img = sequelize.define(
    "img",
    {
      path: DataTypes.STRING
    },
    {
      freezeTableName: true
    }
  );
  Img.associate = (models) => {
    // associations can be defined here
  };

  return Img;
};
