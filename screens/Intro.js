import React, { Component } from 'react';
import { ScrollView, TouchableOpacity,  View, Text, Image } from 'react-native';
import Methods from '../assets/Lookup/Lookup_Architecture';
import Styles from '../assets/Styles';
import Lookup_Intro from '../assets/Lookup/Lookup_Intro.js';

export default class Junction extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: {
            height: 0,
        },
        headerTitleStyle: {
            fontSize: 0,
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        var memory = this.props.navigation.getParam("memory", {"initialized": true, "progress": {}});
        if(this.state == null){
          this.state = {page : 0};
        }
        var page = this.state.page;

        var back = function(){
          page == 0 ? navigate('Home', {memory: memory}) : this.setState({page : page - 1});
        };

        var forward = function(){
          page + 1 >= Lookup_Intro["screen"].length ? navigate('Junction', {memory: memory}) : this.setState({page : page + 1});
        };

        return (
            <View style={Styles.intro}>
                {Methods.article_header(back.bind(this), forward.bind(this))}
                <ScrollView style = {Styles.intro_body}>
                  {Methods.article(Lookup_Intro["screen"][page])}
                </ScrollView>
            </View>
        );
    }
}
