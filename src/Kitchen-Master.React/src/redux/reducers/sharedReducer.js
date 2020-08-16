import { createReducer } from '@reduxjs/toolkit';
import { SET_LOADER, SET_CURRENT_USER, SET_DEFINITIONS } from '../actions/shared/';

const initialState = {
    currentUser: null,
    isLoading: false,
    definitions: null
}

export default createReducer(initialState, {
    [SET_LOADER]: (state, { payload }) => {
        state.isLoading = payload;
    },

    [SET_CURRENT_USER]: (state, { payload }) => {
        state.currentUser = payload;
    },

    [SET_DEFINITIONS]: (state, { payload }) => {
        state.definitions = payload;
    }
})