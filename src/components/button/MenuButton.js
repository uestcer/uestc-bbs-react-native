import React, { Component } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MenuButton extends Component {
  render() {
    return (
      <Icon
        style={this.props.style}
        name='reorder'
        size={18}
        onPress={() => this.props.updateMenuState(true)} />
    );
  }
}
