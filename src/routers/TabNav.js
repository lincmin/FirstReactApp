import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from '../pages/HomePage';
import AboutScreen from '../pages/AboutPage';
import WeatherScreen from '../pages/WeatherPage';

const TabNav = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '首页',
            }),
        },

        About: {
            screen: AboutScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '关于',
            }),
        },

        Weather: {
            screen: WeatherScreen,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: '天气',
            }),
        },
    },

    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            activeTintColor: '#007ACC',
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
            labelStyle: {
                fontSize: 20,
            },
        }
    }
);

module.exports = TabNav;
