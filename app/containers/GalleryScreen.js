// @flow

// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, Text, Image } from 'react-native'
import I18n from 'react-native-i18n'

import Styles from './styles/GalleryScreenStyle'

export default class GalleryScreenStyle extends React.Component {
  render () {
    return (
       <View style={Styles.mainContainer}>
        <Text>
          Hello World
        </Text>
      </View>
    )
  }
}
