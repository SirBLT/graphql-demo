const data = require('./data')
const api = require('marvel-api');
const { find, filter, map } = require('lodash')
const { PubSub, withFilter } = require('graphql-subscriptions')

const Dataloader = require('dataloader')

// fetch data from the Marvel API
var marvel = api.createClient({
    publicKey: process.env.MARVEL_PUBLIC_KEY,
    privateKey: process.env.MARVEL_PRIVATE_KEY
});

const pubsub = new PubSub()

//data loader -- batching / data fetching
const hero = new Dataloader(ids => findByIds(ids))

const findByIds = (ids) => {
    console.log('finding hero with dataloader', ids)
    return Promise.resolve(
        filter(data, h => ids.includes(h.id))
    )
}

const findById = (id) => {
    console.log('finding hero by id', id)
    return find(data, { id })
}

// Root Query
const Query = {
    characters: (root, args, context) => {
        return data
    },

    character: (root, { id }, context) => {
        // return hero.load(id)
        return findById(id)
    }
}

// Character
const Character = {

    comics: async ({ marvelId }, params, context) => {
        let { data } = await marvel.characters.comics(marvelId, 5)
        return data
    },

    friends: ({ friends = [] }, params, context) => {

        // dataloader
        // let ids = map(friends, f => f.id)
        // return hero.loadMany(ids)

        // attempt 1
        // return map(friends, f => findById(f.id))

        console.log('fetching friends')
        return filter(data, h => map(friends, f => f.id).includes(h.id))
    }
}


// const Comic = {
//     totallyAwesomeDescription: (comic, params, contxt) => {
//         return comic.descr
//     }
// }


id = 2, friend = 17, 19, 20

// Change the data
const Mutation = {
    addFriend(root, { input }, context) {

        let me = findById(input.id)
        let friend = findById(input.friendId)

        let friendIds = map(me.friends, f => f.id)

        if (!friendIds.includes(input.friendId)) {
            me.friends.push({ id: input.friendId })

            pubsub.publish('friendAdded', { friendAdded: { id: me.id, friend } })
        }

        return hero.load(me.id)
    }
}

const Subscription = {
    friendAdded: {
        resolve: ({ friendAdded }) => {
            return friendAdded.friend
        },
        subscribe: withFilter(() => pubsub.asyncIterator('friendAdded'), (payload, args) => {
            return payload.friendAdded.id === args.id
        })
    }
}


// The resolvers - must match the schema type defs
const resolvers = {
    Query,
    Character,
    Mutation,
    Subscription
};

module.exports = resolvers