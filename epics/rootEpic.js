import {combineEpics} from 'redux-observable'

import * as LoginEpics from '../epics/LoginEpics';

const rootEpic = combineEpics(
    LoginEpics.loginEpic,
    LoginEpics.goToRootEpic,
);


export default rootEpic