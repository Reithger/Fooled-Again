import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';

export default class Solve extends React.Component {
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
        var memory = this.props.navigation.getParam("memory", {"initialized": true, "progress": {"char_1" : "success"}});
        return (
            <View style={Styles.solve}>
                <View style = {Styles.solve_puzzle}>
                    <Image style = {Styles.solve_puzzle_image} source = {require('../assets/art/solve_type/scroll.png')} />
                </View>
                <View style = {Styles.solve_interact}>
                    <TouchableOpacity style = {Styles.solve_interact_back} onPress={() => navigate('Junction', {memory:memory})}>
                        <Text style = {Styles.solve_interact_back_text}>
                          Back
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {Styles.solve_interact_solve} onPress={() => navigate('End', {memory:memory})}>
                        <Text style = {Styles.solve_interact_solve_text}>
                          Solve
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
