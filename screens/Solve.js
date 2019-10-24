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

    constructor(props){
      super(props);
      console.log(LookupEnding.answer);
      this.state = {show : new Array(LookupEnding.answer.length).fill(false), attempt : new Array(LookupEnding.answer.length).fill(false)}
    }

    render() {
        const { navigate } = this.props.navigation;

        if(this.state.show == null){
          this.state.show = new Array(LookupEnding.answer.length).fill(false);
        }
        if(this.state.attempt == null){
          this.state.attempt = new Array(LookupEnding.answer.length).fill(null);
        }

        var solution = LookupEnding.answer;
        var indices = Array.from(Array(solution.length).keys());

        var images = LookupIntro.screen.map(function(source){
          return {image : source.source[source.format.indexOf('frame')], hint : LookupEnding.recall[LookupIntro.screen.indexOf(source)]};
        });


        var reject = function(index){
          return(function(){
            this.state.attempt[index] = false;
            this.setState();
          })
        }.bind(this)

        var accept = function(index){
          return(function(){
            this.state.attempt[index] = true;
            this.setState();
          })
        }.bind(this)

        var toggle_show = function(index){
          return(function(){
            this.state.show[index] = !this.state.show[index];
            this.setState();
          })
        }.bind(this)

        return (
            <View style={Styles.solve}>
              {Methods.article_header([], [])}
              <ScrollView>
                  <ScrollView style = {Styles.solve_article}>
                    {Methods.article(LookupEnding.prepared)}
                  </ScrollView>
                  {Methods.puzzle_set(reject, accept, toggle_show, this.state.show, images)}
              </ScrollView>
            </View>
        );
    }
}
