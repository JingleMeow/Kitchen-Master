import { kmApi } from '../../../services/webapi';
import { setAccessToken, getCurrentUser } from '../../../utils/auth';
import { currentUserSelector } from '../../selectors/shared';
import { setCurrentUserAction } from '../shared';

export default function refreshTokenAction() {
    return (dispatch, getState) => {
        const currentUser = currentUserSelector(getState());
        if (needRefresh(currentUser)) {
            console.log('refresh');
            kmApi.get('account/refresh_token')
                .then(
                    response => {
                        setAccessToken(response.data);
                        dispatch(setCurrentUserAction(getCurrentUser()));
                    });
        }
    }
}

function needRefresh(currentUser) {
    if (!currentUser)
        return false;

    const { iat, exp } = currentUser;
    if (Date.now() / 1000 > iat + (exp - iat) / 2)
        return true;

    return false;
}