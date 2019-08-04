import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Styles from '../assets/Styles';

export default class Junction extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerLeft: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={Styles.container_small}>
                <Text>Junction</Text>
                <Button
                    title="Sleuth?"
                    onPress={() => navigate('Sleuth', { name: 'Sleuth' })}
                />
                <Button
                    title="Solve?"
                    onPress={() => navigate('Solve', { name: 'Solve' })}
                />
            </View>
        );
    }
}