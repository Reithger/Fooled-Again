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

junction_sleuth_border_color = pine;
junction_sleuth_background_color = pale;
junction_solve_border_color = black;
junction_solve_background_color = battleship;

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
    junction_sleuth: {
        flex: 1,
        backgroundColor: junction_sleuth_background_color,
        width: '100%',
        borderColor: junction_sleuth_border_color,
        borderStyle: 'solid',
        borderWidth: 4,
    },
    junction_sleuth_image: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: 'red',
    },
    junction_profile_image: {
        width: 50,
        height: 50,
    },
    junction_sleuth_selection: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
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
});