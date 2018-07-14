import React, {Component} from 'react';
import {StyleSheet, StatusBar, Image, View} from 'react-native';
import {Button, Icon, Text, Item, Input} from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import styles from "../styles/style";

class SignUp extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <LinearGradient style={{flex: 1, justifyContent: 'center'}} colors={['#393538', '#9f3d94', '#393538']}>
                <View style={{marginHorizontal: 40, alignItems: 'center'}}>

                    <Item style={{marginVertical: 5}}>
                        <Icon type="EvilIcons" active name='user' style={{color: '#FFF'}}/>
                        <Input placeholder='First Name' style={{color: '#FFF'}}
                               placeholderTextColor="#ccc"/>
                    </Item>
                    <Item style={{marginVertical: 5}}>
                        <Icon type="EvilIcons" active name='user' style={{color: '#FFF'}}/>
                        <Input placeholder='Last Name' style={{color: '#FFF'}}
                               placeholderTextColor="#ccc"/>
                    </Item>
                    <Item style={{marginVertical: 5}}>
                        <Icon type="EvilIcons" active name='envelope' style={{color: '#FFF'}}/>
                        <Input placeholder='Email' style={{color: '#FFF'}}
                               placeholderTextColor="#ccc"/>
                    </Item>
                    <Item style={{marginVertical: 5}}>
                        <Icon type="EvilIcons" active name='lock' style={{color: '#FFF'}}/>
                        <Input placeholder='Password' style={{color: '#FFF'}}
                               placeholderTextColor="#ccc"
                               secureTextEntry/>
                    </Item>
                    <Item style={{marginVertical: 5}}>
                        <Icon type="EvilIcons" active name='lock' style={{color: '#FFF'}}/>
                        <Input placeholder='Confirm Password' style={{color: '#FFF'}}
                               placeholderTextColor="#ccc"
                               secureTextEntry/>
                    </Item>
                    <Button style={{marginVertical: 30}} block bordered light
                            title="Home"
                            onPress={() =>
                                navigate('Home', { name: 'Home' })
                            }>
                        <Text>SIGN UP</Text>
                    </Button>

                </View>
                <View style={{marginHorizontal: 40, marginTop: 20}}>
                    <Text style={{fontSize: 12, color: '#FFF', textAlign: 'center'}}>Have an Account?</Text>
                    <Button style={{marginVertical: 10}} block bordered light
                            title="Login"
                            onPress={() =>
                                navigate('Login', { name: 'Login' })
                            }>
                        <Text>Sign In</Text>
                    </Button>
                </View>


            </LinearGradient>
        );
    }
}

export default SignUp;