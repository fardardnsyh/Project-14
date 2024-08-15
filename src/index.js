import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import axios from "axios";
import { API_PROD, API_TEST } from "./store/constants";
const root = ReactDOM.createRoot(document.getElementById("root"));

axios.defaults.baseURL = API_PROD;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
