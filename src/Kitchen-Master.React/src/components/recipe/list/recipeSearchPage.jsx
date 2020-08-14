import React, { Component } from 'react';
import styles from './recipeSearchPage.module.scss';

class RecipeSearchPage extends Component {
    state = {}
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.leftRail}></div>
                <div className={styles.list}>
                </div>
            </div>
        );
    }
}

export default RecipeSearchPage;