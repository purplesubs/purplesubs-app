export const LOGIN_ACTION = {
    name: 'LOGIN_ACTION',
    action: (email, password) => ({
        type: LOGIN_ACTION.name, email, password
    })
}

export const GO_TO_ROOT_ACTION = {
    name: 'GO_TO_ROOT_ACTION',
    action: () => ({
        type: GO_TO_ROOT_ACTION.name
    })
}

//
// export const LOGGED_ACTION = {
//     name: 'LOGGED_ACTION',
//     action: (accessToken, refreshToken, username, deviceToken, country) => ({
//         type: LOGGED_ACTION.name, accessToken, refreshToken, username, deviceToken, country
//     })
// }
//
// export const LOGIN_FAILED_ACTION = {
//     name: 'LOGIN_FAILED_ACTION',
//     action: (error, email) => ({
//         type: LOGIN_FAILED_ACTION.name, error, email
//     })
// }
//
// export const GO_TO_FORGOT_PASSWORD_ACTION = {
//     name: 'GO_TO_FORGOT_PASSWORD_ACTION',
//     action: () => ({
//         type: GO_TO_FORGOT_PASSWORD_ACTION.name
//     })
// }
//
// export const GO_TO_COUNTRY_SELECTOR_ACTION = {
//     name: 'GO_TO_COUNTRY_SELECTOR_ACTION',
//     action: () => ({
//         type: GO_TO_COUNTRY_SELECTOR_ACTION.name
//     })
// }
//
// export const SET_ACTIVE_GROUP_ACTION = {
//     name: 'SET_ACTIVE_GROUP_ACTION',
//     action: (groups) => ({
//         type: SET_ACTIVE_GROUP_ACTION.name, groups
//     })
// }
//
// export const CHANGE_PASSWORD_ACTION = {
//     name: 'CHANGE_PASSWORD_ACTION',
//     action: (oldPassword, newPassword) => ({
//         type: CHANGE_PASSWORD_ACTION.name, oldPassword, newPassword
//     })
// }
//
// export const CHANGED_PASSWORD_ACTION = {
//     name: 'CHANGED_PASSWORD_ACTION',
//     action: () => ({
//         type: CHANGED_PASSWORD_ACTION.name
//     })
// }
//
// export const CHANGE_PASSWORD_FAIL_ACTION = {
//     name: 'CHANGE_PASSWORD_FAIL_ACTION',
//     action: () => ({
//         type: CHANGE_PASSWORD_FAIL_ACTION.name
//     })
// }
//
// export const GO_TO_LOGOUT_ACTION = {
//     name: 'GO_TO_LOGOUT_ACTION',
//     action: (error) => ({
//         type: GO_TO_LOGOUT_ACTION.name, error
//     })
// }
//
// export const LOGGED_OUT_ACTION = {
//     name: 'LOGGED_OUT_ACTION',
//     action: (error, goToCountrySelector) => ({
//         type: LOGGED_OUT_ACTION.name, error, goToCountrySelector
//     })
// }
// export const LOGGED_OUT_SECURITY_ACTION = {
//     name: 'LOGGED_OUT_SECURITY_ACTION',
//     action: () => ({
//         type: LOGGED_OUT_SECURITY_ACTION.name
//     })
// }
//
// export const DEVICE_REGISTERED_ACTION = {
//     name: 'DEVICE_REGISTERED_ACTION',
//     action: () => ({
//         type: DEVICE_REGISTERED_ACTION.name
//     })
// }
//
// export const DEVICE_REGISTERED_FAILED_ACTION = {
//     name: 'DEVICE_REGISTERED_FAILED_ACTION',
//     action: () => ({
//         type: DEVICE_REGISTERED_FAILED_ACTION.name
//     })
// }
//
// export const DEVICE_REMOVED_ACTION = {
//     name: 'DEVICE_REMOVED_ACTION',
//     action: () => ({
//         type: DEVICE_REMOVED_ACTION.name
//     })
// }
//
// export const ON_CHANGE_EMAIL_ACTION = {
//     name: 'ON_CHANGE_EMAIL_ACTION',
//     action: () => ({
//         type: ON_CHANGE_EMAIL_ACTION.name
//     })
// }
//
// export const ON_CHANGE_PASSWORD_ACTION = {
//     name: 'ON_CHANGE_PASSWORD_ACTION',
//     action: () => ({
//         type: ON_CHANGE_PASSWORD_ACTION.name
//     })
// }
//
// export const CLEAR_ERROR_ACTION = {
//     name: 'CLEAR_ERROR_ACTION',
//     action: () => ({
//         type: CLEAR_ERROR_ACTION.name
//     })
// }
//
// export const CHANGE_TOKENS_ACTION = {
//     name: 'CHANGE_TOKENS_ACTION',
//     action: (accessToken, refreshToken) => ({
//         type: CHANGE_TOKENS_ACTION.name, accessToken, refreshToken
//     })
// }
