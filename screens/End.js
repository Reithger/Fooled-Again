import React, { Component } from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';

export default class Junction extends React.Component {
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
        var memory = this.props.navigation.getParam("memory", {"initialized" : true, "progress" : {"char_1" : "success"}});
        var victory = this.props.navigation.getParam("pass", false);
        return (
            <View style={Styles.end}>
                <View style = {Styles.end_image}>
                    <Image style = {Styles.end_image_profile} source = {require('../assets/art/newspapers.png')} />
                </View>
                <View style = {Styles.end_body}>
                    <Text style = {Styles.end_body_text}>
                      Something happened!
                    </Text>
                </View>
                <View style = {Styles.end_interact}>
                    <TouchableOpacity style = {Styles.end_interact_back} onPress={() => {navigate('Solve', {memory : memory});}}>
                        <Text style = {Styles.end_interact_back_text}> Back </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {Styles.end_interact_end} onPress={() => navigate('Home', {memory : memory, new : true})}>
                        <Text style = {Styles.end_interact_end_text}> End </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
