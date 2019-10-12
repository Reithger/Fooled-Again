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
              resizeMode: 'contain',
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
              resizeMode : 'contain',
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

    home: {
        flex: 1,
    },
        home_background : {
          width : '100%',
          height : '100%',
          position : 'absolute',
        },
        home_buffer : {
          flex : 1,
        },
        home_login : {
          backgroundColor : '#e60505aa',
          flexDirection : 'column',
          flex : 4,
          marginLeft : tablet ? '8%' : '1%',
          marginRight : tablet ? '8%' : '1%',
          borderRadius : tablet ? 25 : 10,
        },
            home_login_top : {
              flex : 3,
              alignItems : 'center',
              justifyContent : 'center',
            },
                home_login_top_title : {
                  alignItems : 'center',
                  justifyContent : 'center',
                  borderTopWidth : 4,
                  borderBottomWidth : 4,
                  borderColor : '#fff',
                  borderRadius : 10,
                  width : '95%',
                  backgroundColor : '#e60505',
                },
                    home_login_top_title_text : {
                      fontSize : tablet ? 54 : 32,
                      color : '#fff',
                    },
            home_login_bottom : {
              flex : 5,
              flexDirection : 'column',
              justifyContent : 'space-around',
            },
                home_login_bottom_entry : {
                  alignItems : 'center',
                  justifyContent : 'center',
                  flex : 1,
                },
                    home_login_bottom_entry_text : {
                      fontSize : 16,
                    },
                    home_login_bottom_entry_textbox : {
                      backgroundColor : '#fff',
                      borderColor : '#000',
                      borderWidth : 1,
                      width : '70%',
                      borderRadius : 10,
                    },
                        home_login_bottom_entry_textbox_text : {
                          fontSize : tablet ? 32 : 22,
                          margin : '1%',
                        },
                home_login_bottom_interact : {
                  alignItems : 'center',
                  justifyContent : 'center',
                  flex : 1,
                  marginBottom : '10%',
                },
                    home_login_bottom_interact_press : {
                      alignItems : 'center',
                      justifyContent : 'center',
                      backgroundColor : '#fff',
                      borderRadius : 30,
                      borderWidth : 1,
                      width : '80%',
                      height : '60%',
                    },
                        home_login_bottom_interact_press_text : {
                      fontSize : 22,
                    },


    intro: {
        flex:1
    },
        intro_body : {
          flex : 1,
        },
            intro_body_more : {
              alignItems : 'flex-start',
              marginTop : '1%',
              marginBottom : '3%',
            },
                intro_body_more_top : {
                  marginLeft : '3%',
                },
                    intro_body_more_top_text : {
                      fontSize : 22,
                      fontWeight : 'bold',
                    },

    junction: {
        flex: 1,
    },
        junction_sleuth: {
            flex: 1,
            backgroundColor: junction_sleuth_background_color,
            width: '100%',
            borderColor: junction_sleuth_border_color,
            borderStyle: 'solid',
            borderWidth: 4,
        },
            junction_sleuth_title: {
                flex: 1,
                borderColor: junction_sleuth_border_color,
                borderStyle: 'solid',
                borderBottomWidth: 4,
                flexDirection : 'row',
                justifyContent: 'space-between',
            },
                junction_sleuth_title_text: {
                    fontSize: 48,
                    alignSelf: 'flex-end',
                    marginRight: '3%',
                    marginTop: '5%',
                },
                junction_sleuth_title_back : {
                    alignSelf : 'flex-start',
                    justifyContent: 'center',
                    marginTop: '2%',
                    marginLeft : '2%',
                },
                    junction_sleuth_title_back_text : {
                      fontSize: 26,

                    },
            junction_sleuth_body : {
              flexDirection: 'column',
              justifyContent: 'space-between',
              flex: 3
            },
                junction_sleuth_body_selection: {
                    flex: 2,
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    alignItems: 'center',
                    },
                        junction_sleuth_body_selection_image: {
                            width: '15%',
                            aspectRatio : 1,
                            borderWidth : 2,
                        },
                            junction_sleuth_body_selection_image_profile: {
                              flex : 1,
                              resizeMode : 'cover',
                              width : null,
                              height : null,
                            },
        junction_solve: {
            flex: 1,
            backgroundColor: junction_solve_background_color,
            borderColor: junction_solve_border_color,
            width: '100%',
            borderStyle: 'solid',
            borderWidth: 4,
        },
            junction_solve_title: {
                flex: 1,
                borderColor: junction_solve_border_color,
                borderStyle: 'solid',
                borderBottomWidth: 4,
            },
                junction_solve_title_text: {
                    fontSize: 48,
                    alignSelf: 'flex-start',
                    marginLeft: '3%',
                    marginTop: '5%',
                },
            junction_solve_body : {
              flexDirection: "column",
              justifyContent : "space-between",
              flex: 3
            },
                junction_solve_body_scroll : {
                  flex : 2,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around",
                },
                    junction_solve_body_scroll_image : {
                        width: '12%',
                        aspectRatio : 1,
                    },
                      junction_solve_body_scroll_image_format : {
                        resizeMode : 'cover',
                        width : null,
                        height : null,
                        flex : 1,
                      },
                junction_solve_body_button: {
                    flex: 1,
                    alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                },
                    junction_solve_body_button_touchable : {

                    },
                        junction_solve_body_button_touchable_text: {
                            fontSize: 32
                        },

    sleuthDescription: {
        flex: 1,
    },
        sleuthDescription_profile: {
            flex: 3,
            backgroundColor: sleuthDescription_background_color,
            borderWidth: 6,
            borderBottomWidth: 4,
            borderColor: sleuthDescription_border_color_2,
        },
            sleuthDescription_profile_image: {
                borderWidth: 6,
                borderColor: sleuthDescription_border_color,
                width: '100%',
                height: '100%',
                resizeMode : 'contain'
            },
        sleuthDescription_description: {
            flex: 2,
            backgroundColor: sleuthDescription_background_color,
            borderWidth: 6,
            borderColor: sleuthDescription_border_color,
            borderBottomWidth: 4,
        },
            sleuthDescription_description_title: {
                alignItems: 'center',
                borderBottomWidth: 3,
                borderColor: sleuthDescription_border_color_2,
                borderTopWidth: 3,
            },
                sleuthDescription_description_title_text: {
                    fontSize: 26,
                },
        sleuthDescription_description_body: {
            alignItems: 'center',
            margin : '2%',
        },
            sleuthDescription_description_body_text: {
                fontSize: 16,
                justifyContent: 'center'
            },
        sleuthDescription_interact: {
            flex: 1,
            backgroundColor: sleuthDescription_background_color,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderWidth: 6,
            borderTopWidth: 4,
            borderColor: sleuthDescription_border_color_2
        },
            sleuthDescription_interact_back: {
                borderWidth : 4,
                borderColor: sleuthDescription_border_color,
                width: '40%',
                alignItems: 'center'
            },
                sleuthDescription_interact_back_text: {
                    fontSize: 24,
                },
            sleuthDescription_interact_interrogate: {
                borderWidth: 4,
                borderColor: sleuthDescription_border_color,
                width: '40%',
                alignItems: 'center',
            },
                sleuthDescription_interact_interrogate_text: {
                    fontSize: 24,
                },


    sleuthConversation: {
        flex: 1,
    },
        sleuthConversation_profile: {
            flex: 1,
            backgroundColor: sleuthConversation_background_color,
            borderWidth: 6,
            borderBottomWidth: 4,
            borderColor: sleuthConversation_border_color_2,
        },
            sleuthConversation_profile_image: {
                borderWidth: 6,
                borderColor: sleuthConversation_border_color,
                width: '100%',
                height: '100%',
                resizeMode: 'contain'
            },
        sleuthConversation_Conversation: {
            flex: 1,
            backgroundColor: sleuthConversation_background_color,
            borderWidth: 6,
            borderColor: sleuthConversation_border_color,
            borderBottomWidth: 4,
        },
            sleuthConversation_Conversation_title: {
                flex: 1,
                alignItems: 'center',
                justifyContent : 'center',
                borderBottomWidth: 3,
                borderColor: sleuthConversation_border_color_2,
                borderTopWidth: 3,
            },
                sleuthConversation_Conversation_title_text: {
                    fontSize: 26,
                },
            sleuthConversation_Conversation_body: {
                flex: 3,
                justifyContent : 'center',
                alignItems : 'center',
                margin : '2%',
            },
                sleuthConversation_Conversation_body_text: {
                    fontSize: 20,
                },
        sleuthConversation_interact: {
            flex: 1,
            backgroundColor: sleuthConversation_background_color,
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-around',
            borderWidth: 6,
            borderTopWidth: 4,
            borderColor: sleuthConversation_border_color_2
        },
            sleuthConversation_interact_button: {
                borderWidth: 3,
                borderColor: sleuthConversation_border_color,
                width: '90%',
                height : '25%',
                alignItems: 'center',
                justifyContent: 'center',
            },
                sleuthConversation_interact_button_text: {
                    fontSize: 18,
                },

    solveIntro : {
      flex : 1
    },
        solveIntro_body : {
          flex : 1,
        },
      solveIntro_image : {
        borderWidth : 8,
        borderBottomWidth : 4,
        flex : 3,
        width : '100%',
        height : '100%',
      },
        solveIntro_image_format : {
          flex : 1,
          resizeMode : 'contain',
          width : null,
          height : null,
        },
      solveIntro_description : {
        flex : 5,
        borderWidth: 8,
        borderTopWidth : 4,
        alignItems: 'flex-start',
        justifyContent : 'space-around',
        flexDirection : 'column',
      },
        solveIntro_description_line : {
          height : '20%',
          margin: '3%',
          borderLeftWidth : 3,
        },
          solveIntro_description_line_text : {
            marginLeft : '3%',
            fontSize : 18,
          },
      solveIntro_interact : {
        flex : 1,
        flexDirection : 'row',
        justifyContent : 'space-around',
        borderWidth : 4,
        borderTopWidth : 0,
        alignItems: 'center',
      },
        solveIntro_interact_back : {
          borderWidth : 4,
          width : '40%',
          alignItems : 'center',
        },
          solveIntro_interact_back_text : {
            fontSize : 32
          },
        solveIntro_interact_next : {
          borderWidth : 4,
          width : '40%',
          alignItems : 'center',
        },
          solveIntro_interact_next_text : {
            fontSize : 32
          },

    solve : {
      flex : 1
    },
        solve_puzzle : {
          flex : 5,
        },
            solve_puzzle_scroll : {
              flex : 1,
              borderWidth : 4
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
