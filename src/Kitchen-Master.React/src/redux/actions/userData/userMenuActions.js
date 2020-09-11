import { addMenuRecipe, removeMenuRecipe, clearMenu } from '../../reducers/userDataSlice';
import apiCallbackAction from '../apiCallbackAction';

export function addRecipeToMenu(recipeId) {
    return dispatch => {
        dispatch(apiCallbackAction.post('menu', { recipeId }, true))
            .then(response => {
                dispatch(addMenuRecipe(response.data));
            })
    }
}

export function removeRecipeFromMenu(recipeId) {
    return dispatch => {
        dispatch(apiCallbackAction.del(`menu/${recipeId}`, null, true))
            .then(response => {
                dispatch(removeMenuRecipe(recipeId));
            })
    }

}

export function submitUserMenu(menuName) {
    return dispatch => new Promise((resolve, reject) => {
        dispatch(apiCallbackAction.post('menu/submit', { menuName }, true))
            .then(response => {
                dispatch(clearMenu());
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            })
    });
}