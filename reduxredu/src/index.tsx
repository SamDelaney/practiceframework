import React from "react";
import ReactDOM from "react-dom";
import { createStore, Action, Store } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { rootReducer } from "./reducers/index";
import { StoreState } from "./types/index";
import { WordAction, AddVern, ActionWithPayload } from "./actions";
import Redu from "./containers/Redu";

export const store: Store<StoreState> = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
