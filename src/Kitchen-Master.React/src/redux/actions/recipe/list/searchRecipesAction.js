import apiCallbackAction from '../../apiCallbackAction';
import setRecipeListAction from './setRecipeListAction';

export default function searchRecipesAction(query) {
    return dispatch => new Promise((resolve, reject) => {
        dispatch(apiCallbackAction.get('recipe/search', query, true))
            .then(response => {
                dispatch(setRecipeListAction(response.data));
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
}
