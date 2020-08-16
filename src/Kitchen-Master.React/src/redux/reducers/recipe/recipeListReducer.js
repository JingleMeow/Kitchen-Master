import { createReducer } from '@reduxjs/toolkit';

export const SET_RECIPE_LIST = 'SET_RECIPE_LIST';

const initialState = [];

export default createReducer(initialState, {
    [SET_RECIPE_LIST]: (state, { payload }) => payload,
})
