import apiCallbackAction from '../../apiCallbackAction';
import setCurrentRecipeAction from './setCurrentRecipeAction';

export default function loadCurrentRecipeAction(recipeId) {
    return dispatch => {
        return new Promise((resolve, reject) => {
            dispatch(apiCallbackAction.get(`recipe/${recipeId}`, null, true))
                .then(response => {
                    dispatch(setCurrentRecipeAction(response.data));
                    resolve(response);
                })
                .catch(error => reject(error));
        })
    }
}
