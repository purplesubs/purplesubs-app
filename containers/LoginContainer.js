import {connect} from 'react-redux'
import * as LoginActions from '../actions/LoginActions'
import LoginScreen from '../screens/LoginScreen'

function mapStateToProps(state) {
    return {
        // deviceToken: state.user.profile.deviceToken,
        // email: state.user.login.email,
        // showPassword: state.user.login.showPassword,
        // hasInvalidEmailOrPassword: state.user.login.hasInvalidEmailOrPassword,
        // error: state.user.login.error,
        // countrySelector: state.countrySelector.countrySelected,
        // showRegister: state.countrySelector.countrySelected === COUNTRIES.MX.id
    }
}
function mapDispatchToProps(dispatch) {

    return {
        onPressLoginDispatch: (email, password) => {
            console.log("............>>>>>>>>HERE: onPressLoginDispatch<<<<<<<", navigator)

            // dispatch(LoginActions.LOGIN_ACTION.action( email, password));
            // dispatch(LoginActions.GO_TO_ROOT_ACTION.action());
        },
        // onPressForgotPassword: () => {
        //     dispatch(LoginActions.GO_TO_FORGOT_PASSWORD_ACTION.action());
        // },
        // onPressRegister: country => () => {
        //     dispatch(UserNavigationActions.GO_TO_SIGN_UP_PERSONAL_DATA_USER_ACTION.action(country));
        // },
        // onChangeEmail: () => {
        //     dispatch(LoginActions.ON_CHANGE_EMAIL_ACTION.action());
        // },
        // clearError: () => {
        //     dispatch(LoginActions.CLEAR_ERROR_ACTION.action());
        // },
        // onChangePassword: () => {
        //     dispatch(LoginActions.ON_CHANGE_PASSWORD_ACTION.action());
        // },
        // goBack: () => {
        //     Actions.CountrySelectorContainer();
        // },
        // setKeyboardHeight: (height) => {
        //     dispatch({
        //         type: UIActions.SET_KEYBOARD_HEIGHT,
        //         height
        //     });
        // },
    }
}

function mergeProps(stateProps, dispatchProps) {
    return {
        ...stateProps,
        ...dispatchProps,
        onPressLogin: dispatchProps.onPressLoginDispatch,
        // onPressRegister: dispatchProps.onPressRegister(stateProps.countrySelector)
    }
}

export default connect(mapStateToProps, mapDispatchToProps,mergeProps)(LoginScreen)

