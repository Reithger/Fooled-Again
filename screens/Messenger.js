import React, { Component } from 'react';
import { PanResponder, Animated, Easing, ScrollView, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import Lookup from '../assets/Lookup/Lookup';
import LookupMessenger from '../assets/Lookup/Lookup_Messenger';
import Methods from '../assets/Lookup/Lookup_Architecture';

export default class Junction extends React.Component {
    static navigationOptions = {
        title: 'Messenger',
        headerStyle: Styles.messenger_header,
        headerTitleStyle: {
            fontSize: 0,
        },
        gesturesEnabled : false,
    };

    constructor(props){
      super(props);
      this.animate = new Animated.Value(0)
      this.state = {index : 1, pan : new Animated.ValueXY(), pan2 : new Animated.ValueXY(), continue : false}
      this.panResponder = Methods.get_panResponder(this.state.pan);
      this.panResponder2 = Methods.get_panResponder(this.state.pan2);
      const interval = setInterval(function(){
        if(this.state.index == LookupMessenger.script.length || this.state.continue){
          this.state.continue = false;
          return;
        }
        if(LookupMessenger.script[this.state.index].source != "player"){
          this.setState({index : this.state.index + 1});
        }
      }.bind(this), 2000);
    }

    componentDidMount(){
      Methods.spin(this.animate);
    }

    render() {
        const { navigate } = this.props.navigation;
        var memory = this.props.navigation.getParam("memory", {"initialized": true, "progress": {"char_1" : "success", "char_2" : "failure"}});
        var progress = memory["progress"];

        var display = LookupMessenger.script.slice(0, this.state.index);
        const scale = this.animate.interpolate({
            inputRange: [0, .4, .425, .475, .5, .9, .925, .975, 1],
            outputRange: [1, 1, 1.1, .8, 1, 1, 1.1, .8, 1]
        })

        return (
            <View style={Styles.messenger}>
                <View style = {Styles.messenger_head}>
                    <Text style = {Styles.messenger_header_text}>Messenger</Text>
                </View>
                <View style = {Styles.messenger_display}>
                    <View style = {Styles.messenger_display_friends}>
                      {Methods.messenger_friends(LookupMessenger.identity)}
                    </View>
                    <View style = {Styles.messenger_display_chat}>
                      <View style = {Styles.messenger_display_chat_conversation}>
                        {Methods.messenger_scrawl(display, LookupMessenger.identity)}
                      </View>
                      <View style = {Styles.messenger_display_chat_keyboard}>
                        <Animated.View style = {this.state.index != LookupMessenger.script.length && LookupMessenger.script[this.state.index].source == "player" ? Object.assign({}, Styles.messenger_display_chat_keyboard_touch, {transform : [{scale : scale}]}) : null}>
                          <TouchableOpacity style = {this.state.index != LookupMessenger.script.length && LookupMessenger.script[this.state.index].source == "player" ? {width : '100%', height : '100%', alignItems : 'center', justifyContent : 'center'} : null} onPress = {() => {this.setState({index : this.state.index + 1, continue : true})}}>
                            <Text style = {this.state.index != LookupMessenger.script.length && LookupMessenger.script[this.state.index].source == "player" ? Styles.messenger_display_chat_keyboard_touch_textOn : Styles.messenger_display_chat_keyboard_touch_textOff}>
                              Hey!
                            </Text>
                          </TouchableOpacity>
                        </Animated.View>
                      </View>
                    </View>
                </View>

                <View pointerEvents="box-none" style = {Styles.float}>
                  <Animated.View {...this.panResponder.panHandlers} style = {Object.assign({}, this.state.pan.getLayout(), Styles.button)}>
                      {Methods.app_link(function(){navigate('News', {memory : memory})}, require('../assets/art/meta/news_icon.png'), Styles.button_news)}
                  </Animated.View>
                  <Animated.View {...this.panResponder2.panHandlers} style = {this.state.index >= LookupMessenger.script.length - 3 ? Object.assign({}, this.state.pan2.getLayout(), Styles.button) : null}>
                      {this.state.index >= LookupMessenger.script.length - 3 ? Methods.app_link_shake(this.animate, function(){navigate('Blog', {})}, require('../assets/art/meta/blog.png'), Styles.button_messenger) : null}
                  </Animated.View>
                </View>
            </View>
        );
    }

}
