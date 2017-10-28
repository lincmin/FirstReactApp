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
  View
} from 'react-native';
var Forecast = require('./src/components/Forecast');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
  'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      forecast: {
        main: '多云',
        description: '南风',
        temp: 22
      }
    }
  }
  handleTextChange(event) {
    let textValue = event.nativeEvent.text;
    console.log('textValue', textValue);
    this.setState({
      text: textValue
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          输入{this.state.text}
        </Text>
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
        <TextInput style={styles.input} onSubmitEditing={this.handleTextChange.bind(this)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    borderWidth: 2,
    height: 40,
    width: 100
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
