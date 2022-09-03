const Post = require('./models/Post-model');
const resolvers = {
    Query: {
        hello: () => {
            return "Hello World";
        },
        //Read
        getAllPosts: async () => {
            return await Post.find();
        },
        getPostById: async (parent, args, context, info) => {
            const { id } = args;
            return await Post.findById(id);
        },
    },
    //Create
    Mutation: {
        createPost: async (parent, args, context, info) => {
            const { title, description } = args.post;
            const post = new Post({ title, description });
            await post.save();
            return post;
        },
    },
};

module.exports = resolvers;