import React, { Component } from 'react';
import { ScrollView, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import Lookup from '../assets/Lookup/Lookup';
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

        var solution = LookupEnding.answer;
        if(this.state == null){
          this.state = {attempt : new Array(solution.length).fill(null), show : new Array(solution.length).fill(false)};
        }
        var indices = Array.from(Array(solution.length).keys());
        var show = this.state.show;
        var attempt = this.state.attempt;

        var characters = Lookup.characters.map(function(char){
          return Lookup[char];
        });

        return (
            <View style={Styles.solveIntro}>
              <ScrollView>
                    {Methods.article_header([], [])}
                    <ScrollView style = {Styles.solveIntro_body}>
                      {Methods.article(LookupEnding.prepared)}
                    </ScrollView>
                    <View style = {Styles.solve_puzzle}>
                        <ScrollView style = {Styles.solve_puzzle_scroll}>
                            {indices.map(value => (
                              <View key = {value} style = {{}}>
                                  <View style = {Styles.solve_puzzle_scroll_line}>
                                      <TouchableOpacity style = {Styles.solve_puzzle_scroll_line_interact} onPress={() => {attempt[value] = false; this.setState({attempt : attempt, show : show});}}>
                                          <Text style = {Styles.solve_puzzle_scroll_line_interact_text}>
                                            False
                                          </Text>
                                      </TouchableOpacity>
                                      <View style = {Styles.solve_puzzle_scroll_line_image}>
                                          <Image style = {Styles.solve_puzzle_scroll_line_image_format} source = {attempt[value] == false ? characters[value].solve_type.false_image : characters[value].solve_type.unsolved_image} />
                                      </View>
                                      <TouchableOpacity style = {Styles.solve_puzzle_scroll_line_image} onPress={() => {show[value] = !show[value]; this.setState({attempt : attempt, show : show});}}>
                                          <Image style = {Styles.solve_puzzle_scroll_line_image_format} source = {characters[value].portrait_path} />
                                      </TouchableOpacity>
                                      <View style = {Styles.solve_puzzle_scroll_line_image}>
                                          <Image style = {Styles.solve_puzzle_scroll_line_image_format} source = {attempt[value] == true ? characters[value].solve_type.true_image : characters[value].solve_type.unsolved_image} />
                                      </View>
                                      <TouchableOpacity style = {Styles.solve_puzzle_scroll_line_interact} onPress={() => {attempt[value] = true;  this.setState({attempt : attempt, show : show});}}>
                                          <Text style = {Styles.solve_puzzle_scroll_line_interact_text}>
                                              True
                                          </Text>
                                      </TouchableOpacity>
                                  </View>
                                  {show[value] &&
                                  <View style = {Styles.solve_puzzle_scroll_line}>
                                      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
                                        <Text style = {{fontSize : 16}}>
                                            {LookupEnding.recall[value]}
                                        </Text>
                                      </View>
                                  </View>}
                              </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
