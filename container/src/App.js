import React from "react";
import MarketingApp from "./renderApps/MarketingApp";
import { BrowserRouter, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MarketingApp} />
        <Route  path="/home" component={Home}></Route>
        {/* <MarketingApp /> */}
      </Switch>
    </BrowserRouter>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <hr />
    </div>
  );
};
