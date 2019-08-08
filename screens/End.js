import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
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
            <View style={Styles.container_small}>
                <Text>End</Text>
                <Button
                    title="Back"
                    onPress={() => navigate('Solve', { name: 'Solve' })}
                />
            </View>
        );
    }
}