// @flow

import React from 'react'
import { TouchableOpacity, View, Text, Image, Animated } from 'react-native'
import styles from './styles/RoundedImageCardStyle'
import ExamplesRegistry from '../services/ExamplesRegistry'

// Example
ExamplesRegistry.add('Rounded Image Card', () =>
  null
)

export default class RoundedImageCard extends React.Component {

  props: {
    onPress: () => void,
    text?: string,
    imageSrc: string
  }

  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
      textBounceValue: new Animated.Value(0)
    };
  }

  getText () {
    const text = this.props.text || ''
    return text.toUpperCase()
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 1,
        friction: 1,
      }
    ).start(() => {
      Animated.spring(
        this.state.textBounceValue,
        {
          toValue: 1,
          friction: 1,
        }
      ).start();
    });
  }

  render () {
    return (
      <TouchableOpacity style={styles.wrapper} onPress={this.props.onPress}>
        <Animated.Image style={[styles.image, {
          transform: [
            {scale: this.state.bounceValue},
          ]
        }]} source={this.props.imageSrc} resizeMode="cover" />
        <Animated.View style={[styles.textWrapper, {
          opacity: this.state.textBounceValue
        }]}>
          <Text style={styles.text}>
            {this.props.text}
          </Text>
        </Animated.View>
      </TouchableOpacity>
    )
  }
}
