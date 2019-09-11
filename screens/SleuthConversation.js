import React, { Component } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Lookup_Interrogate from '../assets/text/Lookup_Interrogate';
import Lookup from '../assets/Lookup';
import Styles from '../assets/Styles';
import Memory from '../assets/Memory';

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
        var id = this.props.navigation.getParam("character", "default");
        var memory = this.props.navigation.getParam("memory",  {"initialized": true, "progress": {}});
        var script = Lookup_Interrogate[id][this.props.navigation.getParam("script", "screen_1")];

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
                        <TouchableOpacity key={response} style={Styles.sleuthConversation_interact_button} onPress={() => {
                            var next = script.directory[script.responses.indexOf(response)];
                            if (next == "exit_success") {
                                var data = new Memory();
                                memory["progress"][id] = "success";
                                data.storeData("DATA", JSON.stringify(memory));
                                navigate('Junction', {memory : memory});
                            }
                            else if (next == "exit_failure") {
                              var data = new Memory();
                              memory["progress"][id] = "failure";
                              data.storeData("DATA", JSON.stringify(memory));
                              navigate('Junction', {memory : memory});
                            }
                            else {
                                navigate('SleuthConversation', { character: id, script: next, memory : memory })
                            }
                          }
                        }>
                            <Text key={response} style={Styles.sleuthConversation_interact_button_text}>{response}</Text>
                        </TouchableOpacity>
                        )
                      )
                    }
                </View>
            </View>
        );
    }
}
