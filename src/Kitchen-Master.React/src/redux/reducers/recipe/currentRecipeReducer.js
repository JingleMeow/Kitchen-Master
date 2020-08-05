import { stateReducer } from 'truefit-react-utils';
import { SET_CURRENT_RECIPE_FIELD } from '../../actions/recipe';
import { updateStateField } from '../../../utils/reduxUtils';

const initialState = {
    name: '',
    coverImageId: null,
    createdTime: null,
    difficulty: 2,
    spicy: 0,
    Directions: []
};

export default stateReducer(initialState, {
    [SET_CURRENT_RECIPE_FIELD]: (state, payload) => updateStateField(state, payload.path, payload.value)
});
