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
        }
    };

    constructor(props){
      super(props);
      this.animate = new Animated.Value(0);
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
                {Methods.article_header([], [])}
                {Methods.headline_page(Lookup_Intro.screen, navigate, memory)}
                <View style = {Styles.intro_button}>
                    {Methods.app_link(function(){navigate('Messenger', {memory : memory})}, require('../assets/art/meta/right_arrow.png'), Styles.intro_button_fun)}
                </View>
            </View>
        );
    }
}
