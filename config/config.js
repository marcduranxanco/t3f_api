const fs = require("fs");
require('dotenv').config();
const Sequelize = require("sequelize");

module.exports = {
  development: {
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_DATABASE,
    host: process.env.DEV_DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: Sequelize.Op,
    jwt_secret:process.env.DEV_JWT_SECRET,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: Sequelize.Op,
    jwt_secret:process.env.TEST_JWT_SECRET,
  },
  production: {
    username: process.env.PROD_DB_USER,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_DATABASE,
    host: process.env.PROD_DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: Sequelize.Op,
    jwt_secret:process.env.PRO_JWT_SECRET,
  },
};
