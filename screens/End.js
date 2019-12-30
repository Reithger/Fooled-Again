import React, { Component } from 'react';
import { Animated, ScrollView, Button, View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';
import LookupEnding from '../assets/Lookup/Lookup_Ending';
import Methods from '../assets/Lookup/Lookup_Architecture';

const DeviceInfo = require('react-native-device-detection');
tablet = DeviceInfo.isTablet;

export default class Junction extends React.Component {
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
      this.animate = new Animated.Value(0)
      this.state = {pan : new Animated.ValueXY(), pan2 : new Animated.ValueXY()}
      this.panResponder = Methods.get_panResponder(this.state.pan);
      this.panResponder2 = Methods.get_panResponder(this.state.pan2);
    }

    componentDidMount(){
      Methods.spin(this.animate);
    }

    render() {
        const { navigate } = this.props.navigation;
        var response = this.props.navigation.getParam("response", [false, false, false, false, true, false, true, false]);
        var result = true;
        var i;
        for(i = 0; i < response.length; i++){
          if(response[i] != LookupEnding.answer[i]){
            result = false;
            break;
          }
        }

        const scale = this.animate.interpolate({
            inputRange: [0, .8, .85, .95, 1, 1.8, 1.85, 1.95, 2],
            outputRange: [1, 1, 1.3, .8, 1, 1, 1.3, .8, 1]
        })
        return (
            <View style={Styles.end}>
                {Methods.article_header([], [], "http://www.canadanewswire.ca")}
                <ScrollView style = {Styles.end_scroll}>
                    {Methods.article(result ? LookupEnding.success : LookupEnding.failure)}
                </ScrollView>

                <View pointerEvents="box-none" style = {Styles.float_alt_end}>
                  <View style = {{flex : 10}}/>
                  <Animated.View {...this.panResponder2.panHandlers} style = {Object.assign({}, this.state.pan2.getLayout(), Styles.end_badge, result ? {flex : 6} : {}, {transform : [{scale : scale}]})}>
                      <Image style = {Styles.end_badge_image} source = {result ? LookupEnding.success.badge : LookupEnding.failure.badge}/>
                  </Animated.View>
                  <View style = {{flex : result ? 2 : 1}}/>
                  <Animated.View {...this.panResponder.panHandlers} style = {Object.assign({}, this.state.pan.getLayout(), Styles.button, {flex : result ? 2 : 1})}>
                      {Methods.app_link_shake(this.animate, function(){navigate(!result ? 'Blog' : 'Home', {})}, !result ? require('../assets/art/meta/blog.png') : require('../assets/art/meta/title.png'), Styles.button_blog)}
                  </Animated.View>
                  <View style = {{flex : 1}}/>
                </View>

            </View>
        );
    }
}
