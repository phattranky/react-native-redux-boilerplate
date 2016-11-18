// @flow

import React, { Component } from 'react'
import { Actions as NavigationActions } from 'react-native-router-flux'
import { ScrollView, Image, BackAndroid } from 'react-native'

import styles from './styles/DrawerContentStyle'
import { Images } from '../themes'
import DrawerButton from '../components/DrawerButton'

class DrawerContent extends Component {

  componentDidMount () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this.context.drawer.props.open) {
        this.toggleDrawer()
        return true
      }
      return false
    })
  }

  toggleDrawer () {
    this.context.drawer.toggle()
  }

  handlePressDevice = () => {
    this.toggleDrawer()
    NavigationActions.deviceInfo()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <DrawerButton style={styles.menuText} text='Device Info' onPress={this.handlePressDevice} />
      </ScrollView>
    )
  }

}

DrawerContent.contextTypes = {
  drawer: React.PropTypes.object
}

export default DrawerContent
