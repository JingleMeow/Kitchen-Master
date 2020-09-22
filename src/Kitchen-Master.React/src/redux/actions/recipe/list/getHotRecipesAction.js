import apiCallbackAction from '../../apiCallbackAction';
import { setRecipeListAction } from '.';

export default function getHotRecipesAction() {
    return dispatch => new Promise((resolve, reject) => {
        dispatch(apiCallbackAction.get('recipe/hot', true))
            .then(response => {
                dispatch(setRecipeListAction(response.data));
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    })
}
