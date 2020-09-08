import kmApi from '../../../services/webapi/kmApiRequest';
import { setUserMenu } from '../../reducers/userDataSlice';

export default function loadUserMenu() {
    return (dispatch, getState) => new Promise((resolve, reject) => {
        const state = getState();
        if (!state.shared.currentUser) {
            setUserMenu([]);
            resolve();
        }

        kmApi.get('menu')
            .then(response => {
                dispatch(setUserMenu(response.data));
                resolve();
            })
            .catch(error => reject(error));
    })
}
