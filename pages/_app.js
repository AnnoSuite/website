import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import { apolloClient } from "../helpers/apolloClient";
import { GlobalStyle } from "../atoms";
import { useGA } from "../hooks/useGoogleAnalytics";

const MyApp = props => {
  const { Component, pageProps } = props;
  useGA({
    id: "UA-143370864-1",
    options: {
      debug: process.env.NODE_ENV !== "production"
    }
  });
  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle>
        <Component {...pageProps} />{" "}
      </GlobalStyle>
    </ApolloProvider>
  );
};

export default MyApp;
