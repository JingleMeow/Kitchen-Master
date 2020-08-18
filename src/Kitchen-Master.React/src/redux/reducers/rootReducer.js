import { combineReducers } from 'redux';
import sharedReducer from './sharedReducer';
import recipeReducer from './recipe';
import userDataReducer from './userDataSlice';

const rootReducer = combineReducers({
    shared: sharedReducer,
    recipe: recipeReducer,
    userData: userDataReducer
});

export default rootReducer;
