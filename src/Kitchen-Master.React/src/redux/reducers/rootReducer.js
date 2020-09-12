import { combineReducers } from 'redux';
import sharedReducer from './sharedReducer';
import recipeReducer from './recipe';
import userDataReducer from './userDataSlice';
import menuReducer from './menuReducer';

const rootReducer = combineReducers({
    shared: sharedReducer,
    recipe: recipeReducer,
    userData: userDataReducer,
    menu: menuReducer
});

export default rootReducer;
