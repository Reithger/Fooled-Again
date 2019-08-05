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
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#bbb' }}>

                </View>
                <View style={{ flex: 1, backgroundColor: '#ddd' }}>
                    <Text>Sleuth Description for {id} : {descrip}</Text>
                    
                </View>
                <View style={{ flex: 1, backgroundColor: '#222', flexDirection: 'row', justifyContent: 'space-around' }}>
                    <View style={{alignItems: 'flex-start'}}>
                        <Button
                            title="Back"
                            onPress={() => navigate('Junction', { name: 'Junction' })}
                            />
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                        <Button
                            title="Interrogate"
                            onPress={() => navigate('Sleuth', { character: id })}
                        />
                    </View>
                </View>

            </View>
        );
    }
}