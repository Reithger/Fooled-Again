import React, { Component } from 'react';
import { ScrollView, Button, View, Text, Image, TouchableOpacity } from 'react-native';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';
import LookupEnding from '../assets/Lookup/Lookup_Ending';
import Methods from '../assets/Lookup/Lookup_Architecture';

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
        var memory = this.props.navigation.getParam("memory", {"initialized" : true, "progress" : {"char_1" : "success"}});
        var victory = this.props.navigation.getParam("pass", false);
        if(this.state == null){
          this.state = {page : 0};
        }
        var page = this.state.page;
        var script = LookupEnding[victory ? "success" : "failure"];

        var back = function(){
          page == 0 ? navigate('Solve', {memory : memory}) : this.setState({page : page + 1}).bind(this);
        }
        var forward = function(){
          page + 1 >= script.format.length ? navigate('Home', {memory : memory, new: true}) : this.setState({page : page - 1}).bind(this);
        }
        return (
            <View style={Styles.end}>
                {Methods.article_header(back, forward)}
                <ScrollView style = {Styles.end_scroll}>
                    {Methods.article(victory ? LookupEnding.success : LookupEnding.failure)}
                </ScrollView>
            </View>
        );
    }
}
