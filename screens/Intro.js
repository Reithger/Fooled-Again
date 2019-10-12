import React, { Component } from 'react';
import { ScrollView, TouchableOpacity,  View, Text, Image } from 'react-native';
import Methods from '../assets/Lookup/Lookup_Architecture';
import Styles from '../assets/Styles';
import Lookup_Intro from '../assets/Lookup/Lookup_Intro.js';

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
                {Methods.article_header([{function : back.bind(this), image : require('../assets/art/meta/left_arrow.png')}],
                                       [{function : forward.bind(this), image : require('../assets/art/meta/right_arrow.png')}])}
                <ScrollView style = {Styles.intro_body}>
                  {Methods.article(Lookup_Intro["screen"][page])}
                  <View style = {Styles.intro_body_more}>
                      <View style = {Styles.intro_body_more_top}>
                          <Text style = {Styles.intro_body_more_top_text}>
                              Read More
                          </Text>
                      </View>
                      {Methods.article_descriptor(Lookup_Intro["screen"][(page + 2) % Lookup_Intro["screen"].length])}
                      {Methods.article_descriptor(Lookup_Intro["screen"][(page + 3) % Lookup_Intro["screen"].length])}
                  </View>
                </ScrollView>
            </View>
        );
    }
}
