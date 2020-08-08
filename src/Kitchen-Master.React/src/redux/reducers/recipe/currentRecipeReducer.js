import { stateReducer } from 'truefit-react-utils';
import { updateStateField } from '../../../utils/reduxUtils';
import { object } from '@hapi/joi';

export const SET_CURRENT_RECIPE_FIELD = 'SET_CURRENT_RECIPE_FIELD';
export const ADD_RECIPE_INGREDIENT = 'ADD_RECIPE_INGREDIENT';
export const REMOVE_RECIPE_INGREDIENT = 'REMOVE_RECIPE_INGREDIENT';

const initialState = {
    name: '',
    coverImageId: null,
    createdTime: null,
    difficulty: 2,
    spicy: 0,
    recipeIngredients: [],
    Directions: []
};

export default stateReducer(initialState, {
    [SET_CURRENT_RECIPE_FIELD]: (state, payload) => updateStateField(state, payload.path, payload.value),
    [ADD_RECIPE_INGREDIENT]: (state, payload) => {
        //const recipeIngredients = [...state.recipeIngredients, payload];
        state.recipeIngredients.push(payload);
        return { ...state };
    },
    [REMOVE_RECIPE_INGREDIENT]: (state, payload) => {
        state.recipeIngredients.splice(payload, 1);
        return { ...state };
    }
});
