import { stateReducer } from 'truefit-react-utils';

export const SET_CURRENT_RECIPE = 'SET_CURRENT_RECIPE';

const initialState = null;

export default stateReducer(initialState, {
    [SET_CURRENT_RECIPE]: (state, payload) => payload,
})