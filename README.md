# Mockery
## About
Mockery is a simple and straight-forward server that mocks responses from an API. Be it REST or GraphQL, if it can be represented in JSON format, it can be mocked.

## Requirements
Practically none, newest Node is probably a good idea (I am using 8.8.1 here), but I guess there's nothing so complex that older versions can't handle.

## Installation and usage
First, install the dependencies:

```
yarn
# npm i // or using npm
```

Then just run `index.js` with `node`:

```
node index.js
```

There you have it. Mockery is up and running at `http://localhost:9000`. 

### Adding own mocks
Each mock is kept in `mocks` directory. There you can have another directory that will keep user-defined mocks. Let's say, you work with GraphQL and need to mock a response received from a query. Just create `graphql` directory inside `mocks` and a file, for example `query.json` inside. Fill the file and point your application to `http://localhost:9000/graphql/query.json`. 

You can always access list of all the available mocks in given directory by entering it — `http://localhost:9000/api` will show you all the mocks you have there. From there you can copy the URL and use it wherever you need.