import apiCallbackAction from '../apiCallbackAction';
import { setDefinitionsAction } from './setDefinitionsAction';

export default function loadDefinitionsAction() {
    return (dispatch, getState) => {
        const state = getState();
        if (state.shared.definitions)
            return;

        dispatch(apiCallbackAction.get('common/definitions', false))
            .then(
                response => dispatch(setDefinitionsAction(response.data))
            );
    }
}