import apiCallbackAction from '../apiCallbackAction';
import { increaseLike, decreaseLike } from './list';
import { addLikeRecipe, removeLikedRecipe } from '../../reducers/userDataSlice';

export function likeRecipe(recipeId, isInList) {
    return dispatch => {
        dispatch(apiCallbackAction.post('recipe/likeRecipe', { recipeId }, true))
            .then(() => {
                dispatch(addLikeRecipe(recipeId));
                if (isInList)
                    dispatch(increaseLike(recipeId));
            });
    };
}

export function cancelLikeRecipe(recipeId, isInList) {
    return dispatch => {
        dispatch(apiCallbackAction.post('recipe/cancelLikeRecipe', { recipeId }, true))
            .then(() => {
                dispatch(removeLikedRecipe(recipeId));
                if (isInList)
                    dispatch(decreaseLike(recipeId));
            });
    };
}