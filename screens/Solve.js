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
                <Text>Solve</Text>
                <Button
                    title="Back"
                    onPress={() => navigate('Junction', { name: 'Junction' })}
                />
                <Button
                    title="End"
                    onPress={() => navigate('End', { name: 'End' })}
                />
            </View>
        );
    }
}