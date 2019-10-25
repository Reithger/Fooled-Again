import { StyleSheet } from 'react-native';
const DeviceInfo = require('react-native-device-detection');

tablet = DeviceInfo.isTablet;

buff = "#f0dc82"
beaver = "#9f8170";

pine = "#01796f";
pale = "#98fb98";
avocado = "#568203";

black = "#000";
white = "#fff";
red = "#f00";
battleship = "#848482";

title_border_color = red;
title_border_color_2 = black;
title_background_color = white;

intro_border_color = red;
intro_border_color_2 = black;
intro_background_color = white;

junction_sleuth_border_color = black;
junction_sleuth_background_color = white;
junction_solve_border_color = black;
junction_solve_background_color = white;

sleuthDescription_border_color = black;
sleuthDescription_border_color_2 = red;
sleuthDescription_background_color = white;

sleuthConversation_border_color = black;
sleuthConversation_border_color_2 = red;
sleuthConversation_background_color = white;

export default StyleSheet.create({
  news_header : {
    height: '0%',
    backgroundColor : '#e60505',
    borderBottomWidth : 0,
  },
  title_header : {
    height : '0%',
    backgroundColor : '#f57e20',
    borderBottomWidth : 0,
  },
  messenger_header : {
    height : '0%',
    backgroundColor : '#0e1456',
    borderBottomWidth : 0,
  },
  blog_header : {
    height : '0%',
    backgroundColor : '#41b3a3',
    borderBottomWidth : 0,
  },

  architecture : {

  },
    architecture_header : {
      backgroundColor : '#e60505',
      height : '7%',
      alignItems : 'center',
      justifyContent : 'space-around',
      flexDirection : 'row'
    },
        architecture_header_interact : {
          width : '8%',
          aspectRatio : 1,
          backgroundColor : 'transparent',
        },
            architecture_header_interact_format : {
              flex: 1,
              resizeMode: 'contain',
              width: null,
              height: null,
              backgroundColor : 'transparent',
            },
        architecture_header_text : {
          fontSize : 20,
          fontWeight : 'bold',
          color : '#fff',
        },
    architecture_news_frame : {
      flexDirection : 'row',
      justifyContent : 'space-around',
      paddingTop : '3%',
      paddingBottom : '3%',
      marginLeft : '3%',
      marginRight : '3%',
    },
        architecture_news_frame_image : {
          width : '100%',
          aspectRatio : 8/5,
          borderWidth : 1,
          flexDirection : 'row',
          justifyContent : 'space-around',
          marginLeft : '3%',
          marginRight : '3%',
        },
            architecture_news_frame_image_format : {
              flex: 1,
              resizeMode: 'cover',
              width: null,
              height: null,
            },
    architecture_news_headline : {
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
        architecture_news_headline_text : {
            fontSize : 26,
            fontWeight : 'bold',
            paddingTop : '3%',
            marginLeft : '3%',
            marginRight : '3%',
        },
    architecture_news_body : {
      justifyContent: 'center',
      alignItems : 'flex-start',
    },
        architecture_news_body_text : {
            fontSize : 18,
            marginLeft : '3%',
            marginRight : '3%',
            paddingTop : '3%',
        },
    architecture_news_tag : {
      alignItems : 'flex-start',
    },
        architecture_news_tag_text : {
              fontSize : 14,
              color : '#111',
              marginLeft : '3%',
            },
    architecture_blog_frame : {
      flexDirection : 'row',
      justifyContent : 'space-around',
      paddingTop : '3%',
      paddingBottom : '3%',
      marginLeft : '3%',
      marginRight : '3%',
    },
        architecture_blog_frame_image : {
          width : '100%',
          aspectRatio : 8/5,
          borderWidth : 1,
          flexDirection : 'row',
          justifyContent : 'space-around',
          marginLeft : '3%',
          marginRight : '3%',
        },
            architecture_blog_frame_image_format : {
              flex: 1,
              resizeMode: 'cover',
              width: null,
              height: null,
            },
    architecture_blog_headline : {
      alignItems: 'center',
      justifyContent: 'center',
    },
        architecture_blog_headline_text : {
            fontSize : 26,
            fontWeight : 'bold',
            paddingTop : '3%',
            color : '#f2f2f2',
        },
    architecture_blog_body : {
      justifyContent: 'center',
      alignItems : 'flex-start',
    },
        architecture_blog_body_text : {
            fontSize : 18,
            marginLeft : '3%',
            marginRight : '3%',
            paddingTop : '3%',
            color : '#f2f2f2',
        },
    architecture_blog_tag : {
      alignItems : 'center',
    },
        architecture_blog_tag_text : {
              fontSize : 14,
              color : '#111',
              color : '#f2f2f2',
            },
    architecture_descriptor : {
      flexDirection : 'row',
      justifyContent : 'space-between',
      marginRight : '7%',
      marginLeft : '7%',
      marginTop : '3%',
    },
        architecture_descriptor_image : {
          width : '30%',
          aspectRatio : 7/5,
          borderWidth : 2,
        },
            architecture_descriptor_image_format : {
              width : null,
              height : null,
              resizeMode : 'cover',
              flex : 1,
            },
        architecture_descriptor_short : {
          flexDirection : 'column',
          alignItems : 'flex-start',
        },
            architecture_descriptor_short_headline : {
              alignItems : 'center',
              justifyContent : 'center',
            },
                architecture_descriptor_short_headline_text : {
                  fontSize : tablet ? 24 : 16,
                  marginRight : '30%',
                  marginLeft : '5%',
                },
            architecture_descriptor_short_tag : {
              alignItems : 'center',
              justifyContent : 'center',
            },
                architecture_descriptor_short_tag_text : {
                  fontSize : tablet ? 16 : 10,
                  color : '#111',
                  marginLeft : '5%',
                },
    architecture_app : {
      width : '70%',
      aspectRatio : 1,
    },
      architecture_app_image : {
        width : '100%',
        aspectRatio : 1,
        borderRadius : 9999,
      },
        architecture_app_image_format : {
          flex : 1,
          width : null,
          height : null,
          resizeMode : 'contain',
          overflow : 'hidden',
        },
    architecture_scrawl : {

    },
      architecture_scrawl_message : {
        width : '100%',
        flexDirection : 'row',
        marginBottom : '10%',
        justifyContent : 'space-around',
      },
        architecture_scrawl_message_text1 : {
          width : '80%',
          backgroundColor : '#0099ff',
          borderRadius : 30,
          alignItems : 'flex-start',
          justifyContent : 'center',
        },
        architecture_scrawl_message_text2 : {
          width : '80%',
          backgroundColor : '#ccc',
          borderRadius : 30,
          alignItems : 'flex-start',
          justifyContent : 'center'
        },
          architecture_scrawl_message_text_text1 : {
            fontSize : 16,
            marginLeft : '3%',
            marginRight : '3%',
            color : 'white',
          },
          architecture_scrawl_message_text_text2 : {
            fontSize : 16,
            marginLeft : '3%',
            marginRight : '3%',
          },
        architecture_scrawl_message_profile : {
          width : '10%',
          justifyContent : 'center',
          aspectRatio : 1,
        },
          architecture_scrawl_message_profile_format : {
            height : null,
            width : null,
            flex : 1, resizeMode : 'cover',
            overflow : 'hidden',
            borderRadius : 9999
          },
        architecture_scrawl_message_image1 : {
          width : '80%',
          backgroundColor : '#6d84b4',
          borderRadius : 30,
          aspectRatio : 1,
        },
        architecture_scrawl_message_image2 : {
          width : '80%',
          backgroundColor : '#ccc',
          borderRadius : 30,
          aspectRatio : 1,
        },
          architecture_scrawl_message_image_format : {
            height : null,
            width : null,
            flex : 1,
            resizeMode : 'cover',
            margin : '4%',
            borderRadius : 10,
          },
    architecture_friends : {

    },
      architecture_friends_entry1 : {
        width : '100%',
        aspectRatio : 4,
        backgroundColor : '#3b5998',
        flexDirection : 'row',
        alignItems : 'center'
      },
      architecture_friends_entry2 : {
        width : '100%',
        aspectRatio : 4,
        backgroundColor : '#6d84b4',
        flexDirection : 'row',
        alignItems : 'center'
      },
        architecture_friends_entry_buffer : {
          width : '5%',
          aspectRatio : 1
        },
        architecture_friends_entry_profile : {
          width : '20%',
          justifyContent : 'center',
          aspectRatio : 1
        },
          architecture_friends_entry_profile_format : {
            height : null,
            width : null,
            flex : 1,
            resizeMode : 'cover',
            overflow : 'hidden',
            borderRadius : 9999
          },
        architecture_friends_entry_name : {
          width : '65%',
          alignItems : 'flex-start',
          justifyContent : 'center'
        },
          architecture_friends_entry_name_text : {
            fontSize : tablet ? 22 : 16,
          },

    home: {
        flex: 1,
    },
      home_title : {
        backgroundColor : '#f57e20',
        width : '100%',
        height : '100%',
      },
        home_title_image : {
          width : null,
          height : null,
          flex : 1,
          resizeMode : 'contain',
        },

    intro: {
        flex:1
    },
        intro_body : {
          flex : 1,
          paddingBottom : '10%',
        },
        intro_buffer : {
          width : '10%',
          aspectRatio : 1,
        },

    messenger: {
        flex: 1,
    },
      messenger_head : {
        height : '6%',
        backgroundColor : '#0e1f56',
        alignItems : 'center',
        justifyContent : 'center'
      },
        messenger_header_text : {
          color : 'white',
          fontSize : 26
        },
      messenger_display : {
        flexDirection : 'row',
        height : '100%',
        width : '100%',
        backgroundColor : 'white',
      },
        messenger_display_friends : {
          width : '35%',
          height : '100%',
          borderRightWidth : 2,
          borderColor : '#0e1f56',
          backgroundColor : '#0e1f56'
        },
        messenger_display_chat : {
          width : '65%',
          height : '100%',
          flexDirection : 'column',
        },
          messenger_display_chat_conversation : {
            height : '84%',
            backgroundColor : '#fff'
          },
          messenger_display_chat_keyboard : {
            width : '100%',
            height : '10%',
            alignItems : 'center',
            flexDirection : 'row',
            justifyContent : 'space-around',
            backgroundColor : '#3b5998'
          },
            messenger_display_chat_keyboard_touch : {
              width : '25%',
              aspectRatio : 5/3,
              borderRadius : 9999,
              backgroundColor : '#eee',
              alignItems : 'center',
              justifyContent : 'center',
            },
              messenger_display_chat_keyboard_touch_textOn : {
                fontSize : 20
              },
              messenger_display_chat_keyboard_touch_textOff : {
                fontSize : 0
              },

  blog : {

  },

    end : {
      flex : 1,
    },
      end_scroll : {

      },

  button : {
    position : 'absolute',
    width : '100%',
    height : '100%',
    alignItems : 'flex-start',
    justifyContent : 'flex-end',
    marginRight : '5%',
    marginBottom : '5%',
  },
    button_blog : {
      width : tablet ? '10%' : '18%',
      aspectRatio : 1,
      borderRadius : 9999,
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : '#41b3a3',
    },
    button_news : {
      width : tablet ? '10%' : '18%',
      aspectRatio : 1,
      borderRadius : 9999,
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : '#e60505',
    },
    button_messenger : {
      width : tablet ? '10%' : '18%',
      aspectRatio : 1,
      borderRadius : 9999,
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : '#0e1f56',
    },
});
