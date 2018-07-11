import React, {Component} from 'react';
import {StyleSheet, StatusBar, Image, View} from 'react-native';
import {Button, Icon, Text, Item, Input} from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import styles from "../styles/style";

class Login extends React.Component {
    // static navigationOptions = { header: null };
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <LinearGradient style={{flex: 1, justifyContent: 'center'}} colors={['#393538', '#9f3d94', '#393538']}>
                <View style={{marginHorizontal: 40, alignItems: 'center'}}>
                    <Image style={{width: 287, height: 200,}}
                           source={require('./assets/img/groove4.png')}
                    />
                    <Item style={{marginVertical: 5}}>
                        <Icon type="FontAwesome" active name='user-o' style={{color: '#FFF'}}/>
                        <Input placeholder='Username' style={{color: '#FFF'}}
                               placeholderTextColor="#ccc"/>
                    </Item>
                    <Item style={{marginVertical: 2}}>
                        <Icon type="FontAwesome" active name='pencil' style={{color: '#FFF'}}/>
                        <Input placeholder='Password' style={{color: '#FFF'}}
                               placeholderTextColor="#ccc"
                               secureTextEntry/>
                    </Item>
                    <Button style={{marginVertical: 30}} block bordered light>
                        <Text>Sign In</Text>
                    </Button>

                    <Button block transparent light>
                        <Text>Forgot Your Password?</Text>
                    </Button>

                    <View style={{marginBottom: 10}}>
                        <Text style={{fontSize: 12, color: '#FFF'}}>Or Sign in With</Text>
                    </View>

                    <View style={{flexDirection: 'row', marginVertical: 10}}>
                        <Button rounded style={styles.socialButton}>
                            <Icon name='logo-googleplus' style={{color: '#323232'}}/>
                        </Button>
                        <Button rounded style={styles.socialButton}>
                            <Icon name='logo-facebook' style={{color: '#323232'}}/>
                        </Button>

                    </View>

                </View>
                <View style={{marginHorizontal: 40, marginTop: 20}}>
                    <Text style={{fontSize: 12, color: '#FFF', textAlign: 'center'}}>Don't Have an Account?</Text>
                    <Button style={{marginVertical: 10}} block bordered light>
                        <Text>Register Now</Text>
                    </Button>
                </View>


            </LinearGradient>
        );
    }
}

export default Login;