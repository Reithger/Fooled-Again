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
      this.state = {messenger : false, pan : new Animated.ValueXY()}
      this.panResponder = Methods.get_panResponder(this.state.pan);
    }

    componentDidMount(){
      Methods.spin(this.animate);
    }

    render() {
        const { navigate } = this.props.navigation;
        var memory = this.props.navigation.getParam("memory", {"initialized": true, "progress": {}});

        if(this.state == null || this.state.messenger == null){
          this.state = {messenger : false};
        }

        var spawnMessenger = function(event : Object){
          if(event.nativeEvent.contentOffset.y >= .7 * event.nativeEvent.contentSize.height){
            this.setState({messenger : true})
          }
        }

        return (
            <View style={Styles.intro}>
              {Methods.article_header([],[],"http://www.canadanewswire.ca.co")}
              <ScrollView style = {Styles.intro_body} onScroll = {spawnMessenger.bind(this)}>
                {Lookup_Intro.screen.map(function(item){
                  return(Methods.article(item));
                })}
                <View style = {Styles.intro_buffer}/>
              </ScrollView>
              <View pointerEvents="box-none" style = {Styles.float}>
                <Animated.View {...this.panResponder.panHandlers} style = {this.state.messenger ? Object.assign({}, Styles.button, this.state.pan.getLayout(), {marginRight : '5%'}) : null}>
                    {Methods.app_link_shake(this.animate, function(){navigate('Hub', {memory : memory})}, require('../assets/art/meta/home.png'), this.state.messenger ? Styles.button_messenger : null, true)}
                </Animated.View>
              </View>
            </View>
        );
    }
}
