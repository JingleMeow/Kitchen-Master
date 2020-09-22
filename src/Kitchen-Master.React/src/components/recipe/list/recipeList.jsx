import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

RecipeList.propTypes = {
    recipes: PropTypes.array.isRequired
}

export default RecipeList;
