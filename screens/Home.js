import React, { Component } from 'react';
import {Animated, Easing, ScrollView, ImageBackground, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import {BlurView} from 'expo-blur';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';
import Methods from '../assets/Lookup/Lookup_Architecture';
import LookupIntro from '../assets/Lookup/Lookup_Intro';
const DeviceInfo = require('react-native-device-detection');

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: Styles.title_header,
        headerTitleStyle: {
            fontSize: 0,
        }
    };

    constructor(props){
      super(props);
      this.animate = new Animated.Value(0)
    }

    componentDidMount(){
      this.spin()
    }

    spin () {
      this.animate.setValue(0)
      Animated.timing(
          this.animate,
          {
              toValue: 1,
              duration: 4000,
              easing: Easing.linear
          }
      ).start(() => this.spin())
    }

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

        return (
            <View style={Styles.home}>
                <View style = {Styles.home_title}>
                    <Image style = {{}} source = {require("../assets/art/meta/title.jpg")}/>
                </View>
                <View style = {Styles.home_button}>
                    {Methods.app_link_shake(this.animate, function(){navigate('Intro', {memory : memory})}, require('../assets/art/meta/right_arrow.png'), Styles.home_button_fun, true)}
                </View>
            </View>
        );
    }
}
