import React, { Component } from 'react';
import {Animated, ScrollView, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import LookupIntro from '../assets/Lookup/Lookup_Intro';
import LookupEnding from '../assets/Lookup/Lookup_Ending';
import Methods from '../assets/Lookup/Lookup_Architecture';

export default class Solve extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: Styles.blog_header,
        headerTitleStyle: {
            fontSize: 0,
        }
    };

    constructor(props){
      super(props);
      this.animate = new Animated.Value(0)
      this.state = {pan : new Animated.ValueXY(), pan2 : new Animated.ValueXY(), response : new Array(LookupEnding.answer.length).fill(null)}
      this.panResponder = Methods.get_panResponder(this.state.pan);
      this.panResponder2 = Methods.get_panResponder(this.state.pan2);
    }

    render() {
        const { navigate } = this.props.navigation;
        if(this.state.response == null){
          this.state.response = new Array(LookupEnding.answer.length).fill(null);
        }

        var response = this.state.response;

        return (
            <View style = {{height : '100%', backgroundColor : '#3b945e', width : '100%'}}>
              <ScrollView>
                <View style = {{aspectRatio : 4, backgroundColor : '#65ccb8', width : '100%', alignItems : 'flex-end', justifyContent : 'flex-end', borderBottomWidth : 2}}>
                  <View style = {{position : 'absolute', height : '100%', width : '100%'}}>
                    <Image style = {{flex : 1, width : null, height : null, resizeMode : 'cover'}} source = {require('../assets/art/blog/floral.png')}/>
                  </View>
                  <Text style = {{fontSize : 54, fontWeight : 'bold', marginRight : '2%', color : 'white'}}>The Name of a Blog!</Text>
                </View>
                {Methods.blog(LookupEnding.prepared)}
                {[...Array(LookupEnding.answer.length).keys()].map(index => (
                  <View key = {index} style = {Object.assign({}, {paddingLeft : '5%', paddingRight : '5%', borderWidth : 4, borderColor : '#41a3b3', width : '100%', aspectRatio : 4, flexDirection : 'row', justifyContent : 'space-around', marginTop : '3%'}, response[index] == null ? {backgroundColor : '#182628'} : response[index] ? {backgroundColor : '#7cfc00'} : {backgroundColor : '#ff2400'})}>
                    <View style = {{width : '30%', alignItems : 'center', justifyContent : 'center'}}>
                      <Text style = {{fontSize : 22, color : '#f2f2f2'}}>{LookupIntro.screen[index].source[LookupIntro.screen[index].format.indexOf("header")]}</Text>
                    </View>
                    <View style = {{width : '30%', aspectRatio : 5/3, justifyContent : 'space-around', flexDirection : 'column'}}>
                      <Image style = {{flex : 1, width : null, height : null, resizeMode : 'contain'}} source = {LookupIntro.screen[index].source[LookupIntro.screen[index].format.indexOf("frame")]}/>
                    </View>
                    <TouchableOpacity style = {{width : '20%', aspectRatio : 2, alignItems : 'center', justifyContent : 'center'}} onPress = {() => {response[index] = response[index] == null ? true : !response[index]; this.setState({response : response})}}>
                      <View style = {{alignItems : 'center', justifyContent : 'center', width : '80%', aspectRatio : 1}}>
                        <Text style = {{fontSize : 36, color : '#f2f2f2'}}>{response[index] == null ? '?' : response[index] ? 'True' : 'False'}</Text>
                      </View>
                    </TouchableOpacity>
                 </View>
                ))}
                <View style = {{width : '100%', aspectRatio : 10}}/>
                <View style = {{borderTopWidth : 2, width : '100%', aspectRatio : 5, paddingTop : '5%', backgroundColor : '#41b3a3', flexDirection : 'column', alignItems : 'flex-end', justifyContent : 'space-around'}}>
                  <TouchableOpacity style = {{marginRight : '5%', borderRadius : 15, backgroundColor : '#f2f2f2', width : '20%', aspectRatio : 4, alignItems : 'center', justifyContent : 'center'}} onPress = {() => {navigate('End', {response : response})}}>
                    <Text style = {{fontSize : 22}}>Post</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
              <Animated.View {...this.panResponder.panHandlers} style = {Object.assign({}, this.state.pan.getLayout(), Styles.button)}>
                  {Methods.app_link(function(){navigate('News', {})}, require('../assets/art/meta/news_icon.png'), Styles.button_news)}
              </Animated.View>
              <Animated.View {...this.panResponder2.panHandlers} style = {Object.assign({}, this.state.pan2.getLayout(), Styles.button, {marginLeft : '25%'})}>
                  {Methods.app_link(function(){navigate('Messenger', {})}, require('../assets/art/meta/messenger.png'), Styles.button_messenger)}
              </Animated.View>
            </View>
        );
    }
}
