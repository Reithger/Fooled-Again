import React, { Component } from 'react';
import {Animated, Easing, ScrollView, ImageBackground, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';
import Lookup from '../assets/Lookup/Lookup_Hub';
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
      this.state = {messenger : {}, pan : new Animated.ValueXY(), ready : false}
      this.panResponder = Methods.get_panResponder(this.state.pan);
      const interval = setInterval(function(){
        this.setState({});
      }.bind(this), 1000)
    }

    componentDidMount(){
      Methods.spin(this.animate);
      this.setState({ready : true});
    }

    render() {
        const { navigate } = this.props.navigation;
        var d = new Date();

        var key = 0;
        if(!this.state.ready){
          return(
            <View>
              <Text>
                Loading
              </Text>
            </View>
          )
        }
        else{
          return (
            <View style = {{}}>
              <View style = {Styles.hub_background}>
                <Image style = {Styles.hub_background_image} source = {require("../assets/art/meta/background2.jpg")}/>
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
                    <Text style = {Styles.hub_header_date_text}> {Lookup.days[d.getDay()]}, {Lookup.months[d.getMonth()]} {d.getDate()} </Text>
                  </View>
                </View>
                <View style = {Styles.hub_body}>
                  {[...Array(Lookup.app_height).keys()].map(function(i){
                    return(
                      <View key = {key++} style = {Styles.hub_body_interact}>
                          {[...Array(Lookup.app_width).keys()].map(function(j){
                            var index = i * Lookup.app_width + j;
                            if(index >= Lookup.app.length){
                              return(<View key = {key++} style = {Styles.hub_body_interact_icon}/>)
                            }
                            var curr = Lookup.app[index];
                            return(
                              <View key = {key++} style = {Styles.hub_body_interact_icon}>
                                <TouchableOpacity style = {Styles.hub_body_interact_icon_press} onPress = {function(){navigate(curr.goto, {})}}>
                                  <Image style = {Styles.hub_body_interact_icon_press_image} source = {curr.image}/>
                                </TouchableOpacity>
                                <Text style = {Styles.hub_body_interact_icon_title}>{curr.title}</Text>
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
}
