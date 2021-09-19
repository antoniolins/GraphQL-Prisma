
// import express from 'express';
// import { graphqlHTTP } from 'express-graphql';

// import schema from './schema';
// import resolvers from './resolvers';

// //const resolvers = require('./graphql/resolvers')

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Up and running with graphql")
// });

// const root = resolvers;

// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );


// app.listen(4000, () => 
//   console.log("Running at 4000"));

  import { ApolloServer } from "apollo-server";
  import { context } from './context';

  import { typeDefs } from './typedefs';
  import { resolvers } from './resolvers';
  
  
  const server = new ApolloServer({ typeDefs, resolvers, context, });
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }: { url: String }) => {
    console.log(`🚀  Server running at ${url}`);
  });
