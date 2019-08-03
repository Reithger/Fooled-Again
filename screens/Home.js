import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Styles from '../assets/Styles';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerLeft: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={Styles.container_small}>
                <View style={Styles.container_small}>
                    <Text style={Styles.title}>
                        Won't Get Fooled Again
                    </Text>
                </View >
                <View style={Styles.container_medium}>
                    <Button
                        title="Start"
                        onPress={() => navigate('Second', { name: 'Second' })}
                    />
                </View>
            </View>
        );
    }
}

