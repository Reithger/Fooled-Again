import React, { Component } from 'react';
import { TouchableOpacity, Button, View, Text } from 'react-native';
import Styles from '../assets/Styles';

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
        return (
            <View style={Styles.intro}>
                <View style={Styles.placeholder}>
                    <Text style={Styles.placeholder_text}>Introductory Scene Here</Text>
                </View>
                <View style={Styles.navigation}>
                    <TouchableOpacity style={Styles.navigation_back} onPress={() => navigate('Home', {})}>
                        <Text style={Styles.navigation_back_text}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.navigation_junction} onPress={() => navigate('Junction', {})}>
                        <Text style={Styles.navigation_junction_text}>Junction</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}