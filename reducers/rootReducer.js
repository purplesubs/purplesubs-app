import {combineReducers} from 'redux'
import userRootReducer from './userRootReducer';

const rootReducer = combineReducers({
    user: userRootReducer,
});

export default rootReducer