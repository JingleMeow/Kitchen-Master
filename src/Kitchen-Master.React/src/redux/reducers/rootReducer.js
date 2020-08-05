import { combineReducers } from 'redux';
import sharedReducer from './sharedReducer';
import recipeReducer from './recipe';

const rootReducer = combineReducers({
    shared: sharedReducer,
    recipe: recipeReducer
});

export default rootReducer;
