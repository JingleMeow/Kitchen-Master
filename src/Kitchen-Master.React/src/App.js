import React, { Component } from "react";
import { hot } from 'react-hot-loader';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Test from "./component/test";
//import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <h1> Hello, World!</h1>
                    <Switch>
                        <Route path="/test" exact component={Test} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default hot(module)(App);
