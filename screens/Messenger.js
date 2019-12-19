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
      this.state = {script : [], block : "intro", index : 0, pan : new Animated.ValueXY(), pan2 : new Animated.ValueXY()}
      this.state.script.push(LookupMessenger.script[this.state.block].content[0]);
      this.panResponder = Methods.get_panResponder(this.state.pan);
      this.panResponder2 = Methods.get_panResponder(this.state.pan2);
      const interval = setInterval(function(){
        ref = this.state;

        if(ref.index + 1 >= LookupMessenger.script[ref.block].content.length){
          if(ref.block != "end" && LookupMessenger.script[ref.block].content[ref.index].goto.length == 1 && LookupMessenger.script[ref.block].content[ref.index].choice[0] == ""){
            this.setState({index : 0, block : LookupMessenger.script[ref.block].content[ref.index].goto[0]});
            this.state.script.push(LookupMessenger.script[this.state.block].content[this.state.index]);
            this.setState({});
          }
          return;
        }
        if(ref.index + 1 < LookupMessenger.script[ref.block].content.length){
          this.setState({index : this.state.index + 1});
          this.state.script.push(LookupMessenger.script[ref.block].content[this.state.index]);
          this.setState({});
        }
      }.bind(this), 2000);
    }

    componentDidMount(){
      Methods.spin(this.animate);
    }

    render() {
        const { navigate } = this.props.navigation;
        var ref = LookupMessenger.script;
        const scale = this.animate.interpolate({
            inputRange: [0, .4, .425, .475, .5, .9, .925, .975, 1],
            outputRange: [1, 1, 1.1, .8, 1, 1, 1.1, .8, 1]
        })

        var choice = {goto : []};
        if(this.state.index < ref[this.state.block].content.length && ref[this.state.block].content[this.state.index].hasOwnProperty("choice")){
          choice = ref[this.state.block].content[this.state.index];
        }

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
                        {Methods.messenger_scrawl(this.state.script, LookupMessenger.identity)}
                      </View>
                      <View style = {Styles.messenger_display_chat_keyboard}>
                        {[...Array(choice.goto.length).keys()].map(function(index){
                          if(choice.choice[index] == ""){
                            return null;
                          }
                          return(
                            <Animated.View key = {index} style = {Object.assign({}, Styles.messenger_display_chat_keyboard_touch, {transform : [{scale : scale}]})}>
                              <TouchableOpacity style = {Styles.messenger_display_chat_keyboard_touch_interact} onPress = {() => {this.setState({index : 0, block : choice.goto[index]}); this.state.script.push(LookupMessenger.script[choice.goto[index]].content[0]);}}>
                                <Text style = {Styles.messenger_display_chat_keyboard_touch_ineract_text}>
                                  {choice.choice[index]}
                                </Text>
                              </TouchableOpacity>
                            </Animated.View>
                          )
                        }.bind(this))
                        }

                      </View>
                    </View>
                </View>

                <View pointerEvents="box-none" style = {Styles.float}>
                  <Animated.View {...this.panResponder.panHandlers} style = {Object.assign({}, this.state.pan.getLayout(), Styles.button)}>
                      {Methods.app_link(function(){navigate('News', {})}, require('../assets/art/meta/news_icon.png'), Styles.button_news)}
                  </Animated.View>
                  <Animated.View {...this.panResponder2.panHandlers} style = {this.state.block == "end" ? Object.assign({}, this.state.pan2.getLayout(), Styles.button) : null}>
                      {this.state.block == "end" ? Methods.app_link_shake(this.animate, function(){navigate('Blog', {})}, require('../assets/art/meta/blog.png'), Styles.button_messenger) : null}
                  </Animated.View>
                </View>
            </View>
        );
    }

}
