'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('platforms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(50)
      },
      url_platform: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      id_img: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        references: {
          model: 'img',
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
    return queryInterface.dropTable('platforms');
  }
};