import React, { Component } from 'react';
import {Animated, Easing, ScrollView, ImageBackground, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';
import Methods from '../assets/Lookup/Lookup_Architecture';
const DeviceInfo = require('react-native-device-detection');

tablet = DeviceInfo.isTablet;

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
      const interval = setInterval(function(){
        this.setState({});
      }.bind(this), 1000)
    }

    componentDidMount(){
      Methods.spin(this.animate);
    }

    render() {
        const { navigate } = this.props.navigation;

        var wid = 4;
        var hei = 5;
        var d = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        var titles = ["News", "Messenger", "Blog", "Notes"];
        var goto = ["News", "Messenger", "Blog", "Hub"];
        var images = [require("../assets/art/meta/news_icon.png"), require("../assets/art/meta/messenger.png"), require("../assets/art/meta/blog.png"), require("../assets/art/meta/icon.png")];
        var key = 0;

        return (
          <View style = {{}}>
            <View style = {Styles.hub_background}>
              <Image style = {Styles.hub_background_image} source = {require("../assets/art/meta/background1.png")}/>
            </View>
            <View style={Styles.hub}>
              <View style = {Styles.hub_header}>
                <View style = {Styles.hub_header_time}>
                  <Text style = {Styles.hub_header_time_text}> {d.getHours()%12}:{d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()} </Text>
                  <View style = {Styles.hub_header_time_super}>
                    <Text style = {Styles.hub_header_time_super_text}>{d.getHours() % 24 >= 12 ? "PM" : "AM"}</Text>
                  </View>
                </View>
                <View style = {Styles.hub_header_date}>
                  <Text style = {Styles.hub_header_date_text}> {days[d.getDay()]}, {months[d.getMonth()]} {d.getDate()} </Text>
                </View>
              </View>
              <View style = {Styles.hub_body}>
                {[...Array(hei).keys()].map(function(i){
                  return(
                    <View key = {key++} style = {Styles.hub_body_interact}>
                        {[...Array(wid).keys()].map(function(j){
                          var index = i * wid + j;
                          var tap = titles[index];
                          var img = images[index];
                          var targ = goto[index];
                          if(tap == null){
                            return(<View key = {key++} style = {Styles.hub_body_interact_icon}/>)
                          }
                          return(
                            <View key = {key++} style = {Styles.hub_body_interact_icon}>
                              <TouchableOpacity style = {Styles.hub_body_interact_icon_press} onPress = {function(){navigate(targ, {})}}>
                                <Image style = {Styles.hub_body_interact_icon_press_image} source = {img}/>
                              </TouchableOpacity>
                              <Text style = {Styles.hub_body_interact_icon_title}>{tap}</Text>
                            </View>
                          )
                        })}
                    </View>
                  )
                })}
              </View>
            </View>
          </View>
        );
    }
}
