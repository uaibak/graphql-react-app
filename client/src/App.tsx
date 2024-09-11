import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const GET_MESSAGE = gql`
  query GetMessage {
    message
  }
`;

interface MessageData {
  message: string;
}

function DisplayMessage() {
  const { loading, error, data } = useQuery<{ message: string }>(GET_MESSAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <p>{data?.message}</p>;
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>GraphQL and React with TypeScript</h1>
        <DisplayMessage />
      </div>
    </ApolloProvider>
  );
}

export default App;
