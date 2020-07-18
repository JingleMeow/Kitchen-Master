import React, { Component } from 'react';
import withNavbar from './navbar/withNavbar';
import styles from './homePage.module.scss';

class HomePage extends Component {
  render() {
    return (
      <div className={styles.homePage}>

      </div >
    );
  }
}

export default withNavbar(HomePage);
