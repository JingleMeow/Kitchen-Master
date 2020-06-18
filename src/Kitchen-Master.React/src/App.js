import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContext from './contexts/userContext';
import { getCurrentUser } from './utils/auth';
import Login from './components/account/Login';

class App extends Component {
  render() {
    return (
      <UserContext.Provider value={getCurrentUser()}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    );
  }
}

export default hot(App);
