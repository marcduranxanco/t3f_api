'use strict';
module.exports = (sequelize, DataTypes) => {
  const cards_media = sequelize.define('cards_media', {
    id_card: DataTypes.INTEGER,
    id_media: DataTypes.INTEGER
  }, {});
  cards_media.associate = function(models) {
    // associations can be defined here
  };
  return cards_media;
};