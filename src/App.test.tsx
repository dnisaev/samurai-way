import React from "react";
import ReactDOM from "react-dom";
import { SamuraiApp } from "./App";

test.skip("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SamuraiApp/>, div);
  ReactDOM.unmountComponentAtNode(div)
});
