/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, StatusBar, Image} from 'react-native';
import {Button, Icon, Text} from 'native-base';

import LinearGradient from 'react-native-linear-gradient';

import styles from "./styles/style";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <LinearGradient style={styles.container} colors={['#393538', '#9f3d94', '#393538']}>
                <StatusBar barStyle = "light-content"/>

                    <Image style={{width: 287, height: 200,}}
                           source={require('./assets/img/groove4.png')}
                    />
            </LinearGradient>
        );
    }
}

