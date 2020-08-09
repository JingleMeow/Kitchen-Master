import { REMOVE_RECIPE_DIRECTION } from '../../../reducers/recipe/newRecipeReducer';

export default function removeRecipeIngredientAction(index) {
    return {
        type: REMOVE_RECIPE_DIRECTION,
        payload: index
    };
}