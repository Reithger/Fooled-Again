import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import Lookup from '../assets/Lookup/Lookup';
import Lookup_Solve_Type from '../assets/Lookup/Lookup_Solve_Type';

characters = ["char_1", "char_2", "char_3", "char_4", "char_5", "char_6", "char_7", "char_8", "char_9", "char_10", "char_11"];

lines = [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10]];

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
        var scrolls = new Array(characters.length).fill(false);
        var memory = this.props.navigation.getParam("memory", {"initialized": true, "progress": {"char_1" : "success"}});
        var progress = memory["progress"];

        var title_text_top = "Sleuth";

        var i;
        for(i = 0; i < Object.keys(progress).length; i++){
          var name = Object.keys(progress)[i];
          if(progress[name] == "success"){
            if(characters.indexOf(name) == -1){
              continue;
            }
            scrolls[characters.indexOf(name)] = true;
          }
        }

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
                            {title_text_top}
                        </Text>
                    </View>
                    <View style = {Styles.junction_sleuth_body}>

                        {lines.map(arr => (
                          <View key = {arr[0]} style={Styles.junction_sleuth_body_selection}>
                              {arr.map(index => (
                                <TouchableOpacity key = {characters[index]} style={Styles.junction_sleuth_body_selection_image} onPress={() => navigate('SleuthDescription', {character: characters[index], memory: memory})}>
                                    <Image style={Styles.junction_sleuth_body_selection_image_profile} source={Lookup[characters[index]].portrait_path} />
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
                          {arr.map(index => (
                                <Image key = {index} style = {Styles.junction_solve_body_scroll_image} source = {scrolls[index] ? Lookup_Solve_Type[Lookup[characters[index]].solve_type].solved_image : Lookup_Solve_Type[Lookup[characters[index]].solve_type].unsolved_image}/>
                          ))}
                        </View>
                      ))}

                      <View style = {Styles.junction_solve_body_button}>
                        <TouchableOpacity style={Styles.junction_solve_body_button_touchable} onPress={() => navigate('Solve', { memory: memory })}>
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
