import { createSelector } from 'reselect';

export default createSelector(
    state => state.recipe.recipeList,
    recipeList => recipeList
)
