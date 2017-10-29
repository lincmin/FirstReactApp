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
                    About,获取传值{this.props.navigation.state.params.name}
                </Text>
            </View>
        );
    };
}

module.exports = AboutPage;
