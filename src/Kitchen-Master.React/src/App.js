import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter, Switch} from 'react-router-dom';
import styles from './test.module.css';
import styles2 from './test2.module.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <h1> Hello, World!</h1>
          <h1 className={styles.red}> Hello, World!</h1>
          <h1 className={styles2.red}> Hello, World!</h1>
          <Switch>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default hot(module)(App);
