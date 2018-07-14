import React, {Component} from 'react';
import { StatusBar, Image, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

class SplashScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <LinearGradient style={{flex: 1, justifyContent: 'center', alignItems: 'center',}} colors={['#393538', '#9f3d94', '#393538']}>
                <StatusBar barStyle = "light-content"/>
                <TouchableOpacity
                    onPress={() =>
                        navigate('Login', { name: 'Login' })
                    }>
                <Image style={{width: 287, height: 200,}}
                       source={require('../assets/img/groove4.png')}
                />
                </TouchableOpacity>
            </LinearGradient>
        );
    }
}

export default SplashScreen;