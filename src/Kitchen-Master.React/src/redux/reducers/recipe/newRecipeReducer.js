import { createReducer } from '@reduxjs/toolkit';
import { updateStateField } from '../../../utils/reduxUtils';

export const SET_RECIPE_FIELD = 'SET_RECIPE_FIELD';
export const ADD_RECIPE_INGREDIENT = 'ADD_RECIPE_INGREDIENT';
export const REMOVE_RECIPE_INGREDIENT = 'REMOVE_RECIPE_INGREDIENT';
export const ADD_RECIPE_DIRECTION = 'ADD_RECIPE_DIRECTION';
export const REMOVE_RECIPE_DIRECTION = 'REMOVE_RECIPE_DIRECTION';

const initialState = {
    name: '',
    coverImageId: null,
    createdTime: null,
    difficulty: 2,
    spicy: 0,
    recipeIngredients: [],
    directions: ['']
};

export default createReducer(initialState, {
    [SET_RECIPE_FIELD]: (state, { payload }) => {
        updateStateField(state, payload.path, payload.value)
    },
    [ADD_RECIPE_INGREDIENT]: (state, { payload }) => {
        state.recipeIngredients.push(payload);
    },
    [REMOVE_RECIPE_INGREDIENT]: (state, { payload }) => {
        state.recipeIngredients.splice(payload, 1);
    },
    [ADD_RECIPE_DIRECTION]: (state) => {
        state.directions.push('');
    },
    [REMOVE_RECIPE_DIRECTION]: (state, { payload }) => {
        state.directions.splice(payload, 1);
    }
});
