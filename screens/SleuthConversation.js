import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Lookup_Interrogate from '../assets/text/Lookup_Interrogate';
import Lookup from '../assets/Lookup';
import Styles from '../assets/Styles';

export default class SleuthConversation extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: {
            height: 0,
        },
        headerTitleStyle: {
            fontSize: 0,
        }
    };
    render() {
        const { navigate } = this.props.navigation;
        id = this.props.navigation.getParam("character", "default");
        script = Lookup_Interrogate[id][this.props.navigation.getParam("script", "screen_1")];
        return (
            <View style={Styles.sleuthConversation}>
                <View style={Styles.sleuthConversation_profile}>
                    <Image style={Styles.sleuthConversation_profile_image} source={script.image} />
                </View>
                <View style={Styles.sleuthConversation_Conversation}>
                    <View style={Styles.sleuthConversation_Conversation_title}>
                        <Text style={Styles.sleuthConversation_Conversation_title_text}>{Lookup[id].name}</Text>
                    </View>
                    <View style={Styles.sleuthConversation_Conversation_body}>
                        <Text style={Styles.sleuthConversation_Conversation_body_text}>{script.dialogue}</Text>
                    </View>
                </View>

                <View style={Styles.sleuthConversation_interact}>
                    { script.responses.map(response => (
                        <TouchableOpacity key={response} style={Styles.sleuthConversation_interact_button} onPress={() => navigate('SleuthConversation', { character: id, script: script.directory[script.responses.indexOf(response)] })}>
                            <View style={Styles.sleuthConversation_interact_button_format}>
                                <Text key={response} style={Styles.sleuthConversation_interact_button_text}>{response}</Text>
                            </View>
                        </TouchableOpacity>
                        )
                      )
                    }
                </View>
            </View>
        );
    }
}