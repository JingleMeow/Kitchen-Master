import { createReducer } from '@reduxjs/toolkit';
import { INCREASE_LIKE_OF_RECIPE, DECREASE_LIKE_OF_RECIPE } from '../../actions/userData/likeRecipeAction';

export const SET_RECIPE_LIST = 'SET_RECIPE_LIST';

const initialState = [];

export default createReducer(initialState, {
    [SET_RECIPE_LIST]: (state, { payload }) => payload,
    [INCREASE_LIKE_OF_RECIPE]: (state, { payload }) => {
        const recipe = state.find(x => x.id === payload);
        if (recipe)
            recipe.likes++;
    },
    [DECREASE_LIKE_OF_RECIPE]: (state, { payload }) => {
        const recipe = state.find(x => x.id === payload);
        if (recipe)
            recipe.likes--;
    }
})
