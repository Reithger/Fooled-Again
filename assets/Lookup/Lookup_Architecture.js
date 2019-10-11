import React from 'react';
import {TouchableOpacity, View, Text, Image } from 'react-native';
import Styles from '../../assets/Styles';

module.exports = {
    headline : function(headline, key){
      return(
      <View key = {key} style = {Styles.intro_body_headline}>
          <Text style = {Styles.intro_body_headline_text}>
              {headline}
          </Text>
      </View>)
    },

    tag : function(tag, key){
      return(
       <View key = {key} style = {Styles.intro_body_tag}>
          <Text style = {Styles.intro_body_tag_text}>
              {tag}
          </Text>
      </View>)
    },

    frame : function(frame, key){
      return(
      <View key = {key} style = {Styles.intro_body_frame}>
          <View key = {key} style = {Styles.intro_body_frame_image}>
              <Image style = {Styles.intro_body_frame_image_format} source = {frame}/>
          </View>
      </View>)
    },

    body : function(body, key) {
      return(
      <View key = {key} style = {Styles.intro_body_body}>
          <Text style = {Styles.intro_body_body_text}>
              {body}
          </Text>
      </View>)
    },

    article : function(script){
       return [...Array(script.format.length).keys()].map(function(index){
         switch(script.format[index]){
           case "header" : return module.exports.headline(script.source[index], index);
           case "tag" : return module.exports.tag(script.source[index], index);
           case "frame" : return module.exports.frame(script.source[index], index);
           case "body" : return module.exports.body(script.source[index], index);
           default : return <View key = {index} style = {{width : '100%', aspectRatio : 5, backgroundColor : '#22f'}}/>;
         }
       })
     },

     article_header : function(function_back, function_forward){
       return(
       <View style = {Styles.intro_header}>
           <TouchableOpacity style={Styles.intro_header_interact} onPress={function_back}>
               <Image style = {Styles.intro_header_interact_format} source = {require('../../assets/art/meta/left_arrow.png')}/>
           </TouchableOpacity>
           <Text style = {Styles.intro_header_text}>
               News App
           </Text>
           <TouchableOpacity style={Styles.intro_header_interact} onPress={function_forward}>
               <Image style = {Styles.intro_header_interact_format} source = {require('../../assets/art/meta/right_arrow.png')}/>
           </TouchableOpacity>
       </View>)
     },
}
