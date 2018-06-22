Sign up for a [Marvel API key](https://developer.marvel.com/documentation/getting_started)

Create a `.env` file at the root of the directory and add the following keys with the associated values
```
MARVEL_PUBLIC_KEY=
MARVEL_PRIVATE_KEY=
```

```
docker-compose up
npm install
npm run start
```

You can subscribe to the `friendAdded` topic from the redis-cli to see updates get pushed:
```
docker exec -it graphql-demo_redis_1 redis-cli
```

Then subscribe to the topic `friendAdded` from the cli:
```
SUBSCRIBE friendAdded
```