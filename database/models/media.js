'use strict';
module.exports = (sequelize, DataTypes) => {
  const media = sequelize.define('media', {
    id_tmdb: DataTypes.INTEGER,
    id_custom_media: DataTypes.INTEGER,
    id_platform: DataTypes.INTEGER
  }, {});
  media.associate = function(models) {
    // associations can be defined here
  };
  return media;
};