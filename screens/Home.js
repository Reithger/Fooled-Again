import React, { Component } from 'react';
import {Animated, Easing, ScrollView, ImageBackground, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';
import Methods from '../assets/Lookup/Lookup_Architecture';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: Styles.title_header,
        headerTitleStyle: {
            fontSize: 0,
        },
        gesturesEnabled : false,
    };

    constructor(props){
      super(props);
      this.animate = new Animated.Value(0)
      this.state = {messenger : false, pan : new Animated.ValueXY()}
      this.panResponder = Methods.get_panResponder(this.state.pan);
    }

    componentDidMount(){
      Methods.spin(this.animate);
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={Styles.home}>
                <View style = {Styles.home_title}>
                    <Image style = {Styles.home_title_image} source = {require("../assets/art/meta/title.jpg")}/>
                </View>
                <View pointerEvents="box-none" style = {Styles.float}>
                  <Animated.View {...this.panResponder.panHandlers} style = {Object.assign({}, this.state.pan.getLayout(), Styles.button, {alignItems : 'flex-end', marginRight : '5%',})}>
                      {Methods.app_link_shake(this.animate, function(){navigate('Intro', {});}, require('../assets/art/meta/news_icon.png'), Styles.button_news, true)}
                  </Animated.View>
                </View>
            </View>
        );
    }
}
