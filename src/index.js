import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./style/Profile.css";
import "./style/Menu.css";
import "./style/MoreMenu.css";
import "./style/Home.css";
import "./style/CreatePost.css";
import "./style/Settings.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider,
} from "@apollo/client";
import { Provider } from "react-redux";
import store from "./store/reducer";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3001",
    headers: {
      "content-type": "application/json",
    },
  }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </BrowserRouter>
);
