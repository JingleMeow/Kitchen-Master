export const SET_CURRENT_RECIPE_FIELD = 'SET_CURRENT_RECIPE_FIELD';

export default function setCurrentRecipeFieldAction(path, value) {
    return {
        type: SET_CURRENT_RECIPE_FIELD,
        payload: {
            path,
            value
        }
    };
}