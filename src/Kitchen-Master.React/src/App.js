import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/account/Login';

class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default hot(module)(App);
