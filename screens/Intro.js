import React, { Component } from 'react';
import { TouchableOpacity, Button, View, Text, Image } from 'react-native';
import Styles from '../assets/Styles';
import Lookup_Intro from '../assets/Lookup/Lookup_Intro.js';

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
        var page = this.props.navigation.getParam("page", 0);
        var tab = this.props.navigation.getParam("tab", 0);
        var script = Lookup_Intro["screen"];  //is an array of text-sets

        var format = script[page].format[tab];
        var text = script[page].text[tab];
        var pic = script[page].image;

        console.log(script[page]);
        console.log(page + " " + tab);

        var top = undefined;

        var back = tab == 0 ? <View style = {Styles.intro_body_tab_null}/> : <TouchableOpacity style = {Styles.intro_body_tab_left} onPress = {() => {
                                            if(tab != 0){
                                                this.props.navigation.setParams({tab : tab - 1});
                                            }}}>
                                            <Text style = {Styles.intro_body_tab_left_text}>
                                                Back
                                            </Text>
                                        </TouchableOpacity>;


        var next = (tab + 1 == script[page].text.length) ? <View style = {Styles.intro_body_tab_null}/> :  <TouchableOpacity style = {Styles.intro_body_tab_right} onPress = {() => {
                                                                          if(tab + 1 != script[page].text.length){
                                                                              this.props.navigation.setParams({tab : tab + 1});
                                                                          }}}>
                                                                          <Text style = {Styles.intro_body_tab_left_text}>
                                                                              Next
                                                                          </Text>
                                                                      </TouchableOpacity>



        var internal =    <View style = {Styles.intro_body_tab}>
                            {back}
                            <View style = {Styles.intro_body_tab_page}>
                              <Text style = {Styles.intro_body_tab_page_text}>
                                {tab + 1}/{script[page].text.length}
                              </Text>
                            </View>
                            {next}
                          </View>;

        if(format == "headline"){
          top = <View style={Styles.intro_body}>
                    <View style = {Styles.intro_body_headline}>
                        <Text style = {Styles.intro_body_headline_text}>{text}</Text>
                    </View>
                    <View style = {Styles.intro_body_image}>
                        <Image style = {Styles.intro_body_image_format} source = {pic}/>
                    </View>
                    {internal}
                </View>;
        }
        else if (format == "subhead"){
          top = <View style={Styles.intro_body}>
                    <View style = {Styles.intro_body_image}>
                        <Image style = {Styles.intro_body_image_format} source = {pic}/>
                    </View>
                    <View style = {Styles.intro_body_subhead}>
                        <Text style = {Styles.intro_body_subhead_text}>{text}</Text>
                    </View>
                    {internal}
                </View>;
        }
        else if(format == "body"){
          top = <View style={Styles.intro_body}>
                    <View style = {Styles.intro_body_image}>
                        <Image style = {Styles.intro_body_image_format} source = {pic}/>
                    </View>
                    <View style = {Styles.intro_body_body}>
                        <Text style = {Styles.intro_body_body_text}>{text}</Text>
                    </View>
                    {internal}
                </View>;
        }

        return (
            <View style={Styles.intro}>
                {top}
                <View style={Styles.intro_navigation}>
                    <TouchableOpacity style={Styles.intro_navigation_back} onPress={() => {
                      if(page == 0){
                        navigate('Home', {memory: memory});
                      }
                      else{
                        this.props.navigation.setParams({page : page-1});
                        this.props.navigation.setParams({tab : 0});
                        this.forceUpdate();
                      }
                  }}>
                        <Text style={Styles.intro_navigation_back_text}>Back</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.intro_navigation_junction} onPress={() => {
                        if(page + 1 >= script.length){
                          navigate('Junction', {memory: memory});
                        }
                        else{
                          this.props.navigation.setParams({page : page+1});
                          this.props.navigation.setParams({tab : 0});
                          this.forceUpdate();
                        }
                      }}>
                        <Text style={Styles.intro_navigation_junction_text}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
