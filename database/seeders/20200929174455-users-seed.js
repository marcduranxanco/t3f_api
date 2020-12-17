'use strict';
require('dotenv').config();
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    let pwd = bcrypt.hashSync(process.env.DEFAULT_USERS_SECRET, 10);

    return queryInterface.bulkInsert('Users', [
      {
      user_name: 'Superadmin',
      name: 'Superadmin',
      surname: 'User Super',
      email: 'superadmin@t3f.dev',
      password: pwd,
      role: 'superAdmin',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      user_name: 'Admin',
      name: 'Admin',
      surname: 'User Admin',
      email: 'admin@t3f.dev',
      password: pwd,
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
