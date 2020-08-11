import { combineReducers } from 'redux';
import newRecipeReducer from './newRecipeReducer';
import currentRecipeReducer from './currentRecipeReducer';

const recipeReducer = combineReducers({
    newRecipe: newRecipeReducer,
    currentRecipe: currentRecipeReducer
});

export default recipeReducer;