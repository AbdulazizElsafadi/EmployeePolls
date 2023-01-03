import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middlewares";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";

export const store = createStore(reducer, middleware);

// use the username and password that exists in the utils/_DATA.js
// to login to the platform

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
