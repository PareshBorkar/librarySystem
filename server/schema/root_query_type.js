const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;

const models = require('../models');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        users: {
            type: GraphQLString,
            resolve() {
                models.users.findOne().then(user => {
                    return user;
                    console.log("======", user.get('idusers'));
                }).catch(err => {
                    console.log("error ", err);
                });
                // return Song.find({});
            }
        }
        // ,
        // song: {
        //     type: SongType,
        //     args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        //     resolve(parentValue, { id }) {
        //         return Song.findById(id);
        //     }
        // },
        // lyric: {
        //     type: LyricType,
        //     args: { id: { type: new GraphQLNonNull(GraphQLID) } },
        //     resolve(parnetValue, { id }) {
        //         return Lyric.findById(id);
        //     }
        // }
    })
});

module.exports = RootQuery;