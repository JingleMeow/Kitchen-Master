import { stateReducer } from 'truefit-react-utils';
import { SET_LOADER } from '../actions/setLoaderAction';

const initialState = {
    isLoading: false
}

export default stateReducer(initialState, {
    [SET_LOADER]: (state, payload) => {
        return Object.assign({}, state, { isLoading: payload });
    }
})