import { combineReducers } from 'redux';
import newRecipeReducer from './newRecipeReducer';

const recipeReducer = combineReducers({
    newRecipe: newRecipeReducer
});

export default recipeReducer;