import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Details from "./Details";

const App = () => {
    return (
        <Switch>
            <Route exact path="/recipe-app" component={Home} />
            <Route path="/details/:name" component={Details} />
        </Switch>
    );
};

export default App;
