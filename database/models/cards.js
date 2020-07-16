"use strict";
module.exports = (sequelize, DataTypes) => {
  const cards = sequelize.define(
    "cards",
    {
      name: DataTypes.STRING,
      id_user: DataTypes.INTEGER,
    },
    {}
  );

  // Associations are defined here
  cards.associate = (models) => {
    //Relationship with users
    cards.hasOne(models.users, {
      foreignKey: "fk_users",
      onUpdate: "CASCADE",
      onDelete: "NO ACTION",
    });
  };

  return cards;
};
