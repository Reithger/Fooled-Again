import React from 'react';
import {PanResponder, Easing, ScrollView, Animated, TouchableOpacity, View, Text, Image } from 'react-native';
import Styles from '../../assets/Styles';

module.exports = {

    get_panResponder : function(pan){
      return PanResponder.create({
          onStartShouldSetPanResponder : () => true,
          onPanResponderMove           : Animated.event([null,{
              dx : pan.x,
              dy : pan.y
          }]),
          onPanResponderRelease        : (e, gesture) => {},
          onPanResponderGrant          : (e, gesture) => {
            pan.setOffset(pan.__getValue())
            pan.setValue({x : 0, y : 0})
          },
          onMoveShouldSetPanResponder : (evt, gestureState) => {
            return !(gestureState.dx == 0 && gestureState.dy == 0)
          }
      });
    },

    article_header : function(left, right, text){
       return(
       <View style = {Styles.architecture_header}>
          {left.map(function(item){
            var i = 0;
            return(<TouchableOpacity key = {i++} style={Styles.architecture_header_interact} onPress={item.function}>
                       <Image style = {Styles.architecture_header_interact_format} source = {item.image}/>
                   </TouchableOpacity>)
          })}
           <Text style = {Styles.architecture_header_text}>
               {text}
           </Text>
           {right.map(function(item){
             var i = 0;
             return(<TouchableOpacity key = {i++} style={Styles.architecture_header_interact} onPress={item.function}>
                        <Image style = {Styles.architecture_header_interact_format} source = {item.image}/>
                    </TouchableOpacity>)
           })}
       </View>)
     },

    headline_page : function(stories, navig){
      var i = 0;
      return(
        <ScrollView style = {{}} keyboardShouldPersistTaps = 'always'>
          {stories.map(function(source){
            var headline = source.source[source.format.indexOf("header")];
            var image = source.source[source.format.indexOf("frame")];
            var tag = source.source[source.format.indexOf("tag")];
            return module.exports.article_descriptor(headline, image, tag, i++, navig(source));
          })}
        </ScrollView>)
    },

    article_descriptor : function(headline, image, tag, key, navig) {
      return(
        <TouchableOpacity key = {key} style = {Styles.architecture_descriptor} onPress = {navig}>
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

    article : function(script){
       return [...Array(script.format.length).keys()].map(function(index){
         switch(script.format[index]){
           case "header" : return module.exports.headline(script.source[index], index, 0);
           case "tag" : return module.exports.tag(script.source[index], index, 0);
           case "frame" : return module.exports.frame(script.source[index], index, 0);
           case "body" : return module.exports.body(script.source[index], index, 0);
           default : return <View key = {index} style = {{width : '100%', aspectRatio : 5, backgroundColor : '#22f'}}/>;
         }
       })
     },

     blog : function(script){
        return [...Array(script.format.length).keys()].map(function(index){
          switch(script.format[index]){
            case "header" : return module.exports.headline(script.source[index], index, 1);
            case "tag" : return module.exports.tag(script.source[index], index, 1);
            case "frame" : return module.exports.frame(script.source[index], index, 1);
            case "body" : return module.exports.body(script.source[index], index, 1);
            default : return <View key = {index} style = {{width : '100%', aspectRatio : 5, backgroundColor : '#22f'}}/>;
          }
        })
      },

     headline : function(headline, key, type){
       return(
       <View key = {key} style = {type == 0 ? Styles.architecture_news_headline : Styles.architecture_blog_headline}>
           <Text style = {type == 0 ? Styles.architecture_news_headline_text: Styles.architecture_blog_headline_text}>
               {headline}
           </Text>
       </View>)
     },

     tag : function(tag, key, type){
       return(
        <View key = {key} style = {type == 0 ? Styles.architecture_news_tag: Styles.architecture_blog_tag}>
           <Text style = {type == 0 ? Styles.architecture_news_tag_text: Styles.architecture_blog_tag_text}>
               {tag}
           </Text>
       </View>)
     },

     frame : function(frame, key, type){
       return(
       <View key = {key} style = {type == 0 ? Styles.architecture_news_frame: Styles.architecture_blog_frame}>
           <View key = {key} style = {type == 0 ? Styles.architecture_news_frame_image: Styles.architecture_blog_frame_image}>
               <Image style = {type == 0 ? Styles.architecture_news_frame_image_format : Styles.architecture_blog_frame_image_format} source = {frame}/>
           </View>
       </View>)
     },

     body : function(body, key, type) {
       return(
       <View key = {key} style = {type == 0 ? Styles.architecture_news_body: Styles.architecture_blog_body}>
           <Text style = {type == 0 ? Styles.architecture_news_body_text: Styles.architecture_blog_body_text}>
               {body}
           </Text>
       </View>)
     },

     app_link_shake : function(animation, action, image, style){
       const spin = animation.interpolate({
           inputRange: [0, .05, .075, .125, .5, .55, .575, .625, 1],
           outputRange: ['0deg', '10deg', '-10deg', '0deg', '0deg','10deg', '-10deg', '0deg', '0deg']
       })
       const scale = animation.interpolate({
           inputRange: [0, .4, .425, .475, .5, .9, .925, .975, 1],
           outputRange: [1, 1, 1.3, .8, 1, 1, 1.3, .8, 1]
       })
       if(style == null){
         return(null);
       }
       return(
         <Animated.View style = {Object.assign({}, style, {transform : [{scale : scale}]})}>
           <TouchableOpacity style = {Styles.architecture_app_image} onPress = {action}>
             <Animated.Image style = {Object.assign({}, {transform : [{rotate : spin}]}, Styles.architecture_app_image_format)} source = {image}/>
           </TouchableOpacity>
         </Animated.View>
       );
     },

     spin : function(animate){
       animate.setValue(0)
       Animated.timing(
           animate,
           {
               toValue: 1,
               duration: 4000,
               easing: Easing.linear
           }
       ).start(() => module.exports.spin(animate))
     },

     app_link : function(action, image, style){
       if(style == null){
         return(null);
       }
       return(
         <View style = {style}>
           <TouchableOpacity style = {Styles.architecture_app_image} onPress = {action}>
             <Image style = {Styles.architecture_app_image_format} source = {image}/>
           </TouchableOpacity>
         </View>
       );
     },

     messenger_scrawl : function(display, identity){
       return(
         <ScrollView style = {Styles.architecture_scrawl} ref = {(scroll) => {this.scroll = scroll}} onContentSizeChange = {(contentWidth, contentHeight) => {this.scroll.scrollToEnd();}}>
           { Array.from(Array(display.length).keys()).map(function(index){
               return(
                 <View key = {index}>
                      {module.exports.messenger_scrawl_side(display, identity, index)}
                </View>
              )
           })}
         </ScrollView>
       )
     },

     messenger_scrawl_side : function(display, identity, index){
       if(display[index].source == "player"){
         return(
           <View style = {Styles.architecture_scrawl_message}>
              {module.exports.messenger_scrawl_contents(display, index, display[index].source)}
              {module.exports.messenger_scrawl_profile(identity[display[index].source].image)}
          </View>
        )
       }
       else{
         return(
           <View style = {Styles.architecture_scrawl_message}>
              {module.exports.messenger_scrawl_profile(identity[display[index].source].image)}
              {module.exports.messenger_scrawl_contents(display, index, display[index].source)}
          </View>
        )
       }
     },

     messenger_scrawl_contents : function(display, index, identity){
       if(display[index].image != undefined){
         return(
             <View style = {identity == "player" ? Styles.architecture_scrawl_message_image1 : Styles.architecture_scrawl_message_image2}>
               <Image style = {Styles.architecture_scrawl_message_image_format} source = {display[index].image}/>
             </View>
           )
       }
       else{
         return(
             <View style = {identity == "player" ? Styles.architecture_scrawl_message_text1 : Styles.architecture_scrawl_message_text2}>
               <Text style = {identity == "player" ? Styles.architecture_scrawl_message_text_text1 : Styles.architecture_scrawl_message_text_text2}>{display[index].text}</Text>
             </View>
           )
       }
     },

     messenger_scrawl_profile : function(image){
       return(
         <View style = {Styles.architecture_scrawl_message_profile}>
            <Image style = {Styles.architecture_scrawl_message_profile_format} source = {image}/>
         </View>
       )
     },

     messenger_friends : function(identity){
       var i = 0;
       return(
           <ScrollView style = {Styles.architecture_friends}>
             {Object.keys(identity).map(function(index){
               return(module.exports.messenger_friends_entry(identity[index], index, i++))})}
           </ScrollView>)
     },

     messenger_friends_entry : function(batch, index, i){
       return(
           <View key = {index} style = {i % 2 == 0 ? Styles.architecture_friends_entry1 : Styles.architecture_friends_entry2} onPress = {() => {}}>
               <View style = {Styles.architecture_friends_entry_buffer}/>
               <View style = {Styles.architecture_friends_entry_profile}>
                  <View style = {{width : '100%', aspectRatio : 1}}>
                     <Image style = {Styles.architecture_friends_entry_profile_format} source = {batch.image}/>
                 </View>
               </View>
               <View style = {Styles.architecture_friends_entry_buffer}/>
               <View style = {Styles.architecture_friends_entry_buffer}/>
               <View style = {Styles.architecture_friends_entry_name}>
                 <Text style = {Styles.architecture_friends_entry_name_text}> {batch.name}</Text>
               </View>
           </View>);
     },
}
