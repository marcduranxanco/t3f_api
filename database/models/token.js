'use strict';
module.exports = (sequelize, DataTypes) => {
  const token = sequelize.define('token', {
    token: DataTypes.STRING,
    id_user: DataTypes.INTEGER
  }, {});

  token.associate = models => {
    token.hasOne(models.users, {
      foreignKey: 'fk_users',
      onUpdate: 'CASCADE',
      onDelete: 'NO ACTION'
    })
  };
  return token;
};