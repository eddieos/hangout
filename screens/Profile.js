import React, {Component} from 'react';
import {StyleSheet, StatusBar, Image, View} from 'react-native';
import {Button, Icon, Text, Item, Input} from 'native-base';

import styles from "../styles/style";

class Profile extends React.Component {
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF'}}>
                <StatusBar barStyle="dark-content"/>


                <Text>Profile</Text>

            </View>
        );
    }
}

export default Profile;