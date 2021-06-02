import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//1- Mount() to start up our App
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//2- if we are in development and in isolation call Mount() immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot);
  }
}

//3- export Mount() to run it in the Container
export { mount };
