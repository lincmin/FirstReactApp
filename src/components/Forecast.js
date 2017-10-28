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
                    {this.props.main}
                </Text>
                <Text>
                    描述: {this.props.description}
                </Text>
                <Text> {this.props.temp} ° C </Text>
            </View>
        );
    };
}

module.exports = Forecast;

