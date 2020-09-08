import apiCallbackAction from '../../apiCallbackAction';
import setCurrentRecipeAction from './setCurrentRecipeAction';
import loadLikedRecipeIds from '../../userData/loadLikedRecipeIds';

export default function loadCurrentRecipeAction(recipeId) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch(loadLikedRecipeIds());
            dispatch(apiCallbackAction.get(`recipe/${recipeId}`, true))
                .then(response => {
                    dispatch(setCurrentRecipeAction(response.data));
                    resolve(response);
                })
                .catch(error => reject(error));
        })
    }
}
