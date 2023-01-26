import postsResolvers from "./posts.js";
import usersResolvers from "./users.js";

const resolvers = {
  Query: {
    ...postsResolvers.Query,
  },

  Mutation: {
    ...usersResolvers.Mutation,
    
  },
};

export default resolvers;
