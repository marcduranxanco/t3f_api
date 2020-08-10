"use strict";
module.exports = (sequelize, DataTypes) => {
  const Media = sequelize.define(
    "Media",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      platforms_ids: DataTypes.STRING,
      id_tmdb: DataTypes.INTEGER,
      id_img: DataTypes.INTEGER,
    },
    {}
  );

  // associations can be defined here
  Media.associate = (models) => {
    // associations can be defined here
  };

  return Media;
};
