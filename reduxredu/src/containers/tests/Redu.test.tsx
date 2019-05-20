import React from "react";
import ReactDOM from "react-dom";
import Redu from "../Redu";
import { store } from "../..";
import { Provider } from "react-redux";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Redu />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
