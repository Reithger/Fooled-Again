import React, { Component } from 'react';
import { ScrollView, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import LookupEnding from '../assets/Lookup/Lookup_Ending';
import Methods from '../assets/Lookup/Lookup_Architecture';

export default class Solve extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: Styles.news_header,
        headerTitleStyle: {
            fontSize: 0,
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        var memory = this.props.navigation.getParam("memory", {"initialized": true, "progress": {"char_1" : "success", "char_2" : "failure"}});
        var progress = memory["progress"];
        var proceed = true;

        var i;
        for(i = 0; i < Object.keys(progress).length; i++){
          var name = Object.keys(progress)[i];
          if(progress[name] != "success"){
            proceed = false;
          }
        }
        var script = proceed ? LookupEnding.prepared : LookupEnding.unprepared;

        var back = function(){
          navigate('Junction', {memory:memory})
        };

        var forward = function(){
           if(proceed){
             navigate('Solve', {memory:memory});
           }
        };

        return (
            <View style={Styles.solveIntro}>
                {Methods.article_header([{function : back.bind(this), image : require('../assets/art/meta/left_arrow.png')}],
                                       [{function : forward.bind(this), image : proceed ? require('../assets/art/meta/right_arrow.png') : null}])}
                <ScrollView style = {Styles.solveIntro_body}>
                  {Methods.article(script)}
                </ScrollView>
            </View>
        );
    }
}
