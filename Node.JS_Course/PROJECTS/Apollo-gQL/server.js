const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

// const typeDefs = gql`
// type Query {
//     hello: String
// }`


// const resolvers = {
//     Query: {
//         hello: () => {
//             return "Hello World";
//         }
//     }
// };

async function startServer() {
    const app = express();
    const apolloServer = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers,
    })
    await apolloServer.start();
    apolloServer.applyMiddleware({  //default path graphql
        app: app,
        path: '/myapi',
    });

    //express middleware
    app.use((req, res) => {
        res.send("Yo");
    })

    await mongoose.connect('mongodb://localhost:27017/post_db', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    console.log('Database Connection Successful');
    app.listen(3000, () => console.log(`Server is running on port 3000`))
}
startServer();