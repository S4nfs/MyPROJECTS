/*
*
*
What problem does GraphQL solve?
GraphQL solves both over-fetching and under-fetching issues by allowing the client to request only the needed data; 
*
*
*/
const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const axios = require('axios');

const app = express();

/* graphql Scalar types built-in
ID
String
Int
Float
Boolean
List - []
Userdefined like below User
*/
let message = "this is a message";
const schema = buildSchema(`

type User{
    name: String
    age: Int
    profession: String
}

type Post {
    userId: Int
    id: Int
    title: String
    body: String
}

type Query {
    hello: String
    welcomeMessage(name: String, dayofweek: String!): String
    getUser: User
    getUsers: [User]
    getPostsFromExternalAPI: [Post]
    getUpdatedMessage: String
}

type Mutation{
setMessage(newmessage: String): String
createUser(name: String!, age: Int!, profession: String!): User
}


`)

const root = {                      //rsolvers
    hello: () => {
        return "hello World";
    },
    welcomeMessage: (args) => {     //passing arguments
        return `Hey! ${args.name} Today is ${args.dayofweek} `;
    },
    getUser: () => {
        const user = {
            name: "Sagar",
            age: 23,
            profession: "software engineer"
        }
        return user;
    },
    getUsers: () => {
        const users = [
            {
                name: "Sagar",
                age: 23,
                profession: "Full-Stack Developer"
            },
            {
                name: "Prateek",
                age: 23,
                profession: "Co-founder"
            }
        ];
        return users;
    },
    getPostsFromExternalAPI: async () => {  //GET Query
        const result = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        return result.data
    },
    setMessage: ({ newmessage }) => {       //Post Query by updating message
        message = newmessage
        return message
    },
    getUpdatedMessage: () => message,      //get Updated Message

    createUser: ({ name, age, profession }) => {//create new user inside DB, or external API
        return { name, age, profession }

    },
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,                 //playground
    schema: schema,
    rootValue: root,
}))

app.listen(3000, () => {
    console.log(`Sever is listening at port 3000`);
})