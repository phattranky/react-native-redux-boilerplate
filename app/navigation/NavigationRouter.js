// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
// import NavItems from './NavItems'
// import CustomNavBar from '../components/CustomNavBar'

// screens identified by the router
import LoginScreen from '../containers/LoginScreen'
import DeviceInfoScreen from '../containers/DeviceInfoScreen'

/* **************************
* Documentation: https://github.com/aksonov/react-native-router-flux
***************************/

class NavigationRouter extends Component {
  render () {
    return (
      <Router>
        <Scene key='drawer' component={NavigationDrawer} open={false}>
          <Scene key='drawerChildrenWrapper' navigationBarStyle={Styles.navBar} titleStyle={Styles.title} leftButtonIconStyle={Styles.leftButton} rightButtonTextStyle={Styles.rightButton}>
            <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
            <Scene initial key='deviceInfo' component={DeviceInfoScreen} title='Device Info' hideNavBar />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
