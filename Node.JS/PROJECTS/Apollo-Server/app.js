// npm install @apollo/server express graphql cors body-parser
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { ApolloServerPluginDrainHttpServer } = require('@apollo/server/plugin/drainHttpServer');
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const { typeDefs, resolvers, schema } = require('./schema');
const { default: axios } = require('axios');

// Required logic for integrating with Express
const app = express();
app.use(express.json(), cors(), express.urlencoded({ extended: true })) // allow posting nested objects

const apolloServer = new ApolloServer({
    typeDefs: `
    type Todo{
        id: ID!,
        title: String!,
        completed: Boolean!
        userId: ID!
        user: User!
    }

    type User{
        id: ID!,
        name: String!,
        email: String!
        username: String!
    }

    type Query{
        fetchAllTodos: [Todo]
        getAllUsers: [User]
        getUserById(id: ID!): User
    }
    `,
    resolvers: {
        Todo: {
            user: async (todo) => (await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.id}`)).data
        },
        Query: {
            fetchAllTodos: async () => {
                return (await axios.get('https://jsonplaceholder.typicode.com/todos')).data
            },
            getAllUsers: async () => {
                return (await axios.get('https://jsonplaceholder.typicode.com/users')).data
            },
            getUserById: async (parent, { id }) => {
                return (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
            }
        },
    },
    // graphiql: process.env.VITE_NODE_ENV === 'development'
    introspection: true,

})

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.

const start = async () => {
    app.listen(4000, () => console.log(`Listening on port: 4000`))



    await apolloServer.start()
    app.use('/graphql', expressMiddleware(apolloServer))

}
start()