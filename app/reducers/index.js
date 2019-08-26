import { combineReducers } from 'redux';
import { candyReducer } from './candyReducer';

const rootReducer = combineReducers({
  candy: candyReducer,
});

export default rootReducer;
