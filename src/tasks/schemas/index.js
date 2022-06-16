const { gql } = require('apollo-server');

const queries = require('./queries');
const types = require('./types');
const mutations = require('./mutations');

module.exports = [...types, queries, mutations].map(schema => gql(schema));
