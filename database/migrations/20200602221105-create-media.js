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
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      year: {
        type: Sequelize.STRING,
      },
      genere: {
        type: Sequelize.STRING,
      },
      platforms_ids: {
        type: Sequelize.STRING,
      },
      id_tmdb: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      id_img: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        references: {
          model: 'img',
          key: 'id'
        }
      },
      id_user: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'NO ACTION',
        references: {
          model: 'Users',
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