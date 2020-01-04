import React, { Component } from 'react';
import {Animated, Easing, ScrollView, ImageBackground, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';
import Methods from '../assets/Lookup/Lookup_Architecture';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: Styles.title_header,
        headerTitleStyle: {
            fontSize: 0,
        },
        gesturesEnabled : false,
    };

    constructor(props){
      super(props);
      this.animate = new Animated.Value(0)
      this.state = {messenger : false, pan : new Animated.ValueXY()}
      this.panResponder = Methods.get_panResponder(this.state.pan);
    }

    componentDidMount(){
      Methods.spin(this.animate);
    }

    render() {
        const { navigate } = this.props.navigation;

        var titles = [["News", "Messenger", "Blog", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]];
        var goto = [["News", "Messenger", "Blog", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]];
        var images = [[require("../assets/art/meta/news_icon.png"), require("../assets/art/meta/messenger.png"), require("../assets/art/meta/blog.png"), ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]];
        var key = 0;

        return (
            <View style={{width : '100%', height : '100%', flexDirection : 'column', justifyContent : 'space-around', backgroundColor : '#a282a3'}}>
              <View style = {{width : '100%', aspectRatio : 5, alignItems : 'flex-start', justifyContent : 'center', flexDirecton : 'column'}}>
                <Text style = {{fontSize : 32}}> The Time </Text>
              </View>
                {[...Array(titles.length).keys()].map(function(i){
                  return(
                    <View key = {key++} style = {{flexDirection : 'row', justifyContent : 'space-around', alignItems : 'center'}}>
                        {[...Array(titles[i].length).keys()].map(function(j){
                          var tap = titles[i][j];
                          var img = images[i][j];
                          if(tap == ""){
                            return(<View key = {key++} style = {{width : '20%', aspectRatio : 1}}/>)
                          }
                          return(
                            <View key = {key++} style = {{width : '20%', aspectRatio : 1, flexDirection : 'column', alignItems : 'center', justifyContent : 'space-between'}}>
                              <TouchableOpacity style = {{backgroundColor : '#efefef', width : '100%', aspectRatio : 1, borderRadius : 15}} onPress = {function(){navigate(goto[i][j], {})}}>
                                <Image style = {{flex : 1, width : null, height : null, resizeMode : 'cover'}} source = {img}/>
                              </TouchableOpacity>
                              <Text style = {{}}>{tap}</Text>
                            </View>
                          )
                        })}
                    </View>
                  )
                })}
            </View>
        );
    }
}
