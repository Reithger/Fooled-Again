export default {
    "default": {
        "screen_1": {
            "dialogue": "This is presenting the player with some kind of information or scenario",
            "responses": ["This is one thing the user could do", "This is something else the user could do", "Or a third option similar to another"],
            "directory": ["screen_2", "screen_3", "screen_3"],
            "image": require("../art/stand_in.png"),
        },
        "screen_2": {   
            "dialogue": "If the user did one option, they may get this screen",
            "responses": ["And say this", "Or this"],
            "directory": ["screen_3", "screen_4"],
            "image": require("../art/stand_in.png"),
        },
        "screen_3": {
            "dialogue": "Now the user could reach this point one of two ways",
            "responses": [],
            "directory": [],
            "image": require("../art/stand_in.png"),
        }
    }
}