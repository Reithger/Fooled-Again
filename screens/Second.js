import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Styles from '../assets/Styles';

export default class Second extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerLeft: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={Styles.container}>
                <Text>Second</Text>
                <Button
                    title="H"
                    onPress={() => navigate('Home', { name: 'Home' })}
                />
            </View>
        );
    }
}