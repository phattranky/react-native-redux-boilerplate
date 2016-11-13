// @flow

import React, { Component } from 'react'
import { Image, Text, View, StatusBar } from 'react-native'
import { Images } from '../themes'
import i18n from 'react-native-i18n'

import Styles from './styles/RootContainerStyle'

class RootContainer extends Component {
  render () {
    return (
      <View style={Styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <Text style={Styles.welcome}>
          {i18n.t('welcome')}
        </Text>
        <View style={Styles.logoWrapper}>
          <Image style={Styles.logo} source={Images.logo} />
        </View>
      </View>
    )
  }
}

export default RootContainer
