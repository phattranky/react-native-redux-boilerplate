import { takeLatest } from 'redux-saga'
// import DebugSettings from '../config/DebugSettings'

/* ------------- Types ------------- */

import { StartupTypes } from '../redux/StartupRedux'
import { LoginTypes } from '../redux/LoginRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { login } from './LoginSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(LoginTypes.LOGIN_REQUEST, login)

    // some sagas receive extra parameters in addition to an action
  ]
}
