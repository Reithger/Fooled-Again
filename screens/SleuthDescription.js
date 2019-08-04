import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Lookup from '../assets/Lookup';
import Styles from '../assets/Styles';

export default class SleuthDescription extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerLeft: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        id = this.props.navigation.getParam("character", "Error");
        descrip = Lookup[id].description;
        console.log(id);
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#bbb' }}>
                    <Text> {Lookup["char_1"].description} </Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#ddd' }}>
                    <Text>Sleuth Description for {id} : {descrip}</Text>
                    <Button
                        title="Back"
                        onPress={() => navigate('Junction', { name: 'Junction' })}
                    />
                </View>
                <View style={{ flex: 1, backgroundColor: '#222' }}>

                </View>

            </View>
        );
    }
}