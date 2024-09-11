import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema, GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = buildSchema(`
  type Query {
    message: String
  }
`);

const root = {
  message: () => 'Hello from GraphQL!',
};

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, 
}));

app.listen(4000, () => console.log('Server running on http://localhost:4000/graphql'));
