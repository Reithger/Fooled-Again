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
      this.state = {script : [], choices : [], block : "intro", index : 0, pause : false, pan : new Animated.ValueXY(), pan2 : new Animated.ValueXY()}
      this.state.script.push(LookupMessenger.script[this.state.block].content[0]);
      this.panResponder = Methods.get_panResponder(this.state.pan);
      this.panResponder2 = Methods.get_panResponder(this.state.pan2);
      const interval = setInterval(function(){
        if(this.state.pause){
          this.state.pause = false;
          return;
        }
        ref = this.state;

        if(ref.index + 1 >= LookupMessenger.script[ref.block].content.length){
          if(ref.block != "end" && LookupMessenger.script[ref.block].content[ref.index].goto.length == 1 && LookupMessenger.script[ref.block].content[ref.index].choice[0] == ""){
            this.setState({index : 0, pause : true, block : LookupMessenger.script[ref.block].content[ref.index].goto[0]});
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
      }.bind(this), 5000);
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

        var action = function(index){
          return function(){
            var next = {};
            next.text = choice.choice[index];
            next.source = "player";
            console.log(next);
            this.state.script.push(next);
            this.setState({choices : [], block : choice.goto[index], index : 0, pause : true});
          }.bind(this)
        }.bind(this)

        return (
            <View style={Styles.messenger}>
                <View style = {Styles.messenger_head}>
                    <Text style = {Styles.messenger_header_text}>Messenger</Text>
                </View>
                <View style = {Styles.messenger_display}>
                    <View style = {Styles.messenger_display_chat}>
                      <View style = {Styles.messenger_display_chat_conversation}>
                        {Methods.messenger_scrawl(this.state.script, LookupMessenger.identity, choice.choice, action)}
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
