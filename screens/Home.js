import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: {
            height: 0,
        },
        headerTitleStyle: {
            fontSize: 0,
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        var data = new Memory();
        var memory = {};
        data.retrieveData("DATA").then((value) => {
            if (value == null) {
                value = {
                    "initialized": true, "progress": {}
                };
                value = JSON.stringify(value);
                data.storeData("DATA", value);
            }
            memory = JSON.parse(value);
        });
        console.log(memory);
        return (
            <View style={Styles.home}>
                <View style={Styles.home_title}>
                    <View style={Styles.home_title_space}>
                        <Text style={Styles.home_title_space_text}>
                            Won't Get Fooled Again
                        </Text>
                    </View>
                </View >
                <View style={Styles.home_image}>
                    <Image style={Styles.home_image_style} source={require('../assets/art/newspapers.png')} />
                </View>
                <TouchableOpacity style={Styles.home_start_button} onPress={() => navigate('Intro', {memory: memory})}>
                    <Text style={Styles.home_start_button_text}> Start </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
