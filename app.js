const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

var api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: process.env.MARVEL_PUBLIC_KEY,
  privateKey: process.env.MARVEL_PRIVATE_KEY
});

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
  {
    title: 'Love & Gelato',
    author: 'Jenna Evans Welch'
  }
];

// The GraphQL schema in string form
const typeDefs = `
  
  type Query { 
    #Random List of Books
    books: [Book],

    #Marvel characters
    characters (name: String, id: Int) : CharacterList 
  }

  type Book { 
    #Notes about what this really does
    title: String, 
    author: String 
  }

  type Comic {
    name: String
  }

  type Meta {
    offset: Int
    limit: Int
    total: Int
    count: Int
  }

  type CharacterList {
    data: [Character]!
    meta: Meta
  }

  type Character {
    id: Int
    name: String
    description: String
    modified: String
    resourceURI: String
    comics: [Comic]!
  }
`;

// The resolvers
const resolvers = {
  Query: {
     books: () => books,
     characters: async (root, {name, id}, context) => {

      if (name){
        let { data, meta} = await marvel.characters.findNameStartsWith(name)
        return {data, meta}
      }

      if (id){
        return marvel.characters.find(id)
      }

      let {data, meta} = await marvel.characters.findAll()
      return {data, meta}
     }
  },
  Character : {
    comics: (character, params, context)=>{
      console.log('item', character.comics.items[0])
        return character.comics.items
    }
  }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});