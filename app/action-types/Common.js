// @flow

import { createActionTypes } from '../lib/ActionTypeFactory'

const COMMON_STATE_ACTIONS = createActionTypes('COMMON', [
  'SET_COMMON_STATE'
])

export default COMMON_STATE_ACTIONS
