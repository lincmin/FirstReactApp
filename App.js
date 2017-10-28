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
      city_id: '',
      forecast: {
        main: '',
        wind_direction: '',
        temp: null
      }
    }
  }
  handleTextChange(event) {
    let textValue = event.nativeEvent.text;
    console.log('textValue', textValue);
    this.setState({
      city_id: textValue
    });
    fetch(`http://tj.nineton.cn/Heart/index/all?city=${textValue}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        this.setState({
          forecast:
          {
            main: responseJSON.weather[0].now.text,
            wind_direction: responseJSON.weather[0].now.wind_direction,
            temp: responseJSON.weather[0].now.temperature
          }
        });
      })
      .catch((error) => {
        console.warn(error);
        this.setState({
          forecast:
          {
            main: '无数据',
            wind_direction: '无数据',
            temp: '无数据'
          }
        });
      });
  }
  render() {
    return (
      <Image source={require('./src/images/bg.jpeg')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            查询的城市ID: {this.state.city_id}
          </Text>
          <Forecast
            main={this.state.forecast.main}
            wind_direction={this.state.forecast.wind_direction}
            temp={this.state.forecast.temp}
          />
          <TextInput style={styles.input} onSubmitEditing={this.handleTextChange.bind(this)} />
        </View>
      </Image>
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
    backgroundColor: 'rgba(0,0,0,0)',
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
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});
