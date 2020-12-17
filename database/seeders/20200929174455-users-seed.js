'use strict';
require('dotenv').config();
const bcrypt = require("bcryptjs");

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
    let pwd = bcrypt.hashSync(process.env.DEFAULT_USERS_SECRET, 10);

    return queryInterface.bulkInsert('Users', [
      {
      user_name: 'User1',
      name: 'User1',
      surname: 'Sur1',
      email: 'User1@example.com',
      password: pwd,
      role: 'superAdmin',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      user_name: 'User2',
      name: 'User2',
      surname: 'Sur2',
      email: 'User2@example.com',
      password: pwd,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      user_name: 'User3',
      name: 'User3',
      surname: 'Sur3',
      email: 'User3@example.com',
      password: pwd,
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
