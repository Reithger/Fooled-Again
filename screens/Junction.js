import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';

export default class Junction extends React.Component {
    static navigationOptions = {
        title: 'Junction',
        headerLeft: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={Styles.junction}>
                <View style={Styles.junction_center_top}>
                    <Text style={Styles.junction_title}> 
                        Sleuth
                    </Text>
                    <View style={Styles.junction_sleuth_selection}>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('Sleuth', {})}>
                            <Image style={Styles.junction_profile_image} source={require('../assets/Saskia_Portrait.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('Sleuth', {})}>
                            <Image style={Styles.junction_profile_image} source={require('../assets/Saskia_Portrait.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('Sleuth', {})}>
                            <Image style={Styles.junction_profile_image} source={require('../assets/Saskia_Portrait.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('Sleuth', {})}>
                            <Image style={Styles.junction_profile_image} source={require('../assets/Saskia_Portrait.jpg')} />
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.junction_sleuth_selection}>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('Sleuth', {})}>
                            <Image style={Styles.junction_profile_image} source={require('../assets/Saskia_Portrait.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('Sleuth', {})}>
                            <Image style={Styles.junction_profile_image} source={require('../assets/Saskia_Portrait.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('Sleuth', {})}>
                            <Image style={Styles.junction_profile_image} source={require('../assets/Saskia_Portrait.jpg')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('Sleuth', {})}>
                            <Image style={Styles.junction_profile_image} source={require('../assets/Saskia_Portrait.jpg')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={Styles.junction_center_bottom} onPress={() => navigate('Solve', { name: 'Solve' })}>
                    <Text style={Styles.junction_title}>
                        Solve
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}