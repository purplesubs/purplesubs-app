import initialState from './state';
import * as LoginActions from '../actions/LoginActions'

const login = (state = initialState.login, action) => {
    switch (action.type) {

        case LoginActions.LOGIN_ACTION.name:
            return {
                ...state,
                hasInvalidEmailOrPassword: false,
                error: null
            };
        default:
            return state
    }

};

export default login