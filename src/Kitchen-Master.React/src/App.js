import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserContext from './contexts/userContext';
import { getCurrentUser } from './utils/auth';
import { LoginPage, RegisterPage, ConfirmationEmailSentPage } from './components/account';

class App extends Component {
  render() {
    return (
      <UserContext.Provider value={getCurrentUser()}>
        <BrowserRouter>
          <Switch>
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/registerSucceeded" exact component={ConfirmationEmailSentPage} />
          </Switch>
        </BrowserRouter>
      </UserContext.Provider>
    );
  }
}

export default hot(App);
