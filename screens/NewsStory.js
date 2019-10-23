import React, { Component } from 'react';
import { Animated, ScrollView, TouchableOpacity,  View, Text, Image } from 'react-native';
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

    constructor(props){
      super(props);
      this.state = {pan : new Animated.ValueXY()}
      this.panResponder = Methods.get_panResponder(this.state.pan);
    }

    render() {
        const { navigate } = this.props.navigation;
        var memory = this.props.navigation.getParam("memory", {"initialized": true, "progress": {}});
        var script = this.props.navigation.getParam("script", Lookup_Intro.screen[0]);

        return (
            <View style={Styles.intro}>
                {Methods.article_header([{function : function(){navigate('News', {memory : memory})}, image : require('../assets/art/meta/left_arrow.png')}],
                                        [{function : function(){}, image : require('../assets/art/meta/blank_image.png')}])}
                <ScrollView style = {Styles.intro_body}>
                  {Methods.article(script)}
                  <View style = {Styles.intro_buffer}/>
                </ScrollView>
                <Animated.View {...this.panResponder.panHandlers} style = {Object.assign({}, this.state.pan.getLayout(), Styles.intro_button)}>
                    {Methods.app_link(function(){navigate('Messenger', {memory : memory})}, require('../assets/art/meta/messenger.png'), Styles.intro_button_fun)}
                </Animated.View>
            </View>
        );
    }
}
