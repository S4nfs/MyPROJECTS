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
        deletePost: async (parent, args, context, info) => {
            const { id } = args;
            await Post.findByIdAndDelete(id);
            return "Deleted";
        },
        updatePost: async (parent, args, context, info) => {
            const { id } = args;
            const { title, description } = args.post;
            // to prevent null passed as a value if user doesn't want to update all values
            const updates = {};
            if (title !== undefined) {
                updates.title = title;
            }
            if (description !== undefined) {
                updates.description = description;
            }
            const post = await Post.findByIdAndUpdate(id, updates, { new: true });
            return post;
        },
    }
}

module.exports = resolvers;