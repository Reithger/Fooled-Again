import { StyleSheet } from 'react-native';
const DeviceInfo = require('react-native-device-detection');
import { Platform } from 'react-native';

tablet = DeviceInfo.isTablet;
android = Platform.OS != "ios";

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
            fontSize : tablet ? 18 : 14,
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
        borderRadius : android ? 9999 : 25,
      },
        architecture_app_image_format : {
          flex : 1,
          width : null,
          height : null,
          resizeMode : 'contain',
          overflow : 'hidden',
        },
    architecture_scrawl : {
      flex : 1,
    },
      architecture_scrawl_message : {
        width : '100%',
        flexDirection : 'row',
        marginBottom : '4%',
        justifyContent : 'space-around',
        alignItems : 'center',
      },
        architecture_scrawl_message_choice : {
          width : '80%',
          backgroundColor : '#0099ff',
          borderRadius : tablet ? 40 : 15,
          alignItems : 'center',
          justifyContent : 'center',
          paddingTop : '3%',
          paddingBottom : '3%',
          flexDirection : 'row',
        },
          architecture_scrawl_message_choice_text : {
            fontSize : tablet ? 16 : 12,
            marginLeft : '3%',
            marginRight : '3%',
            color : 'white',
          },
        architecture_scrawl_message_text1 : {
          width : '80%',
          backgroundColor : '#0099ff',
          borderRadius : tablet ? 40 : 15,
          alignItems : 'flex-start',
          justifyContent : 'center',
          paddingTop : '3%',
          paddingBottom : '3%',
        },
        architecture_scrawl_message_text2 : {
          width : '80%',
          backgroundColor : '#ddd',
          borderRadius : tablet ? 40 : 15,
          alignItems : 'flex-start',
          justifyContent : 'center',
          paddingTop : '3%',
          paddingBottom : '3%',
        },
          architecture_scrawl_message_text_text1 : {
            fontSize : tablet ? 16 : 12,
            marginLeft : '3%',
            marginRight : '3%',
            color : 'white',
          },
          architecture_scrawl_message_text_text2 : {
            fontSize : tablet ? 16 : 12,
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
            flex : 1,
            resizeMode : 'cover',
            overflow : 'hidden',
            borderRadius : android ? 9999 : 40
          },
        architecture_scrawl_message_image1 : {
          width : '80%',
          backgroundColor : '#6d84b4',
          borderRadius : tablet ? 40 : 15,
          aspectRatio : 1,
        },
        architecture_scrawl_message_image2 : {
          width : '80%',
          backgroundColor : '#ccc',
          borderRadius : tablet ? 40 : 15,
          aspectRatio : 1,
        },
          architecture_scrawl_message_image_format : {
            height : null,
            width : null,
            flex : 1,
            resizeMode : 'contain',
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
          aspectRatio : 1,
          alignItems : 'center'
        },
          architecture_friends_entry_profile_format : {
            height : null,
            width : null,
            flex : 1,
            resizeMode : 'cover',
            overflow : 'hidden',
            borderRadius : android ? 9999 : 25,
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
          flex : 1,
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
              width : tablet ? '18%' : '24%',
              aspectRatio : tablet ? 5/3 : 7/3,
              borderRadius : 30,
              backgroundColor : '#eee',
              alignItems : 'center',
              justifyContent : 'center',
            },
              messenger_display_chat_keyboard_touch_interact : {
                width : '100%',
                height : '100%',
                alignItems : 'center',
                justifyContent : 'center'
              },
                messenger_display_chat_keyboard_touch_interact_text : {
                  fontSize : tablet ? 24 : 16,
                },

  blog : {
    height : '100%',
    backgroundColor : '#3b945e',
    width : '100%'
  },
    blog_scroll : {

    },
      blog_scroll_header : {
          aspectRatio : 4,
          backgroundColor : '#65ccb8',
          width : '100%',
          alignItems : 'flex-end',
          justifyContent : 'flex-end',
          borderBottomWidth : 2
      },
        blog_scroll_header_image : {
          position : 'absolute',
          height : '100%',
          width : '100%'
        },
          blog_scroll_header_image_format : {
            flex : 1,
            width : null,
            height : null,
            resizeMode : 'cover'
          },
      blog_scroll_header_title : {
        fontSize : tablet ? 54 : 34,
        fontWeight : 'bold',
        marginRight : '2%',
        color : 'white'},
    blog_scroll_puzzle : {

    },
      blog_scroll_puzzle_buffer : {
        width : '100%',
        aspectRatio : 30,
      },
      blog_scroll_puzzle_body : {
        marginLeft : '2%',
        marginRight : '2%',
        borderWidth : 4,
        borderColor : '#41a3b3',
        width : '96%',
        aspectRatio : 4,
      },
        blog_scroll_puzzle_body_grid : {
          flexDirection : 'row',
          justifyContent : 'space-around',
        },
          blog_scroll_puzzle_body_grid_text : {
            width : '30%',
            aspectRatio : 1,
            alignItems : 'center',
            justifyContent : 'center'
          },
            blog_scroll_puzzle_body_grid_text_align : {
              width : '100%',
              alignItems : 'center',
              justifyContent : 'center',
              marginBottom : '30%'
            },
              blog_scroll_puzzle_body_grid_text_align_format : {
                fontSize : tablet ? 22 : 14,
                color : '#f2f2f2',
              },
          blog_scroll_body_grid_image : {
            width : '30%',
            aspectRatio : 1,
            alignItems : 'center',
            justifyContent : 'center'
          },
            blog_scroll_puzzle_body_grid_image_align : {
              width : '90%',
              aspectRatio : 5/3,
              justifyContent : 'flex-start',
              flexDirection : 'column',
              marginBottom : '20%'
            },
              blog_scroll_puzzle_body_grid_image_align_format : {
                flex : 1,
                width : null,
                height : null,
                resizeMode : 'cover'
              },
          blog_scroll_puzzle_body_grid_button : {
            width : '20%', aspectRatio : 1, alignItems : 'center', justifyContent : 'center'
          },
            blog_scroll_puzzle_body_grid_button_region : {
              width : '90%',
              aspectRatio : 1,
              alignItems : 'center',
              justifyContent : 'center',
              backgroundColor : '#65ccb8',
              borderRadius : 9999,
              marginTop : '20%'
            },
              blog_scroll_puzzle_body_grid_button_region_text : {
                alignItems : 'center',
                justifyContent : 'center',
                width : '80%',
                aspectRatio : 1
              },
                blog_scroll_puzzle_body_grid_button_region_text_format : {
                  fontSize : tablet ? 36 : 22,
                },
      blog_scroll_floor : {
        borderTopWidth : 2,
        width : '100%',
        aspectRatio : 8,
        paddingTop : '5%',
        backgroundColor : '#41b3a3',
        flexDirection : 'column',
        alignItems : 'flex-end',
        justifyContent : 'space-around'
      },
        blog_scroll_floor_buffer : {
          width : '100%',
          aspectRatio : 24,
        },
        blog_scroll_floor_button : {
          marginRight : '5%',
          borderRadius : 20,
          backgroundColor : '#f2f2f2',
          width : '20%',
          aspectRatio : 3,
          alignItems : 'center',
          justifyContent : 'center'
        },
          blog_scroll_floor_button_text : {
            fontSize : 22
          },


    end : {
      flex : 1,
    },
      end_scroll : {

      },

  float : {
    position : 'absolute',
    width : '100%',
    height : '100%',
    flexDirection : 'row',
    justifyContent : 'flex-end',
    alignItems : 'flex-end'
  },

  button : {
    width : tablet ? '12%' : '16%',
    aspectRatio: 1,
  },
    button_blog : {
      width : '100%',
      aspectRatio : 1,
      borderRadius : 9999,
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : '#41b3a3',
      overflow : 'hidden',
    },
    button_news : {
      width : '100%',
      aspectRatio : 1,
      borderRadius : 9999,
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : '#e60505',
      overflow : 'hidden',
    },
    button_messenger : {
      width : '100%',
      aspectRatio : 1,
      borderRadius : 9999,
      borderWidth : 1,
      alignItems : 'center',
      justifyContent : 'center',
      backgroundColor : '#0e1f56',
      overflow : 'hidden',
    },
});
