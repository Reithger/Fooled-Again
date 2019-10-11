import React, { Component } from 'react';
import { ScrollView, ImageBackground, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import {BlurView} from 'expo-blur';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';
import Methods from '../assets/Lookup/Lookup_Architecture';
import LookupIntro from '../assets/Lookup/Lookup_Intro';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: Styles.news_header,
        headerTitleStyle: {
            fontSize: 0,
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        var data = new Memory();
        var memory = {};
        data.retrieveData("DATA").then((value) => {
            if (value == null || this.props.navigation.getParam("new", false)) {
                value = {"initialized": false, "progress": {}};
                value = JSON.stringify(value);
                data.storeData("DATA", value);
            }
            memory = JSON.parse(value);
        });
        var script = LookupIntro.screen[0];
        return (
            <View style={Styles.home}>
                <View style = {Styles.home_background}>
                    {Methods.article_header(function(){}, function(){})}
                    <ScrollView style = {{}}>
                        {Methods.headline_page(LookupIntro.screen)}
                    </ScrollView>
                </View>
                <BlurView style = {Styles.home_background} tint = 'default' intensity = {80}/>

                <View style = {Styles.home_login}>
                    <View style = {Styles.home_login_top}>
                        <View style = {Styles.home_login_top_title}>
                            <Text style = {Styles.home_login_top_title_text}>
                                Won't Get Fooled Again
                            </Text>
                        </View>
                    </View>
                    <View style = {Styles.home_login_entry}>
                        <Text style = {Styles.home_login_entry_text}>
                            Username
                        </Text>
                        <View style = {Styles.home_login_entry_textbox}>
                            <Text style = {Styles.home_login_entry_textbox_text}>
                                Gabby_Phillips
                            </Text>
                        </View>
                    </View>
                    <View style = {Styles.home_login_entry}>
                        <Text style = {Styles.home_login_entry_text}>
                            Password
                        </Text>
                        <View style = {Styles.home_login_entry_textbox}>
                            <Text style = {Styles.home_login_entry_textbox_text}>
                                ***********
                            </Text>
                        </View>
                    </View>
                    <View style = {Styles.home_login_interact}>
                        <TouchableOpacity style = {Styles.home_login_interact_press} onPress={()=>(navigate('Intro', {memory : memory}))}>
                            <Text style = {Styles.home_login_interact_press_text}>
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
