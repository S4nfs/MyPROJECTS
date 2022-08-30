const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
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
const schema = buildSchema(`

type User{
    name: String
    age: Int
    profession: String
}

type Query {
    hello: String
    welcomeMessage(name: String, dayofweek: String!): String
    getUser: User
    getUsers: [User]
}
`)

const root = {                      //functions
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
    }
}

app.use('/graphql', graphqlHTTP({
    graphiql: true,                 //playground
    schema: schema,
    rootValue: root,
}))

app.listen(3000, () => {
    console.log(`Sever is listening at port 3000`);
})