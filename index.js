const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    hello: String
    sup: Int
    price: Float
    isAvailable: Boolean
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "HELLO!";
    },
    sup: () => {
      return 234;
    },
    price: () => {
      return 25.26;
    },
    isAvailable: () => {
      return true;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Sever is ready at ${url}`);
});
