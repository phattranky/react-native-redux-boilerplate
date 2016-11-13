// @flow

import {StyleSheet} from 'react-native'
import {Fonts, Metrics, Colors} from '../../themes/'

export default StyleSheet.create({
  applicationView: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.background
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: Fonts.type.base,
    margin: Metrics.baseMargin
  },
  logoWrapper: {
    flexDirection: 'row',
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
