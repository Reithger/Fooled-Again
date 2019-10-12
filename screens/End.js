import React, { Component } from 'react';
import { ScrollView, Button, View, Text, Image, TouchableOpacity } from 'react-native';
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

    render() {
        const { navigate } = this.props.navigation;
        var memory = this.props.navigation.getParam("memory", {"initialized" : true, "progress" : {"char_1" : "success"}});
        var victory = this.props.navigation.getParam("pass", false);
        if(this.state == null){
          this.state = {page : 0};
        }
        var script = LookupEnding[victory ? "success" : "failure"];

        var back = function(){
          navigate('Solve', {memory : memory});
        }
        var forward = function(){
          navigate('Home', {memory : memory, new: true});
        }
        return (
            <View style={Styles.end}>
                {Methods.article_header([{function : back.bind(this), image : require('../assets/art/meta/left_arrow.png')}], [{function : forward.bind(this), image : require('../assets/art/meta/right_arrow.png')}])}
                <ScrollView style = {Styles.end_scroll}>
                    {Methods.article(victory ? LookupEnding.success : LookupEnding.failure)}
                </ScrollView>
            </View>
        );
    }
}
