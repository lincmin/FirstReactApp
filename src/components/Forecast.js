import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';



class Forecast extends Component {

    render() {
        return (
            <View>
                <Text>
                    天气: {this.props.main}
                </Text>
                <Text>
                    风向: {this.props.wind_direction}
                </Text>
                <Text>
                    温度: {this.props.temp} ° C
                </Text>
            </View>
        );
    };
}

module.exports = Forecast;

