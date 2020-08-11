import { SET_CURRENT_RECIPE } from '../../../reducers/recipe/currentRecipeReducer';

export default function setCurrentRecipeAction(recipe) {
    return {
        type: SET_CURRENT_RECIPE,
        payload: recipe
    }
}