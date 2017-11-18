import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../pages/HomePage';
import AboutScreen from '../pages/AboutPage';
import WeatherScreen from '../pages/WeatherPage';


const DrawerNav = DrawerNavigator(
    {
        Home: { screen: HomeScreen },
        About: { screen: AboutScreen },
        Weather: { screen: WeatherScreen },
    }, {
        drawerWidth: 200, // 抽屉宽 
        drawerPosition: 'left', // 抽屉在左边
        contentOptions: {
            initialRouteName: HomeScreen, // 默认页面组件 
            activeTintColor: 'white', // 选中文字颜色 
            activeBackgroundColor: '#ff8500', // 选中背景颜色 
            inactiveTintColor: '#666', // 未选中文字颜色 
            inactiveBackgroundColor: '#fff', // 未选中背景颜色 
            style: {
                // 样式 
            }
        }
    });

    module.exports = DrawerNav;