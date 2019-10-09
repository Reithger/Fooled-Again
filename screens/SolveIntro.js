import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import LookupEnding from '../assets/Lookup/Lookup_Ending';

export default class Solve extends React.Component {
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

        console.log(proceed);
        console.log(progress);

        var display_text = proceed ? LookupEnding.prepared.text : LookupEnding.unprepared.text;
        var image = proceed ? LookupEnding.prepared.image : LookupEnding.unprepared.image;
        var solve_text = proceed ? "Solve" : "-";

        return (
            <View style={Styles.solveIntro}>
                <View style = {Styles.solveIntro_image}>
                  <Image style = {Styles.solveIntro_image_format} source = {image} />
                </View>
                <View style = {Styles.solveIntro_description}>
                    {display_text.map(line => (
                      <View key = {line.length} style = {Styles.solveIntro_description_line}>
                        <Text style = {Styles.solveIntro_description_line_text}>
                          {line}
                        </Text>
                      </View>
                    ))}
                </View>
                <View style = {Styles.solveIntro_interact}>
                    <TouchableOpacity style = {Styles.solveIntro_interact_back} onPress={() => navigate('Junction', {memory:memory})}>
                        <Text style = {Styles.solveIntro_interact_back_text}>
                          Back
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {Styles.solveIntro_interact_next} onPress={() => { if(proceed){ navigate('Solve', {memory:memory});}}}>
                        <Text style = {Styles.solveIntro_interact_next_text}>
                          {solve_text}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
