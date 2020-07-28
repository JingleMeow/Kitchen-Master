import apiCallbackAction from '../apiCallbackAction';
import { setAccessToken } from '../../../utils/auth';

export default function loginAction(model) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch(apiCallbackAction.post('account/login', model, true))
                .then(
                    response => {
                        setAccessToken(response.data);
                        resolve(response);
                    }
                )
                .catch(
                    error => {
                        reject(error);
                    }
                )
        })
    }
}
