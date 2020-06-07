'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_tmdb: {
        type: Sequelize.INTEGER
      },
      id_custom_media: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        references: {
          model: 'custom_media',
          key: 'id'
        }
      },
      id_platform: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        references: {
          model: 'platforms',
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
    return queryInterface.dropTable('media');
  }
};