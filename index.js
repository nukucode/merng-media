import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers/index.js";
import User from "./models/User.js";
import { MONGODB } from "./config.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose.set("strictQuery", false);

mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MONGODB connected successfully");
    server.listen({ port: 5000 });
  })
  .then((res) => {
    console.log(res);
    console.log(`Server is running at ${5000}`);
  });
