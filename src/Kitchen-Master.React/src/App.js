import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dimmer, Loader } from 'semantic-ui-react';
import { getCurrentUser } from './utils/auth';
import { AuthenticatedRoute } from './components/common'
import { LoginPage, LoggedOutPage, RegisterPage, ConfirmationEmailSentPage, AccountConfirmationPage, AccountConfirmedPage } from './components/account';
import { RecipeEditPage, RecipeViewPage, MyRecipesPage, MyFavoritePage, RecipeSearchPage, HotRecipesPage } from './components/recipe'
import { HomePage, FofPage } from './components';
import { loaderSelector, currentUserSelector } from './redux/selectors/shared';
import { setCurrentUserAction } from './redux/actions/shared/setCurrentUserAction';
import loadUserMenu from './redux/actions/userData/loadUserMenu';
import loadLikedRecipeIds from './redux/actions/userData/loadLikedRecipeIds';
import { MenuPage, HistoryMenuListPage, HistoryMenuViewPage } from './components/menu';

class App extends Component {
  state = {
    readyToLoadContent: false
  }
  componentDidMount() {
    const currentUser = getCurrentUser();
    if (!this.props.currentUser && currentUser) {
      this.props.setCurrentUser(currentUser);
      this.loadUserData();
    } else {
      this.setState({ readyToLoadContent: true });
    }
  }

  render() {
    const { store, isLoading } = this.props;
    if (!this.state.readyToLoadContent)
      return null;
    return (
      <Provider store={store}>
        <Dimmer active={isLoading} page>
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
            <AuthenticatedRoute path="/recipe/new" exact component={RecipeEditPage} />
            <Route path="/recipe/:id" component={RecipeViewPage} />
            <AuthenticatedRoute path='/myRecipes' component={MyRecipesPage} />
            <AuthenticatedRoute path='/myFavorite' component={MyFavoritePage} />
            <Route path='/searchRecipes' component={RecipeSearchPage} />
            <Route path='/hotRecipes' component={HotRecipesPage} />
            <AuthenticatedRoute path='/menu' exact component={MenuPage} />
            <AuthenticatedRoute path='/menu/:id' exact component={HistoryMenuViewPage} />
            <AuthenticatedRoute path='/menuHistory' exact component={HistoryMenuListPage} />
            <Route path='/' component={FofPage} />
          </Switch>
        </BrowserRouter>
      </Provider >
    );
  }

  loadUserData = () => {
    const { loadUserMenu, loadLikedRecipeIds } = this.props;
    const userMenuPromise = loadUserMenu();
    const userLikedRecipesPromise = loadLikedRecipeIds();
    Promise.all([userMenuPromise, userLikedRecipesPromise])
      .then(() => this.setState({ readyToLoadContent: true }));
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
  setCurrentUser: setCurrentUserAction,
  loadUserMenu,
  loadLikedRecipeIds
}

export default hot(connect(mapStateToProps, mapDispachToProps)(App));
