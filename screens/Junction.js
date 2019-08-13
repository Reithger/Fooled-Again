import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';

characters = ["char_1", "char_2", "char_3", "char_4", "char_5", "char_6", "char_7", "char_8", "char_9", "char_10", "char_11"];
images = [require("../assets/art/source_image_1.png"),
            require("../assets/art/source_image_2.png"),
            require("../assets/art/source_image_3.png"),
            require("../assets/art/source_image_4.png"),
            require("../assets/art/source_image_5.png"),
            require("../assets/art/source_image_6.png"),
            require("../assets/art/source_image_1.png"),
            require("../assets/art/source_image_2.png"),
            require("../assets/art/source_image_3.png"),
            require("../assets/art/source_image_4.png"),
            require("../assets/art/source_image_5.png")]

title_text = "Sleuth";

export default class Junction extends React.Component {
    static navigationOptions = {
        title: 'Junction',
        headerStyle: {
            height: 0,
        },
        headerTitleStyle: {
            fontSize: 0,
        }
    };

    render() {
        const { navigate } = this.props.navigation;
        var data = new Memory();
        data.delete("DATA");
        data.retrieveData("DATA").then((value) => {
            if (value == null) {
                value = {
                    "initialized": true, "progress": {} };
                data.storeData("DATA", JSON.stringify(value));
            }
            value = JSON.parse(value);
            console.log(value);
        });
        return (
            <View style={Styles.junction}>
                <View style={Styles.junction_sleuth}>
                    <View style={Styles.junction_sleuth_title}>
                        <Text style={Styles.junction_sleuth_title_text}> 
                            {title_text}
                        </Text>
                    </View>
                    <View style={Styles.junction_sleuth_selection}>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('SleuthDescription', {character: characters[0]})}>
                            <Image style={Styles.junction_sleuth_image_profile} source={images[0]} />
                            <Text> {characters[0]} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('SleuthDescription', { character: characters[1]})}>
                            <Image style={Styles.junction_sleuth_image_profile} source={images[1]} />
                            <Text> {characters[1]} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('SleuthDescription', { character: characters[2]})}>
                            <Image style={Styles.junction_sleuth_image_profile} source={images[2]} />
                            <Text> {characters[2]} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('SleuthDescription', { character: characters[3]})}>
                            <Image style={Styles.junction_sleuth_image_profile} source={images[3]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('SleuthDescription', { character: characters[4] })}>
                            <Image style={Styles.junction_sleuth_image_profile} source={images[4]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('SleuthDescription', { character: characters[5] })}>
                            <Image style={Styles.junction_sleuth_image_profile} source={images[5]} />
                        </TouchableOpacity>
                    </View>
                    <View style={Styles.junction_sleuth_selection}>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('SleuthDescription', { character: characters[6]})}>
                            <Image style={Styles.junction_sleuth_image_profile} source={images[6]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('SleuthDescription', { character: characters[7]})}>
                            <Image style={Styles.junction_sleuth_image_profile} source={images[7]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('SleuthDescription', { character: characters[8]})}>
                            <Image style={Styles.junction_sleuth_image_profile} source={images[8]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('SleuthDescription', { character: characters[9]})}>
                            <Image style={Styles.junction_sleuth_image_profile} source={images[9]} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.junction_sleuth_image} onPress={() => navigate('SleuthDescription', { character: characters[10] })}>
                            <Image style={Styles.junction_sleuth_image_profile} source={images[10]} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={Styles.junction_solve}>
                    <View style={Styles.junction_solve_title}>
                        <Text style={Styles.junction_solve_title_text}>
                            Solve
                        </Text>
                    </View>
                    <TouchableOpacity style={Styles.junction_solve_button} onPress={() => navigate('Solve', { name: 'Solve' })}>
                        <Text style={Styles.junction_solve_button_text}>
                            Continue
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}