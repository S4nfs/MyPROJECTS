const { gql } = require('apollo-server-express')

const typeDefs = gql`
type Post{
    id: ID
    title: String
    description: String
}

type Query {
    hello: String,
    getAllPosts:[Post],
    getPostById(id: ID): Post
},

input PostInput{
    title: String, description: String
}
type Mutation {
    createPost(post: PostInput): Post
}

`

module.exports = typeDefs;