import { createSelector } from 'reselect';

export default createSelector(
    state => state.recipe.newRecipe,
    newRecipe => newRecipe
)
