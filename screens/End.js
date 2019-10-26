import React, { Component } from 'react';
import { Animated, ScrollView, Button, View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';
import LookupEnding from '../assets/Lookup/Lookup_Ending';
import Methods from '../assets/Lookup/Lookup_Architecture';

export default class Junction extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: Styles.news_header,
        headerTitleStyle: {
            fontSize: 0,
        }
    };

    constructor(props){
      super(props);
      this.animate = new Animated.Value(0)
      this.state = {pan : new Animated.ValueXY()}
      this.panResponder = Methods.get_panResponder(this.state.pan);
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
        return (
            <View style={Styles.end}>
                {Methods.article_header([], [], "http://www.canadanewswire.ca")}
                <ScrollView style = {Styles.end_scroll}>
                    {Methods.article(result ? LookupEnding.success : LookupEnding.failure)}
                </ScrollView>
                <Animated.View {...this.panResponder.panHandlers} style = {Object.assign({}, this.state.pan.getLayout(), Styles.button)}>
                    {Methods.app_link_shake(this.animate, function(){navigate(!result ? 'Blog' : 'Home', {})}, !result ? require('../assets/art/meta/blog.png') : require('../assets/art/meta/title.png'), Styles.button_blog)}
                </Animated.View>
            </View>
        );
    }
}
