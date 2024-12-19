// Construct a schema, using GraphQL schema language
const schema = `#graphql
  type Todo {
    id: ID!,
    title: String!,
    completed: Boolean!
  
  }

  type Query {
    getTodos: [Todo]
  }
`

// The root provides a resolver function for each API endpoint
const resolver = {
  // hello: () => {
  //   return 'Hello world!'
  // }
}

module.exports = { schema, resolver }
