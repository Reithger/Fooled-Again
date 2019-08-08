import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Styles from '../assets/Styles';
import Script from '../assets/text/Lookup_Interrogate.js';

export default class Sleuth extends React.Component {
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
        id = this.props.navigation.getParam("character", "default");
        return (
            <View style={Styles.container_small}>
                <Text>Sleuth</Text>
                <Button
                    title="Back"
                    onPress={() => navigate('SleuthDescription', { name: id })}
                />
            </View>
        );
    }
}