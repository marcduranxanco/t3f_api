const fs = require("fs");
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DEV_DB_USER,
    password: null,
    database: process.env.DEV_DB_DATABASE,
    host: process.env.DEV_DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false,
  },
  production: {
    username: process.env.PROD_DB_USER,
    password: null,
    database: process.env.PROD_DB_DATABASE,
    host: process.env.PROD_DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
  },
};
