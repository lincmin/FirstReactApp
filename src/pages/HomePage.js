import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';



class HomePage extends Component {
    static navigationOptions = {
        title: '首页',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>
                    欢迎访问
                </Text>
                <Button
                    title="访问天气查询"
                    onPress={() => navigate('Weather')} />
                <Text>
                    about
                </Text>
                <Button
                    title="访问about页"
                    onPress={() => navigate('About')} />
            </View>
        );
    };
}

module.exports = HomePage;
