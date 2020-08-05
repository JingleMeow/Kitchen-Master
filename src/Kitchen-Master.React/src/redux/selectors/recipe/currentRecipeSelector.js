import { createSelector } from 'reselect';

export default createSelector(
    state => state.recipe.currentRecipe,
    currentRecipe => currentRecipe
)
