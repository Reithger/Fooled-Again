import { StyleSheet } from 'react-native';

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
    home: {
        flex: 1,
    },
        home_title: {
            flex: 3,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: title_background_color,
            borderColor: title_border_color,
            borderWidth: 6
        },
            home_title_space: {
                borderTopWidth: 6,
                borderBottomWidth: 6,
                borderColor: title_border_color_2,
            },
                home_title_space_text: {
                    fontSize: 32,
                },
        home_image: {
            flex: 2
        },
            home_image_style: {
                flex: 1,
                resizeMode: 'cover',
                borderWidth: 6,
                borderColor: title_border_color,
                width: null,
                height: null
            },
        home_start_button: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: title_background_color,
            borderColor: title_border_color,
            borderWidth: 6
        },
            home_start_button_text: {
                fontSize: 26
            },

    intro: {
        flex:1
    },
        placeholder: {
            flex: 3,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 6,
            borderColor: intro_border_color
        },
            placeholder_text:{
                fontSize: 26,
            },
        navigation: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            borderWidth: 6,
            borderColor: intro_border_color,
        },
            navigation_back :{
                flex: 1,
                borderWidth: 4,
                borderColor: intro_border_color_2,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            },
                navigation_back_text : {
                    fontSize: 26,
                },
            navigation_junction: {
                flex: 1,
                borderWidth: 4,
                borderColor: intro_border_color_2,
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            },
                navigation_junction_text : {
                    fontSize: 26,
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
            },
                junction_sleuth_title_text: {
                    fontSize: 48,
                    alignSelf: 'flex-end',
                    marginRight: '3%',
                    marginTop: '5%',
                },
            junction_sleuth_selection: {
                flex: 1,
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
                },
                junction_sleuth_image: {
                    width: 50,
                    height: 50,
                    borderRadius: 50 / 2,
                    backgroundColor: 'red',
                },
                    junction_sleuth_image_profile: {
                        width: 50,
                        height: 50,
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
            junction_solve_button: {
                flex: 2,
                alignItems: 'flex-end',
                justifyContent: 'flex-end',
            },
                junction_solve_button_text: {
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
            alignItems: 'flex-start',
        },
            sleuthDescription_description_body_text: {
                fontSize: 14,
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
                alignItems: 'center',
                borderBottomWidth: 3,
                borderColor: sleuthConversation_border_color_2,
                borderTopWidth: 3,
            },
                sleuthConversation_Conversation_title_text: {
                    fontSize: 26,
                },
        sleuthConversation_Conversation_body: {
            alignItems: 'flex-start',
        },
            sleuthConversation_Conversation_body_text: {
                fontSize: 14,
                justifyContent: 'center'
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
                alignItems: 'center',
                justifyContent: 'center'
            },
                sleuthConversation_interact_button_format : {
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                    sleuthConversation_interact_button_text: {
                        fontSize: 18,
                    },
});