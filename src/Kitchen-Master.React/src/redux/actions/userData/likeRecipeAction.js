import apiCallbackAction from '../apiCallbackAction';
import { addLikeRecipe, removeLikedRecipe } from '../../reducers/userDataSlice';

export const INCREASE_LIKE_OF_RECIPE = 'INCREASE_LIKE_OF_RECIPE';
export const DECREASE_LIKE_OF_RECIPE = 'DECREASE_LIKE_OF_RECIPE';

export function likeRecipe(recipeId, isInList) {
    return dispatch => {
        dispatch(apiCallbackAction.post('recipe/likeRecipe', { recipeId }, true))
            .then(() => {
                dispatch(addLikeRecipe(recipeId));
                dispatch(increaseLike(recipeId));
            });
    };
}

export function cancelLikeRecipe(recipeId, isInList) {
    return dispatch => {
        dispatch(apiCallbackAction.post('recipe/cancelLikeRecipe', { recipeId }, true))
            .then(() => {
                dispatch(removeLikedRecipe(recipeId));
                dispatch(decreaseLike(recipeId));
            });
    };
}

export function increaseLike(recipeId) {
    return {
        type: INCREASE_LIKE_OF_RECIPE,
        payload: recipeId
    }
}

export function decreaseLike(recipeId) {
    return {
        type: DECREASE_LIKE_OF_RECIPE,
        payload: recipeId
    }
}
