'use strict';
module.exports = (sequelize, DataTypes) => {
  const cards = sequelize.define('cards', {
    name: DataTypes.STRING,
    id_user: DataTypes.INTEGER
  }, {});
  cards.associate = function(models) {
    // associations can be defined here
  };
  return cards;
};