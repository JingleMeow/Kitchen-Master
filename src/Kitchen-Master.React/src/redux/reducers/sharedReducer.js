import { stateReducer } from 'truefit-react-utils';
import { SET_LOADER, SET_CURRENT_USER, SET_DEFINITIONS } from '../actions/shared/';

const initialState = {
    currentUser: null,
    isLoading: false
}

export default stateReducer(initialState, {
    [SET_LOADER]: (state, payload) => {
        return Object.assign({}, state, { isLoading: payload });
    },

    [SET_CURRENT_USER]: (state, payload) => {
        return Object.assign({}, state, { currentUser: payload });
    },

    [SET_DEFINITIONS]: (state, payload) => {
        return Object.assign({}, state, { definitions: payload });
    }
})