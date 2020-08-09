import { REMOVE_RECIPE_INGREDIENT } from '../../../reducers/recipe/newRecipeReducer';

export default function removeRecipeIngredientAction(index) {
    return {
        type: REMOVE_RECIPE_INGREDIENT,
        payload: index
    };
}