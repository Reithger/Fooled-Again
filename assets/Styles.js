import { StyleSheet } from 'react-native';

buff = "#f0dc82"
beaver = "#9f8170";

pine = "#01796f";
pale = "#98fb98";
avocado = "#568203";

black = "#000";
battleship = "#848482";

title_border_color = beaver;
title_background_color = buff;

junction_sleuth_border_color = beaver;
junction_sleuth_background_color = buff;
junction_solve_border_color = beaver;
junction_solve_background_color = buff;

sleuthDescription_border_color = beaver;
sleuthDescription_background_color = buff;
sleuthDescription_image_background_color = '#bbb';
sleuthDescription_image_border_color = black;

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
            home_title_text: {
                fontSize: 32
            },
        home_image: {
            flex: 2
        },
            home_image_style: {
                flex: 1,
                resizeMode: 'cover',
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
            backgroundColor: sleuthDescription_image_background_color,
            borderWidth: 6,
            borderBottomWidth: 4,
            borderColor: sleuthDescription_border_color,
        },
            sleuthDescription_profile_image: {
                borderWidth: 6,
                borderColor: sleuthDescription_image_border_color,
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
                borderBottomColor: '#000',
                borderTopWidth: 3,
                borderTopColor:'#000',
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
            borderColor: sleuthDescription_border_color
        },
            sleuthDescription_interact_back: {
                alignItems: 'flex-start',
                borderWidth : 6,
                borderColor : sleuthDescription_border_color,
            },
                sleuthDescription_interact_back_text: {

                },
            sleuthDescription_interact_interrogate: {
                alignItems: 'flex-end',
                borderWidth: 6,
                borderColor: sleuthDescription_border_color,
            },
                sleuthDescription_interact_interrogate_text: {

                },
});