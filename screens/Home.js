import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerLeft: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={Styles.home}>
                <View style={Styles.home_title}>
                    <Text style={Styles.home_title_text}>
                        Won't Get Fooled Again
                    </Text>
                </View >
                <View style={Styles.home_image}>
                    <Image style={Styles.home_image_style} source={require('../assets/art/newspapers.png')} />
                </View>
                <TouchableOpacity style={Styles.home_start_button} onPress={() => navigate('Junction', {})}>
                    <Text style={Styles.home_start_button_text}> Start </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

