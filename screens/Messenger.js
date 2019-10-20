import React, { Component } from 'react';
import { Animated, Easing, ScrollView, Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import Lookup from '../assets/Lookup/Lookup';
import LookupMessenger from '../assets/Lookup/Lookup_Messenger';
import Methods from '../assets/Lookup/Lookup_Architecture';

export default class Junction extends React.Component {
    static navigationOptions = {
        title: 'Messenger',
        headerStyle: Styles.messenger_header,
        headerTitleStyle: {
            fontSize: 0,
        }
    };

    constructor(props){
      super(props);
      this.animate = new Animated.Value(0)
    }

    componentDidMount(){
      this.spin()
    }

    spin () {
      this.animate.setValue(0)
      Animated.timing(
          this.animate,
          {
              toValue: 1,
              duration: 4000,
              easing: Easing.linear
          }
      ).start(() => this.spin())
    }

    render() {
        const { navigate } = this.props.navigation;
        var memory = this.props.navigation.getParam("memory", {"initialized": true, "progress": {"char_1" : "success", "char_2" : "failure"}});
        var progress = memory["progress"];

        if(this.state == null){
          this.state = {index : 0};
        }
        console.log(Object.keys(LookupMessenger.identity));
        var display = LookupMessenger.script.slice(0, this.state.index);
        console.log(this.state.index);
        console.log(display);
        var i = 0;

        return (
            <View style={Styles.junction}>
                <View style = {{height : '6%', backgroundColor : '#0e1f56', alignItems : 'center', justifyContent : 'center'}}>
                    <Text style = {{color : 'white', fontSize : 26}}>Messenger</Text>
                </View>
                <View style = {{flexDirection : 'row', height : '100%', width : '100%'}}>
                    <View style = {{width : '35%', height : '100%', borderRightWidth : 2, borderColor : '#0e1f56', backgroundColor : '#0e1f56'}}>
                      <ScrollView style = {{}}>

                        {Object.keys(LookupMessenger.identity).map(function(index){
                          return(
                            <TouchableOpacity key = {index} style = {{}} onPress = {() => {}}>
                              <View style = {i++ % 2 == 0 ? {width : '100%', aspectRatio : 4, backgroundColor : '#3b5998', flexDirection : 'row', alignItems : 'center'} : {width : '100%', aspectRatio : 4, backgroundColor : '#6d84b4', flexDirection : 'row', alignItems : 'center'}}>
                                <View style = {{width : '5%', aspectRatio : 1}}/>
                                <View style = {{width : '20%', justifyContent : 'center', aspectRatio : 1}}>
                                  <Image style = {{height : null, width : null, flex : 1, resizeMode : 'cover', overflow : 'hidden', borderRadius : 9999}} source = {LookupMessenger.identity[index].image}/>
                                </View>
                                <View style = {{width : '10%', aspectRatio : 1}}/>
                                <View style = {{width : '65%', alignItems : 'flex-start', justifyContent : 'center'}}>
                                  <Text style = {{}}>{LookupMessenger.identity[index].name}</Text>
                                </View>
                              </View>
                            </TouchableOpacity>
                        )})}

                      </ScrollView>
                    </View>
                    <View style = {{width : '65%', height : '94%'}}>
                      <ScrollView style = {{height : '80%'}}>
                        { Array.from(Array(display.length).keys()).map(function(index){
                          return(
                            <View key = {index} style = {{width : '100%', aspectRatio : 4}}>
                              <Text> {display[index].text} </Text>
                            </View>)
                        })}
                      </ScrollView>
                      <View style = {{width : '100%', height : '10%', alignItems : 'center', flexDirection : 'row', justifyContent : 'space-around', backgroundColor : '#3b5998'}}>

                        <TouchableOpacity style = {{width : '20%', aspectRatio : 1, borderRadius : 9999, backgroundColor : '#ddd'}} onPress = {() => {this.setState({index : this.state.index + 1})}}/>

                      </View>
                    </View>
                </View>
                <View style = {Styles.messenger_button}>
                    {Methods.app_link(function(){navigate('News', {memory : memory})}, require('../assets/art/meta/left_arrow.png'), Styles.messenger_button_fun)}
                </View>
            </View>
        );
    }

}
