// import { currentOrg } from '@/utils';
import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { AUTH_TOKEN } from './constants';

// const httpLink = createHttpLink({
//   uri: '//localhost:3000/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token =
//     sessionStorage.getItem(AUTH_TOKEN) || localStorage.getItem(AUTH_TOKEN);
//   return {
//     headers: {
//       ...headers,
//       Authorization: token ? `Bearer ${token}` : '',
//       orgId: currentOrg()?.value,
//     },
//   };
// });

export const client = new ApolloClient({
  uri: import.meta.env.VITE_DEV_SERVER_URL,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
  },
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
