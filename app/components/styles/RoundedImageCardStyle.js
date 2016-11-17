// @flow

import { StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../themes/'

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: Metrics.section,
    marginVertical: Metrics.baseMargin
  },
  image: {
    flex: 1,
    borderRadius: 5,
    width: null,
    height: 200
  },
  textWrapper: {
    backgroundColor: Colors.windowTint,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    paddingTop: Metrics.marginVertical,
    paddingBottom: Metrics.marginVertical,
    paddingLeft: Metrics.marginHorizontal,
    paddingRight: Metrics.marginHorizontal,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  text: {
    color: Colors.snow
  }
})
