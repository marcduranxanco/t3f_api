'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Img', [
      {
        path: '/path/01',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/path/02',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/path/03',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/path/04',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/path/05',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: '/path/06',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
