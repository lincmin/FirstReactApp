/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/pages/HomePage';
import WeatherScreen from './src/pages/WeatherPage';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  Weather: { screen: WeatherScreen },
});

export default class App extends Component<{}> {

  render() {
    return (
      <Navigator />
    )
  }
}


