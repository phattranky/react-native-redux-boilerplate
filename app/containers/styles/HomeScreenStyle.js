// @flow

import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts, ApplicationStyles } from '../../themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    margin: Metrics.baseMargin
  },
  logoWrapper: {
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    flex: 1,
    height: 200,
    width: 200,
    resizeMode: 'contain'
  }
})
