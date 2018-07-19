require('dotenv').load()

const {createServer} = require('http')
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const FormattableDateDirective = require('./directives/formattableDate')

const resolvers = require('./resolvers')
const typeDefs = require('./schema')

const PORT = process.env.PORT || 3000

// Initialize the app
const app = express();

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({
  app,
  context: ({req, res}) =>{
    user: { name: 'kaleb'}
  }
})

const httpServer = createServer(app)

httpServer.listen({port: PORT}, ()=>{
  console.log(`Server ready at http://localhost:${PORT}/${server.graphqlPath}`)
  console.log(`Subscriptions ready at ws://localhost:${PORT}/${server.subscriptionsPath}`)
})