import { combineReducers } from 'redux';
import newRecipeReducer from './newRecipeReducer';
import currentRecipeReducer from './currentRecipeReducer';
import recipeListReducer from './recipeListReducer';

const recipeReducer = combineReducers({
    newRecipe: newRecipeReducer,
    currentRecipe: currentRecipeReducer,
    recipeList: recipeListReducer
});

export default recipeReducer;