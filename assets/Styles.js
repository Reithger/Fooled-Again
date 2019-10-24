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
    architecture_frame : {
      flexDirection : 'row',
      justifyContent : 'space-around',
      paddingTop : '3%',
      paddingBottom : '3%',
      marginLeft : '3%',
      marginRight : '3%',
    },
        architecture_frame_image : {
          width : '100%',
          aspectRatio : 8/5,
          borderWidth : 1,
          flexDirection : 'row',
          justifyContent : 'space-around',
          marginLeft : '3%',
          marginRight : '3%',
        },
            architecture_frame_image_format : {
              flex: 1,
              resizeMode: 'cover',
              width: null,
              height: null,
            },
    architecture_headline : {
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
        architecture_headline_text : {
            fontSize : 26,
            fontWeight : 'bold',
            paddingTop : '3%',
            marginLeft : '3%',
            marginRight : '3%',
        },
    architecture_body : {
      justifyContent: 'center',
      alignItems : 'flex-start',
    },
        architecture_body_text : {
            fontSize : 18,
            marginLeft : '3%',
            marginRight : '3%',
            paddingTop : '3%',
        },
    architecture_tag : {
      alignItems : 'flex-start',
    },
        architecture_tag_text : {
              fontSize : 14,
              color : '#111',
              marginLeft : '3%',
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
        aspectRatio : 1
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
            fontSize : 22,
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
      home_button : {
        position : 'absolute',
        width : '100%',
        height : '100%',
        alignItems : 'flex-end',
        justifyContent : 'flex-end',
        paddingRight : '5%',
        paddingBottom : '5%',
      },
        home_button_fun : {
          width : '10%',
          aspectRatio : 1,
          borderRadius : 9999,
          borderWidth : 1,
          alignItems : 'center',
          justifyContent : 'center',
          backgroundColor : '#e60505',
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
        intro_button : {
          position : 'absolute',
          width : '100%',
          height : '100%',
          alignItems : 'flex-end',
          justifyContent : 'flex-start',
          marginRight : '10%',
          marginTop : '13%',
        },
          intro_button_fun : {
            position : 'absolute',
            width : '10%',
            aspectRatio : 1,
            borderRadius : 9999,
            borderWidth : 1,
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : '#0e1f56',
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
      messenger_button_news : {
        position : 'absolute',
        width : '100%',
        height : '100%',
        alignItems : 'flex-start',
        justifyContent : 'flex-end',
        marginLeft : '5%',
        marginBottom : '5%',
      },
        messenger_button_news_fun : {
          width : '10%',
          aspectRatio : 1,
          borderRadius : 9999,
          borderWidth : 1,
          alignItems : 'center',
          justifyContent : 'center',
          backgroundColor : '#e60505',
        },
      messenger_button_solve : {
        position : 'absolute',
        width : '100%',
        height : '100%',
        alignItems : 'flex-start',
        justifyContent : 'flex-end',
        marginLeft : '5%',
        marginBottom : '5%',
      },
        messenger_button_solve_fun : {
          width : '10%',
          aspectRatio : 1,
          borderRadius : 9999,
          borderWidth : 1,
          alignItems : 'center',
          justifyContent : 'center',
          backgroundColor : '#e60505',
        },

    solve : {
      flex : 1
    },
        solve_article : {
          flex : 1,
        },
        solve_puzzle : {
          flex : 5,
        },
            solve_puzzle_scroll : {
              flex : 1,
            },
                solve_puzzle_scroll_line : {
                  width : '100%',
                  aspectRatio : 5,
                  flexDirection : 'row',
                  justifyContent : 'space-around',
                  alignItems : 'center',
                  borderWidth : 2
                },
                    solve_puzzle_scroll_line_interact : {
                      alignItems : 'center',
                      justifyContent : 'center',
                      width : '20%',
                      aspectRatio : 2,
                      backgroundColor : '#f2f2f2'
                    },
                        solve_puzzle_scroll_line_interact_text : {
                          fontSize : 16,
                        },
                    solve_puzzle_scroll_line_image : {
                      width : '15%',
                      aspectRatio : 1,
                      flexDirection : 'column',
                      justifyContent : 'center'
                    },
                        solve_puzzle_scroll_line_image_format : {
                          width : null,
                          height: null,
                          flex: 1,
                          resizeMode : 'contain',
                        },
        solve_navigate : {
          flex : 1,
          flexDirection : 'row',
          justifyContent : 'space-around',
          borderWidth : 4,
          borderTopWidth : 0,
          alignItems: 'center',
        },
            solve_navigate_back : {
              borderWidth : 3,
              width : '40%',
              alignItems : 'center',
            },
                solve_navigate_back_text : {
                  fontSize : 32
                },
            solve_navigate_solve : {
              borderWidth : 3,
              width : '40%',
              alignItems : 'center',
            },
                solve_navigate_solve_text : {
                  fontSize: 32
                },


    end : {
      flex : 1,
    },
      end_scroll : {

      },
});
