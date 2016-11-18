// @flow

// An All Components Screen is a great way to dev and quick-test components
import React from 'react'
import { View, Text, Image } from 'react-native'
import I18n from 'react-native-i18n'
import { Actions } from 'react-native-router-flux'

import RoundedButton from '../components/RoundedButton'
import RoundedImageCard from '../components/RoundedImageCard'
import { Metrics, Images } from '../themes'
import Styles from './styles/HomeScreenStyle'

export default class HomeScreenStyle extends React.Component {
  render () {
    return (
       <View style={Styles.applicationView}>
        <Text style={Styles.welcome}>
          {I18n.t('welcome')}
        </Text>
        <View style={Styles.logoWrapper}>
          <Image style={Styles.logo} source={Images.logo} />
        </View>
        <RoundedButton
          text='Login Screen'
          onPress={() => window.alert('Rounded Button Pressed!')}
        />
        <RoundedImageCard
          onPress={Actions.gallery}
          imageSrc={require('../images/tiger.jpg')}
          text="View gallery"
        />
      </View>
    )
  }
}
