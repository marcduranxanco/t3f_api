'use strict';
module.exports = (sequelize, DataTypes) => {
  const platforms = sequelize.define('platforms', {
    name: DataTypes.STRING,
    url_platform: DataTypes.STRING,
    id_img: DataTypes.INTEGER
  }, {});
  platforms.associate = function(models) {
    // associations can be defined here
  };
  return platforms;
};