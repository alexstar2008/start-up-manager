const dataSources = require('../tasks/data-sources');
const resolvers = require('../tasks/resolvers');
const typeDefs = require('../tasks/schemas');
const { ApolloServer } = require('apollo-server');

module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => dataSources
});