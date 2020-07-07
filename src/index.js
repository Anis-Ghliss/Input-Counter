import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers";

import App from "./components/App";

const store = createStore(rootReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  rootElement
);
