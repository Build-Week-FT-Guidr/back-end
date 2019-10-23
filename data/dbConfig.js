const knex = require('knex');

const knexConfig = require('../knexfile');

// const environment = process.env.ENVIRONMENT;
// console.log(environment)

module.exports = knex(knexConfig.development);