import { stateReducer } from 'truefit-react-utils';

export const SET_RECIPE_LIST = 'SET_RECIPE_LIST';

const initialState = [];

export default stateReducer(initialState, {
    [SET_RECIPE_LIST]: (state, payload) => payload,
})
