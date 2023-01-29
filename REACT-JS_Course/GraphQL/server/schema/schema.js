// const { projects, clients } = require('../sampleData');
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');
const Project = require('../models/Project');
const Client = require('../models/Client');

//Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
})


//Project Type
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString },
        client: {
            type: ClientType,
            resolve(parent, args) {
                return Client.findById(parent.clientId)   //now (client) here is the child of parent (project)
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        //get all clients
        clients: {
            type: GraphQLList(ClientType),
            resolve(parent, args) {
                return Client.find()
            },
        },
        //get client by id
        client: {
            type: ClientType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Client.findById(args.id)
            }
        },
        //get all projects
        projects: {
            type: GraphQLList(ProjectType),
            resolve(parent, args) {
                return Project.find()

            },
        },
        //get project by id
        project: {
            type: ProjectType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Project.findById(args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})