import { ADD_RECIPE_INGREDIENT } from '../../../reducers/recipe/newRecipeReducer';

export default function addRecipeIngredientAction(recipeIngredient) {
    return {
        type: ADD_RECIPE_INGREDIENT,
        payload: recipeIngredient
    };
}
