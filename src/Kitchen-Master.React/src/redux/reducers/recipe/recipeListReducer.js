import { createReducer } from '@reduxjs/toolkit';

export const SET_RECIPE_LIST = 'SET_RECIPE_LIST';
export const INCREASE_LIKE_OF_RECIPE = 'INCREASE_LIKE_OF_RECIPE';
export const DECREASE_LIKE_OF_RECIPE = 'DECREASE_LIKE_OF_RECIPE';

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
