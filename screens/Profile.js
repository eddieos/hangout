import React, {Component} from 'react';
import {StyleSheet, StatusBar, Image, View} from 'react-native';
import {Button, Icon, Text, Item, Input} from 'native-base';
import {Col, Row, Grid} from 'react-native-easy-grid';

import LinearGradient from 'react-native-linear-gradient';
import styles from "../styles/style";

class Profile extends React.Component {
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <LinearGradient style={{flex: 1, justifyContent: 'center'}} colors={['#393538', '#9f3d94', '#393538']}>
                <View style={{marginHorizontal: 40, alignItems: 'center', marginBottom: 50 }}>


                    <Item style={{marginVertical: 5}}>
                        <Icon type="EvilIcons" active name='envelope' style={{color: '#FFF'}}/>
                        <Input placeholder='Email' style={{color: '#FFF'}}
                               placeholderTextColor="#ccc"/>
                    </Item>
                    <Grid style={{marginVertical: 10}}>
                        <Col style={{marginRight: 5}}>
                            <Button block bordered light>
                                <Text>Profile</Text>
                            </Button>
                        </Col>
                        <Col style={{marginLeft: 5}}>
                            <Button block bordered light>
                                <Text>Profile</Text>
                            </Button>
                        </Col>
                    </Grid>

                </View>


            </LinearGradient>
        );
    }
}

export default Profile;