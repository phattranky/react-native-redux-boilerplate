// @flow

import React, { Component } from 'react'
import '../i18n/I18n' // keep before root container
import RootContainer from './RootContainer'
import applyConfigSettings from '../config'

// Apply config overrides
applyConfigSettings()
/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render () {
    return (
      <RootContainer />
    )
  }
}

export default App
