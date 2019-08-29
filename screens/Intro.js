import React, { Component } from 'react';
import { TouchableOpacity, Button, View, Text } from 'react-native';
import Styles from '../assets/Styles';
import Lookup_Intro from '../assets/text/Lookup_Intro.js';

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
        var replay = this.props.navigation.getParam("replay", false);
        var page = this.props.navigation.getParam("page", 0);
        var script = Lookup_Intro["screen"];

        if((replay || !memory["initialized"]) && page < script.length){
          var next_page = page + 1;
          return (
            <View>
              <Image source = {script[page].image} />
              <Text> {script[page].text} </Text>
              <TouchableOpacity onPress={() => navigate("Intro", {memory : memory, page : next_page})} />
            </View>
          );
        }
        else{
          return (
              <View style={Styles.intro}>
                  <View style={Styles.placeholder}>
                      <Text style={Styles.placeholder_text}>Introductory Scene Here</Text>
                  </View>
                  <View style={Styles.navigation}>
                      <TouchableOpacity style={Styles.navigation_junction} onPress={() => navigate('Junction', {memory: memory})}>
                          <Text style={Styles.navigation_junction_text}>Junction</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={Styles.navigation_back} onPress={() => navigate('Home', {memory: memory})}>
                          <Text style={Styles.navigation_back_text}>Back</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          );
        }
    }
}
