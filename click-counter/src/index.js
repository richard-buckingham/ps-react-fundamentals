import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let model = { clicks: 10 };

function render() {
  ReactDOM.render(
    <App
      clicks={model.clicks}
      onClick={() => {
        console.log("in the onClick function");
        model.clicks += 1;
        // render the app after the click event occurs.
        render();
      }}
    />,
    document.getElementById("root")
  );
}

// render the ui when the app starts
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
