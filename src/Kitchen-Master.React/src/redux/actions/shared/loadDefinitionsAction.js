import apiCallbackAction from '../apiCallbackAction';
import { setDefinitionsAction } from './setDefinitionsAction';

export default function loadDefinitionsAction() {
    return (dispatch, getState) =>
        new Promise((resolve, reject) => {
            {
                const state = getState();
                if (state.shared.definitions)
                    resolve();
                console.log(1);
                dispatch(apiCallbackAction.get('common/definitions', false))
                    .then(response => {
                        console.log(response.data);
                        dispatch(setDefinitionsAction(response.data));
                        resolve();
                    })
                    .catch(error => {
                        console.log(2);
                        reject(error);
                    });
            }
        })
}