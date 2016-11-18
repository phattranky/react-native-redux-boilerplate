// @flow

import React, { Component } from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Styles from './styles/NavigationContainerStyle'
import NavigationDrawer from './NavigationDrawer'
import NavItems from './NavItems'
import CustomNavBar from '../components/CustomNavBar'

// screens identified by the router
import LoginScreen from '../containers/LoginScreen'
import HomeScreen from '../containers/HomeScreen'
import GalleryScreen from '../containers/GalleryScreen'
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
            <Scene initial key='home' component={HomeScreen} title='AzNode' renderLeftButton={NavItems.hamburgerButton} />
            <Scene key='login' component={LoginScreen} title='Login' hideNavBar />
            <Scene key='deviceInfo' component={DeviceInfoScreen} title='Device Info' hideNavBar />
            <Scene key='gallery' component={GalleryScreen} title='Gallery' />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

export default NavigationRouter
