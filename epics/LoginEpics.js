import * as LoginActions from '../actions/LoginActions'
import {mergeMap} from 'rxjs'
import {ajax} from 'rxjs/observable/dom/ajax'
import {Observable} from 'rxjs/Observable'

export const goToRootEpic = action$ =>
    action$.ofType(LoginActions.GO_TO_ROOT_ACTION.name)
        .forEach(action => {
            // NavigationActions.navigate("Root");
            console.log("............>>>>>>>>HERE: GO_TO_ROOT_ACTION<<<<<<<", action)
            // Actions.ForgetPasswordContainer()
        });

export const loginEpic = action$ =>
    action$.ofType(LoginActions.LOGIN_ACTION.name)
        .mergeMap(action => {
            console.log("............>>>>>>>>action:", action)

            // const url = `uuuuu/authorization/login`;
            // const headers = {
            //     'Content-Type': 'application/json',
            //     // domain: Auth0Const.KC_CLIENT_REALM(action.country)
            // };
            // const body = {username: action.email, password: action.password};
            return Observable.empty
            // return Observable.concat(
            //     // Observable.of({
            //     //     type: UIActions.IS_LOADING,
            //     //     payload: LoaderConstants.LOGIN_EPIC
            //     // }),
            //     ajax.post(url, body, headers)
            //     .timeout(45000 )// milliseconds
            //     .flatMap(response => {
            //         return Observable.concat(
            //             Observable.of({
            //                 type: UIActions.IS_LOADED,
            //                 payload: LoaderConstants.LOGIN_EPIC
            //             }),
            //             Observable.of(LoginActions.LOGGED_ACTION.action(response.response.data.accessToken, response.response.data.refreshToken,
            //                 action.email, action.deviceToken, action.country))
            //         )
            //     })
            //     .catch(error => {
            //         const errorMessages = error.xhr && error.xhr.response && error.xhr.response.notifications
            //             ? error.xhr.response.notifications.errorMessages : [];
            //         return Observable.concat(
            //             Observable.of({
            //                 type: UIActions.IS_LOADED,
            //                 payload: LoaderConstants.LOGIN_EPIC
            //             }),
            //             Observable.if(
            //                 () => errorMessages.length > 0,
            //                 Observable.of(LoginActions.LOGIN_FAILED_ACTION.action(errorMessages[0], action.email)),
            //                 Observable.of(GlobalActions.ERROR_GENERAL_ACTION.action(action, error, url, body,'POST'))
            //             )
            //         )
            //     })
            // )
        })