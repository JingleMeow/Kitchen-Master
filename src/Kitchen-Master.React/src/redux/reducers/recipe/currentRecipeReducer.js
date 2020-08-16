import { createReducer } from '@reduxjs/toolkit';

export const SET_CURRENT_RECIPE = 'SET_CURRENT_RECIPE';

const initialState = null;

export default createReducer(initialState, {
    [SET_CURRENT_RECIPE]: (state, { payload }) => payload
})
