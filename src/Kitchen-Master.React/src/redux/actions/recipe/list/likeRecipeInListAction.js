import { INCREASE_LIKE_OF_RECIPE, DECREASE_LIKE_OF_RECIPE } from '../../../reducers/recipe/recipeListReducer'

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
