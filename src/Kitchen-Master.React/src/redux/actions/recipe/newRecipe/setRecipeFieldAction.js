import { SET_RECIPE_FIELD } from '../../../reducers/recipe/newRecipeReducer';

export default function setRecipeFieldAction(path, value) {
    return {
        type: SET_RECIPE_FIELD,
        payload: {
            path,
            value
        }
    };
}
