'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cards_media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_card: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id'
        }
      },
      id_media: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'media',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cards_media');
  }
};