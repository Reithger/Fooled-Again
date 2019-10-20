import React, { Component } from 'react';
import { ScrollView, TouchableOpacity,  View, Text, Image } from 'react-native';
import Methods from '../assets/Lookup/Lookup_Architecture';
import Styles from '../assets/Styles';
import Lookup_Intro from '../assets/Lookup/Lookup_Intro.js';

export default class Intro extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: Styles.news_header,
        headerTitleStyle: {
            fontSize: 0,
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        var memory = this.props.navigation.getParam("memory", {"initialized": true, "progress": {}});
        var script = this.props.navigation.getParam("script", Lookup_Intro.screen[0]);

        return (
            <View style={Styles.intro}>
                {Methods.article_header([{function : function(){navigate('News', {memory : memory})}, image : require('../assets/art/meta/left_arrow.png')}],
                                        [{function : function(){}, image : require('../assets/art/meta/icon.png')}])}
                <ScrollView style = {Styles.intro_body}>
                  {Methods.article(script)}
                  <View style = {Styles.intro_buffer}/>
                </ScrollView>
                <View style = {Styles.intro_button}>
                    {Methods.app_link(function(){navigate('Messenger', {memory : memory})}, require('../assets/art/meta/right_arrow.png'), Styles.intro_button_fun)}
                </View>
            </View>
        );
    }
}
