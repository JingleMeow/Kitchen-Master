import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';
import { getCurrentUser } from './utils/auth';
import { LoginPage, LoggedOutPage, RegisterPage, ConfirmationEmailSentPage, AccountConfirmationPage, AccountConfirmedPage } from './components/account';
import { RecipeEditPage } from './components/recipe'
import { HomePage, FofPage } from './components';
import { loaderSelector, currentUserSelector } from './redux/selectors/shared';
import { setCurrentUserAction } from './redux/actions/shared/setCurrentUserAction';

class App extends Component {
  componentDidMount() {
    const currentUser = getCurrentUser();
    if (!this.props.currentUser && currentUser) {
      this.props.setCurrentUser(currentUser);
    }
  }

  render() {
    const { store, isLoading } = this.props;
    return (
      <Provider store={store}>
        <Dimmer active={isLoading}>
          <Loader size="huge">Loading...</Loader>
        </Dimmer>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/loggedOut" exact component={LoggedOutPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/registerSucceeded" exact component={ConfirmationEmailSentPage} />
            <Route path="/confirmAccount/:token" exact component={AccountConfirmationPage} />
            <Route path="/accountConfirmed" exact component={AccountConfirmedPage} />
            <Route path="/recipe/new" exact component={RecipeEditPage} />
            <Route path='/' component={FofPage} />
          </Switch>
        </BrowserRouter>
      </Provider >
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    currentUser: currentUserSelector(state),
    isLoading: loaderSelector(state)
  };
}

const mapDispachToProps = {
  setCurrentUser: setCurrentUserAction
}

export default hot(connect(mapStateToProps, mapDispachToProps)(App));
