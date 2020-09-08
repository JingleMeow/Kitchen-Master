import { createReducer } from '@reduxjs/toolkit';
import { INCREASE_LIKE_OF_RECIPE, DECREASE_LIKE_OF_RECIPE } from '../../actions/recipe/likeRecipeAction';

export const SET_CURRENT_RECIPE = 'SET_CURRENT_RECIPE';

const initialState = null;

export default createReducer(initialState, {
    [SET_CURRENT_RECIPE]: (state, { payload }) => payload,
    [INCREASE_LIKE_OF_RECIPE]: (state, { payload }) => {
        if (!state)
            return state;
        if (payload === state.id)
            state.likes++;
    },
    [DECREASE_LIKE_OF_RECIPE]: (state, { payload }) => {
        if (!state)
            return state;
        if (payload === state.id)
            state.likes--;
    },
})
