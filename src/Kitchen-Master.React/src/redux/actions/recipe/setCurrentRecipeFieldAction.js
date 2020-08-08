import { SET_CURRENT_RECIPE_FIELD } from '../../reducers/recipe/currentRecipeReducer';

export default function setCurrentRecipeFieldAction(path, value) {
    return {
        type: SET_CURRENT_RECIPE_FIELD,
        payload: {
            path,
            value
        }
    };
}