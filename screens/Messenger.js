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
        }
    };

    constructor(props){
      super(props);
      this.animate = new Animated.Value(0)
      this.state = {index : 4, pan : new Animated.ValueXY()}
      this.panResponder = Methods.get_panResponder(this.state.pan);
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
        var memory = this.props.navigation.getParam("memory", {"initialized": true, "progress": {"char_1" : "success", "char_2" : "failure"}});
        var progress = memory["progress"];

        var display = LookupMessenger.script.slice(0, this.state.index);

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
                        <TouchableOpacity style = {Styles.messenger_display_chat_keyboard_touch} onPress = {() => {this.setState({index : this.state.index + 1})}}/>
                      </View>
                    </View>
                </View>
                <Animated.View {...this.panResponder.panHandlers} style = {Object.assign({}, this.state.pan.getLayout(), Styles.messenger_button)}>
                    {Methods.app_link(function(){navigate('News', {memory : memory})}, require('../assets/art/meta/news_icon.png'), Styles.messenger_button_fun)}
                </Animated.View>
            </View>
        );
    }

}
