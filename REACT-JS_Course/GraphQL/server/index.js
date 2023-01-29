const express = require('express')
require('dotenv').config();
require('colors')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema');
const port = process.env.port || 5000
const connectDB = require('./config/db')

const app = express()
//connect to database
connectDB()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development'
}))
app.listen(port, console.log(`Server is listening on port: ${port}`));