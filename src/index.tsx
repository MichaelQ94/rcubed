import * as ReactDOM from "react-dom";
import * as React from "react";
import App from "components/app";

window.addEventListener("DOMContentLoaded", () => {
  const greeting = "Hello RCubed";
  ReactDOM.render(<App message={greeting} />, document.getElementById("root"));
});
