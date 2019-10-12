import React from 'react';
import {TouchableOpacity, View, Text, Image } from 'react-native';
import Styles from '../../assets/Styles';

module.exports = {
    headline : function(headline, key){
      return(
      <View key = {key} style = {Styles.architecture_headline}>
          <Text style = {Styles.architecture_headline_text}>
              {headline}
          </Text>
      </View>)
    },

    tag : function(tag, key){
      return(
       <View key = {key} style = {Styles.architecture_tag}>
          <Text style = {Styles.architecture_tag_text}>
              {tag}
          </Text>
      </View>)
    },

    frame : function(frame, key){
      return(
      <View key = {key} style = {Styles.architecture_frame}>
          <View key = {key} style = {Styles.architecture_frame_image}>
              <Image style = {Styles.architecture_frame_image_format} source = {frame}/>
          </View>
      </View>)
    },

    body : function(body, key) {
      return(
      <View key = {key} style = {Styles.architecture_body}>
          <Text style = {Styles.architecture_body_text}>
              {body}
          </Text>
      </View>)
    },

    article_descriptor : function(script, key) {
      var headline = "";
      var image = "";
      var tag = "";
      var i = 0;
      for(i = 0; i < script.format.length; i++){
        if(script.format[i] == "header" && headline == ""){
          headline = script.source[i];
        }
        if(script.format[i] == "frame" && image == ""){
          image = script.source[i];
        }
        if(script.format[i] == "tag" && tag == ""){
          tag = script.source[i];
        }
      }
      return(
        <View key = {key} style = {Styles.architecture_descriptor}>
          <View style = {Styles.architecture_descriptor_image}>
              <Image source = {image} style = {Styles.architecture_descriptor_image_format}/>
          </View>
          <View style = {Styles.architecture_descriptor_short}>
              <View style = {Styles.architecture_descriptor_short_headline}>
                  <Text style = {Styles.architecture_descriptor_short_headline_text}>
                      {headline}
                  </Text>
              </View>
              <View style = {Styles.architecture_descriptor_short_tag}>
                  <Text style = {Styles.architecture_descriptor_short_tag_text}>
                      {tag}
                  </Text>
              </View>
          </View>
        </View>
      )
    },

    headline_page : function(stories){
      var i = 0;
      return stories.map(function(source){
        return module.exports.article_descriptor(source, i++);
      })
    },

    article : function(script){
      console.log(script);
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

     article_header : function(left, right){
       return(
       <View style = {Styles.architecture_header}>
          {left.map(function(item){
            var i = 0;
            return(<TouchableOpacity key = {i++} style={Styles.architecture_header_interact} onPress={item.function}>
                       <Image style = {Styles.architecture_header_interact_format} source = {item.image}/>
                   </TouchableOpacity>)
          })}
           <Text style = {Styles.architecture_header_text}>
               News App
           </Text>
           {right.map(function(item){
             var i = 0;
             return(<TouchableOpacity key = {i++} style={Styles.architecture_header_interact} onPress={item.function}>
                        <Image style = {Styles.architecture_header_interact_format} source = {item.image}/>
                    </TouchableOpacity>)
           })}
       </View>)
     },
}
