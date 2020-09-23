import kmApi from '../../../services/webapi/kmApiRequest';
import { setLikedRecipeIds, setLoadingLikedRecipeIds } from '../../reducers/userDataSlice';

export default function loadLikedRecipeIds() {
    return (dispatch, getState) => new Promise((resolve, reject) => {
        const state = getState();
        if (!state.shared.currentUser || state.userData.likedRecipeIds)
            return;

        const interceptor = {
            onRequest: () => dispatch(setLoadingLikedRecipeIds(true)),
            onFullfilled: () => dispatch(setLoadingLikedRecipeIds(false)),
            onError: () => dispatch(setLoadingLikedRecipeIds(false))
        }
        kmApi.get('recipe/likedRecipeIds', { interceptor })
            .then(response => {
                dispatch(setLikedRecipeIds(response.data));
                resolve(response.data);
            })
            .catch(error => reject(error));
    });
}
