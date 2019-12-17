import React, { Component } from 'react';
import {Animated, ScrollView, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import LookupIntro from '../assets/Lookup/Lookup_Intro';
import LookupEnding from '../assets/Lookup/Lookup_Ending';
import Methods from '../assets/Lookup/Lookup_Architecture';
const DeviceInfo = require('react-native-device-detection');

tablet = DeviceInfo.isTablet;

export default class Solve extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: Styles.blog_header,
        headerTitleStyle: {
            fontSize: 0,
        },
        gesturesEnabled : false,
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
            <View style = {Styles.blog}>
              <ScrollView style = {Styles.blog_scroll}>

                <View style = {Styles.blog_scroll_header}>
                  <View style = {Styles.blog_scroll_header_image}>
                    <Image style = {Styles.blog_scroll_header_image_format} source = {require('../assets/art/blog/floral.png')}/>
                  </View>
                  <Text style = {Styles.blog_scroll_header_title}>The Truth Review</Text>
                </View>

                {Methods.blog(LookupEnding.prepared)}

                {[...Array(LookupEnding.answer.length).keys()].map(index => (
                  <View key = {index} style = {Styles.blog_scroll_puzzle}>
                    <View style = {Styles.blog_scroll_puzzle_buffer}/>
                    <View style = {Object.assign({}, Styles.blog_scroll_puzzle_body, response[index] == null ? {backgroundColor : '#182628'} : response[index] ? {backgroundColor : '#228b22'} : {backgroundColor : '#800000'})}>
                      <View style = {Styles.blog_scroll_puzzle_body_grid}>

                        <View style = {Styles.blog_scroll_puzzle_body_grid_text}>
                          <View style = {Styles.blog_scroll_puzzle_body_grid_text_align}>
                            <Text style = {Styles.blog_scroll_puzzle_body_grid_text_align_format}>
                              {LookupIntro.screen[index].source[LookupIntro.screen[index].format.indexOf("header")]}
                            </Text>
                          </View>
                        </View>

                        <View style = {Styles.blog_scroll_body_grid_image}>
                          <View style = {Styles.blog_scroll_puzzle_body_grid_image_align}>
                            <Image style = {Styles.blog_scroll_puzzle_body_grid_image_align_format} source = {LookupIntro.screen[index].source[LookupIntro.screen[index].format.indexOf("frame")]}/>
                          </View>
                        </View>

                        <View style = {Styles.blog_scroll_puzzle_body_grid_button}>
                          <TouchableOpacity style = {Styles.blog_scroll_puzzle_body_grid_button_region} onPress = {() => {response[index] = response[index] == null ? true : !response[index]; this.setState({response : response})}}>
                            <View style = {Styles.blog_scroll_puzzle_body_grid_button_region_text}>
                              <Text style = {Styles.blog_scroll_puzzle_body_grid_button_region_text_format}>{response[index] == null ? '?' : response[index] ? 'True' : 'False'}</Text>
                            </View>
                          </TouchableOpacity>
                        </View>

                      </View>
                   </View>
                  </View>
                ))}

                <View style = {Styles.blog_scroll_floor_buffer}/>
                <View style = {Styles.blog_scroll_floor}>
                  <TouchableOpacity style = {Styles.blog_scroll_floor_button} onPress = {() => {response.indexOf(null) == -1 ? navigate('End', {response : response}) : {}}}>
                    <Text style = {Styles.blog_scroll_floor_button_text}>Post</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>

              <View pointerEvents="box-none" style = {Styles.float}>
                <Animated.View {...this.panResponder.panHandlers} style = {Object.assign({}, this.state.pan.getLayout(), Styles.button)}>
                    {Methods.app_link(function(){navigate('News', {})}, require('../assets/art/meta/news_icon.png'), Styles.button_news)}
                </Animated.View>
                <Animated.View {...this.panResponder2.panHandlers} style = {Object.assign({}, this.state.pan2.getLayout(), Styles.button)}>
                    {Methods.app_link(function(){navigate('Messenger', {})}, require('../assets/art/meta/messenger.png'), Styles.button_messenger)}
                </Animated.View>
              </View>

            </View>
        );
    }
}
