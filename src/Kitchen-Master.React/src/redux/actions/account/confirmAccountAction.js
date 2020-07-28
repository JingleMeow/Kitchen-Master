import apiCallbackAction from '../apiCallbackAction';

export default function confirmAccountAction(model) {
    return dispatch => dispatch(apiCallbackAction.post('account/confirmAccount', model, true));
}