import apiCallbackAction from '../apiCallbackAction';

export default function registerAction(model) {
    return dispatch => dispatch(apiCallbackAction.post('account/register', model, true));
}
