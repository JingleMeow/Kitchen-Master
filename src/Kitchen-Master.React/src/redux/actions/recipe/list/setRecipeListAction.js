import { SET_RECIPE_LIST } from '../../../reducers/recipe/recipeListReducer';

export default function setRecipeList(recipes) {
    return {
        type: SET_RECIPE_LIST,
        payload: recipes
    };
}
