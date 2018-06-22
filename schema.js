// The GraphQL schema in string form
const typeDefs = `

    directive @formattableDate(
        defaultFormat: String = "MMMM D, YYYY"
    ) on FIELD_DEFINITION

    scalar Date
  
    #Root query type -- this is where we can start to traverse our graph
    type Query { 
        # All Marvel characters
        characters: [Character]!

        # Find character by Id
        character (id: Int, name: String) : Character
    }

    type Character { 
        id: Int!

        # Marvel API Identifier
        marvelId: Int
        name: String
        
        # Known birthdates
        birthdate: Date  @formattableDate

        teamRank: String @deprecated(reason: "It's not important")

        # This pulls a list of the first 5 comics from the Marvel API
        comics: [Comic]!

        friends: [Character]!
    }

    type Comic {
        id: Int
        title: String
        description: String
        issueNumber: Int
    }

    input HeroFriend {
        id: Int
        friendId: Int
    }

    type Mutation {
        addFriend(input: HeroFriend) : Character
    }

    type Subscription {
        friendAdded(id: Int!): Character
    }
`;

module.exports = typeDefs