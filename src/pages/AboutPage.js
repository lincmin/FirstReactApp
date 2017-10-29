import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class AboutPage extends Component {
    static navigationOptions = {
        title: '关于',
    };
    render() {
        return (
            <View>
                <Text>
                    About
                </Text>
            </View>
        );
    };
}

module.exports = AboutPage;
