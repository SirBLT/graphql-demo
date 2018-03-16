require('dotenv').load()

const { createServer } = require('http')
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { execute, subscribe } = require('graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { SubscriptionServer } = require('subscriptions-transport-ws')

const FormattableDateDirective = require('./directives/formattableDate')

const resolvers = require('./resolvers')
const typeDefs = require('./schema')

const PORT = process.env.PORT || 3000

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    formattableDate: FormattableDateDirective
  }
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql',
  bodyParser.json(),
  graphqlExpress((req) => {

    let user = { name: 'Nick Fury', roles: ['ADMIN'] }

    // this is typically where the load the dataloders, so that API fetches
    // are deduplicated per-request only.
    return {
      schema,
      context: { user }
    }
  })
);

// GraphiQL, a visual editor for queries
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`
  })
);

// Start the server
const ws = createServer(app)
ws.listen(PORT, () => {
  console.log(`Go to http://localhost:${PORT}/graphiql to run queries!`);

  new SubscriptionServer({
    execute,
    subscribe,
    schema
  }, {
      server: ws,
      path: '/subscriptions'
    })
})