import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Lookup from '../assets/Lookup';
import Styles from '../assets/Styles';

export default class SleuthDescription extends React.Component {
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
        back_button_text = "Back";
        interrogate_button_text = "Interrogate";
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
                        <TouchableOpacity style={{}} onPress={() => navigate('Junction', {})}>
                            <Text style={Styles.sleuthDescription_interact_back_text}>{back_button_text}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.sleuthDescription_interact_interrogate}>
                        <TouchableOpacity style={{}} onPress={() => navigate('Sleuth', {character:id, script: Lookup[id].script_path})}>
                            <Text style={Styles.sleuthDescription_interact_interrogate_text}>{interrogate_button_text}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                </View>
        );
    }
}