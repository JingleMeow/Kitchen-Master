import { combineReducers } from 'redux';
import sharedReducer from './sharedReducer';

const rootReducer = combineReducers({
    shared: sharedReducer
});

export default rootReducer;
