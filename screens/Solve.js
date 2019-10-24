import React, { Component } from 'react';
import { ScrollView, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import LookupIntro from '../assets/Lookup/Lookup_Intro';
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

        var images = LookupIntro.screen.map(function(source){
          return source.source[source.format.indexOf('frame')];
        });

        return (
            <View style={Styles.solve}>
              {Methods.article_header([], [])}
              <ScrollView>
                  <ScrollView style = {Styles.solve_article}>
                    {Methods.article(LookupEnding.prepared)}
                  </ScrollView>
                  <View style = {Styles.solve_puzzle}>
                      <ScrollView style = {Styles.solve_puzzle_scroll}>
                          {indices.map(value => (
                            <View key = {value} style = {{marginLeft : '10%', marginRight : '10%'}}>
                                <View style = {Styles.solve_puzzle_scroll_line}>
                                    <TouchableOpacity style = {Styles.solve_puzzle_scroll_line_interact} onPress={() => {attempt[value] = false; this.setState({attempt : attempt, show : show});}}>
                                        <Text style = {Styles.solve_puzzle_scroll_line_interact_text}>
                                          False
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style = {Styles.solve_puzzle_scroll_line_image} onPress={() => {show[value] = !show[value]; this.setState({attempt : attempt, show : show});}}>
                                        <Image style = {Styles.solve_puzzle_scroll_line_image_format} source = {images[value]} />
                                    </TouchableOpacity>
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
