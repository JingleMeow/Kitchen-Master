import React, { Component, Fragment } from 'react';
import { Container, Rail, Segment } from 'semantic-ui-react';
import RecipeCard from './recipeCard/recipeCard';
import styles from './recipeList.module.scss';

class RecipeList extends Component {
    state = {}
    render() {
        const { recipes } = this.props;
        return (
            <div className={styles.recipes}>
                {
                    recipes.map(recipe => <RecipeCard key={recipe.id} recipeAbstract={recipe} />)
                }
            </div>
        );
    }
}

export default RecipeList;
