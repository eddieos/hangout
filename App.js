/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator, createBottomTabNavigator, tabBarIcon} from 'react-navigation';
import {Badge, Button, Text, Icon, Footer, FooterTab} from "native-base";
import {Ionicons} from 'react-native-vector-icons';

// Screens
import SplashScreen from './screens/SplashScreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Notification from './screens/Notification';


export default class App extends React.Component {
    render() {
        return (
            <AppNavigator/>
        );
    }
}


// export const AppNavigator = createStackNavigator({
//     ForgotPassword: {screen: ForgotPassword},
//     SplashScreen: {screen: SplashScreen},
//     Login: {screen: Login},
//     SignUp: {screen: SignUp},
//     ForgotPassword: {screen: ForgotPassword},
// });


export const AppNavigator = createStackNavigator({
    SplashScreen: {
        screen: SplashScreen,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    ForgotPassword: {
        screen: ForgotPassword,
        navigationOptions: ({navigation}) => ({
            header: null,
        }),
    },
    Home: {
        screen: createBottomTabNavigator({
                Home: {
                    screen: Home,
                },
                Profile: {
                    screen: Profile,
                },
                Notification: {
                    screen: Notification,
                },
            },
            {
                tabBarComponent: props => {
                    return (
                        <Footer style={{backgroundColor: '#ccc'}}>
                            <FooterTab>
                                <Button
                                    vertical
                                    onPress={() => props.navigation.navigate("Home")}>
                                    <Icon type="Entypo" name="home" style={{fontSize: 24, color: '#000'}}/>
                                </Button>
                                <Button
                                    vertical
                                    badge
                                    onPress={() => props.navigation.navigate("Profile")}>
                                    <Badge><Text>2</Text></Badge>
                                    <Icon type="Entypo" name="bell" style={{fontSize: 24, color: '#000'}}/>
                                </Button>
                                <Button
                                    vertical
                                    onPress={() => props.navigation.navigate("Notification")}>
                                    <Icon type="Entypo" name="squared-plus" style={{fontSize: 24, color: '#000'}}/>
                                </Button>
                                <Button
                                    vertical
                                    onPress={() => props.navigation.navigate("Profile")}>
                                    <Icon type="Entypo" name="heart-outlined" style={{fontSize: 24, color: '#000'}}/>
                                </Button>
                                <Button
                                    vertical
                                    onPress={() => props.navigation.navigate("Notification")}>
                                    <Icon type="Entypo" name="user" style={{fontSize: 24, color: '#000'}}/>
                                </Button>
                            </FooterTab>
                        </Footer>
                    )
                }
            }
        ),

        navigationOptions: ({navigation}) => ({
            header: null,
            gesturesEnabled: false,
        }),
    },
});

