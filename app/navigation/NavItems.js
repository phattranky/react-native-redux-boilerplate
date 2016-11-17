// @flow

import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles/NavItemsStyle'
import { Actions as NavigationActions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Colors, Metrics } from '../themes'

const openDrawer = () => {
  NavigationActions.refresh({
    key: 'drawer',
    open: true
  })
}

export default {
  backButton () {
    return (
      <TouchableOpacity onPress={NavigationActions.pop}>
        <Icon name='arrow-back'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  },

  hamburgerButton () {
    return (
      <TouchableOpacity onPress={openDrawer}>
        <Icon name='menu'
          size={Metrics.icons.medium}
          color={Colors.snow}
          style={styles.navButtonLeft}
        />
      </TouchableOpacity>
    )
  }

}
