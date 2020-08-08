import { REMOVE_RECIPE_DIRECTION } from '../../reducers/recipe/currentRecipeReducer';

export default function removeRecipeIngredientAction(index) {
    return {
        type: REMOVE_RECIPE_DIRECTION,
        payload: index
    };
}