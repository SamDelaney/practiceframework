import React from "react";
import ReactDOM from "react-dom";
import EntryForm from "../EntryFormContainer";
import { store } from "../..";
import { Provider } from "react-redux";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <EntryForm />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
