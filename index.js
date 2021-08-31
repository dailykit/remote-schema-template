const { ApolloServer } = require("apollo-server");
const express = require("express");
const app = express();
const port = 4000;
const typeDefs = require("./typeDefs");
const resolvers = require("./resolver");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
