import React, {Component} from 'react';
import { StatusBar, Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import styles from "../styles/style";

class SplashScreen extends React.Component {
    // static navigationOptions = { header: null };
    render() {
        // const { navigate } = this.props.navigation;
        return (
            <LinearGradient style={styles.container} colors={['#393538', '#9f3d94', '#393538']}>
                <StatusBar barStyle = "light-content"/>

                <Image style={{width: 287, height: 200,}}
                       source={require('../assets/img/groove4.png')}
                />
            </LinearGradient>
        );
    }
}

export default SplashScreen;