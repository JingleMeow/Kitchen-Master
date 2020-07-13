import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';
import UserContext from './contexts/userContext';
import { getCurrentUser } from './utils/auth';
import { LoginPage, RegisterPage, ConfirmationEmailSentPage, AccountConfirmationPage, AccountConfirmedPage } from './components/account';
import Home from './components/home';
import loaderSelector from './redux/selectors/loaderSelector';

class App extends Component {
  render() {
    const { store, isLoading } = this.props;
    return (
      <Provider store={store}>
        <Dimmer active={isLoading}>
          <Loader size="huge">Loading...</Loader>
        </Dimmer>
        <UserContext.Provider value={getCurrentUser()}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={LoginPage} />
              <Route path="/register" exact component={RegisterPage} />
              <Route path="/registerSucceeded" exact component={ConfirmationEmailSentPage} />
              <Route path="/confirmAccount/:token" exact component={AccountConfirmationPage} />
              <Route path="/accountConfirmed" exact component={AccountConfirmedPage} />
            </Switch>
          </BrowserRouter>
        </UserContext.Provider>
      </Provider >
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    isLoading: loaderSelector(state)
  };
}

export default hot(connect(mapStateToProps)(App));
