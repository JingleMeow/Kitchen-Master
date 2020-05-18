import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <h1> Hello, World!</h1>
          <Switch>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default hot(module)(App);
