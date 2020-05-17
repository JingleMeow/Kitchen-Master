import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import Test from "./component/test";
//import "./App.css";

class App extends Component {
    render() {
        return (
            <div>
                <h1> Hello, World! !</h1>
                <Test></Test>
            </div>
        );
    }
}

export default hot(App);