import React, { Component } from 'react';
import { Animated, Easing, ScrollView, TouchableOpacity,  View, Text, Image } from 'react-native';
import Methods from '../assets/Lookup/Lookup_Architecture';
import Styles from '../assets/Styles';
import Lookup_Intro from '../assets/Lookup/Lookup_Intro.js';

export default class Intro extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: Styles.news_header,
        headerTitleStyle: {
            fontSize: 0,
        },
        gesturesEnabled : false,
    };

    constructor(props){
      super(props);
      this.animate = new Animated.Value(0);
      this.state = {pan : new Animated.ValueXY()}
      this.panResponder = Methods.get_panResponder(this.state.pan);
    }

    componentDidMount(){
      Methods.spin(this.animate);
    }

    render() {
        const { navigate } = this.props.navigation;
        var memory = this.props.navigation.getParam("memory", {"initialized": true, "progress": {}});
        var navig = function(script){
          return(function() {navigate('NewsStory', {memory : memory, script : script})})
        }
        return (
            <View style={Styles.intro}>
              {Methods.article_header([], [], "http://www.canadanewswire.ca.co")}
              {Methods.headline_page(Lookup_Intro.screen, navig)}
              <View pointerEvents="box-none" style = {Styles.float}>
                <Animated.View {...this.panResponder.panHandlers} style = {Object.assign({}, this.state.pan.getLayout(), Styles.button)}>
                    {Methods.app_link(function(){navigate('Messenger', {memory : memory})}, require('../assets/art/meta/messenger.png'), Styles.button_messenger)}
                </Animated.View>
              </View>
            </View>
        );
    }
}
