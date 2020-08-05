import { combineReducers } from 'redux';
import currentRecipeReducer from './currentRecipeReducer';

const recipeReducer = combineReducers({
    currentRecipe: currentRecipeReducer
});

export default recipeReducer;