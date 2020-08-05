import apiCallbackAction from '../apiCallbackAction';
import { setDefinitionsAction } from './setDefinitionsAction';

export default function loadDefinitionsAction() {
    return (dispatch, getState) =>
        new Promise((resolve, reject) => {
            {
                const state = getState();
                if (state.shared.definitions)
                    return;

                dispatch(apiCallbackAction.get('common/definitions', false))
                    .then(response => {
                        dispatch(setDefinitionsAction(response.data));
                        resolve();
                    })
                    .catch(error => reject(error));
            }
        })
}