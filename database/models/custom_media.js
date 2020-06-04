'use strict';
module.exports = (sequelize, DataTypes) => {
  const custom_media = sequelize.define('custom_media', {
    id_img: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  custom_media.associate = function(models) {
    // associations can be defined here
  };
  return custom_media;
};