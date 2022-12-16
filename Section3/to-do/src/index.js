import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Provider } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(todoReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
