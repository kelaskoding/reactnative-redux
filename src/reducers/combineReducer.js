import {combineReducers} from 'redux';
import countReducer from './countReducer';

const allReducer = combineReducers({
    count: countReducer
});

export default allReducer;

