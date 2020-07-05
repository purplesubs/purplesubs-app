import {combineReducers} from 'redux';
import login from './login';

const userRootReducer = combineReducers({
    login,
});

export default userRootReducer;
