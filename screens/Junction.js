import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import Lookup from '../assets/Lookup/Lookup';

export default class Junction extends React.Component {
    static navigationOptions = {
        title: 'Junction',
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

        var lines = Lookup.lines.map(function(arr){
          return arr.map(function(index){
              return Lookup.characters[index];
          })
        });

        return (
            <View style={Styles.junction}>
                <View style={Styles.junction_sleuth}>
                    <View style={Styles.junction_sleuth_title}>
                        <TouchableOpacity style = {Styles.junction_sleuth_title_back} onPress = {() => navigate("Intro", {memory : memory})}>
                          <Text style = {Styles.junction_sleuth_title_back_text}>
                            Back
                          </Text>
                        </TouchableOpacity>
                        <Text style={Styles.junction_sleuth_title_text}>
                            Sleuth
                        </Text>
                    </View>
                    <View style = {Styles.junction_sleuth_body}>

                        {lines.map(arr => (
                          <View key = {arr[0]} style={Styles.junction_sleuth_body_selection}>
                              {arr.map(char => (
                                <TouchableOpacity key = {char} style={Styles.junction_sleuth_body_selection_image} onPress={() => navigate('SleuthDescription', {character: char, memory: memory})}>
                                    <Image style={Styles.junction_sleuth_body_selection_image_profile} source={Lookup[char].portrait_path} />
                                </TouchableOpacity>
                              ))}
                          </View>
                        ))}

                      </View>
                </View>

                <View style={Styles.junction_solve}>
                    <View style={Styles.junction_solve_title}>
                        <Text style={Styles.junction_solve_title_text}>
                            Solve
                        </Text>
                    </View>
                    <View style = {Styles.junction_solve_body}>

                      {lines.map(arr => (
                        <View key = {arr[0]} style = {Styles.junction_solve_body_scroll}>
                          {arr.map(char => (
                              <View key = {char} style = {Styles.junction_solve_body_scroll_image}>
                                <Image key = {char} style = {Styles.junction_solve_body_scroll_image_format} source = {progress[char] == "success" ? Lookup[char].solve_type.solved_image : Lookup[char].solve_type.unsolved_image}/>
                              </View>
                          ))}
                        </View>
                      ))}

                      <View style = {Styles.junction_solve_body_button}>
                        <TouchableOpacity style={Styles.junction_solve_body_button_touchable} onPress={() => navigate('SolveIntro', { memory: memory })}>
                          <Text style={Styles.junction_solve_body_button_touchable_text}>
                              Continue
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                </View>
            </View>
        );
    }

}
