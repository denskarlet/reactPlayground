import { combineReducers } from 'redux';
import countReducer from './reducer';

const reducers = combineReducers({ count: countReducer });

export default reducers;
