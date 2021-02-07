import authReducer from './authReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    auth: authReducer,
    user: userReducer
});

export default allReducers;