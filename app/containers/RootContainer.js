// @flow

import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import NavigationRouter from '../navigation/NavigationRouter'
import { connect } from 'react-redux'
import StartupActions from '../redux/StartupRedux'
import ReduxPersist from '../config/ReduxPersist'

import styles from './styles/RootContainerStyle'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <NavigationRouter />
      </View>
    )
  }
}

const mapStateToDispatch = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapStateToDispatch)(RootContainer)

// class RootContainer extends Component {
//   render () {
//     return (
//       <View style={Styles.applicationView}>
//         <StatusBar barStyle='light-content' />
//         <Text style={Styles.welcome}>
//           {i18n.t('welcome')}
//         </Text>
//         <View style={Styles.logoWrapper}>
//           <Image style={Styles.logo} source={Images.logo} />
//         </View>
//       </View>
//     )
//   }
// }

// export default RootContainer
