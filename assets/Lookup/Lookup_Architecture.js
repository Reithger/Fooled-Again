import React from 'react';
import {ScrollView, Animated, TouchableOpacity, View, Text, Image } from 'react-native';
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

    article_descriptor : function(script, key, navigate, memory) {
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
        <TouchableOpacity key = {key} style = {Styles.architecture_descriptor} onPress = {() => {navigate('NewsStory', {memory : memory, script : script})}}>
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
        </TouchableOpacity>
      )
    },

    headline_page : function(stories, navigate, memory){
      var i = 0;
      return(
        <ScrollView style = {{}}>
          {stories.map(function(source){
            return module.exports.article_descriptor(source, i++, navigate, memory);
          })}
        </ScrollView>)
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

     app_link_shake : function(animation, action, image, style){
       const spin = animation.interpolate({
           inputRange: [0, .05, .075, .125, 1],
           outputRange: ['0deg', '10deg', '-10deg', '0deg', '0deg']
       })
       const scale = animation.interpolate({
           inputRange: [0, .9, .925, .975, 1],
           outputRange: [1, 1, 1.3, .8, 1]
       })
       if(style == null){
         return(null);
       }
       return(
         <Animated.View style = {Object.assign({}, style, {transform : [{scale : scale}]})}>
           <TouchableOpacity style = {{width : '70%', aspectRatio : 1}} onPress = {action}>
             <Animated.Image style = {Object.assign({}, {transform : [{rotate : spin}]}, Styles.architecture_app_image)} source = {image}/>
           </TouchableOpacity>
         </Animated.View>
       );
     },

     app_link : function(action, image, style){
       if(style == null){
         return(null);
       }
       return(
         <View style = {style}>
           <TouchableOpacity style = {{width : '70%', aspectRatio : 1}} onPress = {action}>
             <Image style = {Styles.architecture_app_image} source = {image}/>
           </TouchableOpacity>
         </View>
       );
     },
}
