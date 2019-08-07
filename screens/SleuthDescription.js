import React, { Component } from 'react';
import { Button, View, Text, Image } from 'react-native';
import Lookup from '../assets/Lookup';
import Styles from '../assets/Styles';

export default class SleuthDescription extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerLeft: null,
    };
    render() {
        const { navigate } = this.props.navigation;
        id = this.props.navigation.getParam("character", "default");
        return (
            <View style={Styles.sleuthDescription}> 
                <View style={Styles.sleuthDescription_profile}>
                    <Image style={Styles.sleuthDescription_profile_image} source={Lookup[id].portrait_path}/>
                </View>
                <View style={Styles.sleuthDescription_description}> 
                    <View style={Styles.sleuthDescription_description_title}>
                        <Text style={Styles.sleuthDescription_description_title_text}>{Lookup[id].name}</Text>       
                    </View>
                    <View style={Styles.sleuthDescription_description_body}>
                        <Text style={Styles.sleuthDescription_description_body_text}>{Lookup[id].description}</Text>
                    </View>
                </View>
                <View style={Styles.sleuthDescription_interact}>
                    <View style={Styles.sleuthDescription_interact_back}>
                        <Button
                            title="Back"
                            onPress={() => navigate('Junction', { name: 'Junction' })}
                            />
                    </View>
                    <View style={Styles.sleuthDescription_interact_interrogate}>
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