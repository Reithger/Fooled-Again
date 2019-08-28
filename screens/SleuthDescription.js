import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Lookup from '../assets/Lookup';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';

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
        var id = this.props.navigation.getParam("character", "default");
        var back_button_text = "Back";
        var interrogate_button_text = "Interrogate";
        var description = Lookup[id].description;
        var name = Lookup[id].name;

        return (
            <View style={Styles.sleuthDescription}> 
                <View style={Styles.sleuthDescription_profile}>
                    <Image style={Styles.sleuthDescription_profile_image} source={Lookup[id].portrait_path}/>
                </View>
                <View style={Styles.sleuthDescription_description}> 
                    <View style={Styles.sleuthDescription_description_title}>
                        <Text style={Styles.sleuthDescription_description_title_text}>{name}</Text>       
                    </View>
                    <View style={Styles.sleuthDescription_description_body}>
                        <Text style={Styles.sleuthDescription_description_body_text}>{description}</Text>
                    </View>
                </View>
                <View style={Styles.sleuthDescription_interact}>
                    <TouchableOpacity style={Styles.sleuthDescription_interact_back} onPress={() => navigate('Junction', {})}>
                        <Text style={Styles.sleuthDescription_interact_back_text}>{back_button_text}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.sleuthDescription_interact_interrogate} onPress={() => navigate('SleuthConversation', {character:id, script: "screen_1"})}>
                        <Text style={Styles.sleuthDescription_interact_interrogate_text}>{interrogate_button_text}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}