import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from "node-fetch";

const cache = new InMemoryCache({});

const link = new HttpLink({
  uri: process.env.API || "https://localhost:5000",
  fetch: fetch
});

export const apolloClient = new ApolloClient({
  cache: cache,
  link: link,

  name: "annosuite-launch-page",
  version: 0.1,
  ssrMode: true,
  defaultOptions: {
    query: {
      fetchPolicy: "cache-first"
    },
    watchQuery: {
      fetchPolicy: "cache-and-network"
    }
  }
});
