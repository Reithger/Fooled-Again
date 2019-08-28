export default {
    "default": {
        "screen_1": {
            "dialogue": "This is presenting the player with some kind of information or scenario",
            "responses": ["This is one thing the user could do", "This is something else the user could do", "Or a third option similar to another"],
            "directory": ["screen_2", "screen_3", "screen_3"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "If the user did one option, they may get this screen",
            "responses": ["And say this", "Or this"],
            "directory": ["screen_3", "screen_4"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_3": {
            "dialogue": "Now the user could reach this point one of two ways",
            "responses": [],
            "directory": [],
            "image": require("../art/source_image_1.png"),
        }
    },

    "char_1": {
        "screen_1": {
            "dialogue": "You: Thanks for meeting with me. Regarding the claims you've made, do you really believe that refugees slaughtered " +
            "animals in the bathroom of a hotel?",
            "responses": ["(Continue)"],
            "directory": ["screen_2"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "Char_1: I do. I read an expose on it in the newspaper a while back.",
            "responses": ["That seems incredibly unlikely, though; why are you so sure?"],
            "directory": ["screen_3"],
            "image" : require("../art/source_image_1.png"),
        },
        "screen_3": {
            "dialogue": "(Insert image above of false newspaper story)",
            "responses": ["(Exit)"],
            "directory": ["exit_success"],
            "image": require("../art/newspapers.png"),
        }
    },

    "char_2": {
        "screen_1": {
            "dialogue": "",
            "responses": "",
            "directory": ["screen_2"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "",
            "responses": "",
            "directory": [],
            "image": require("../art/source_image_1.png"),
        }
    },

    "char_3": {
        "screen_1": {
            "dialogue": "",
            "responses": "",
            "directory": ["screen_2"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "",
            "responses": "",
            "directory": [],
            "image": require("../art/source_image_1.png"),
        }
    },

    "char_4": {
        "screen_1": {
            "dialogue": "",
            "responses": "",
            "directory": ["screen_2"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "",
            "responses": "",
            "directory": [],
            "image": require("../art/source_image_1.png"),
        }
    },

    "char_5": {
        "screen_1": {
            "dialogue": "",
            "responses": "",
            "directory": ["screen_2"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "",
            "responses": "",
            "directory": [],
            "image": require("../art/source_image_1.png"),
        }
    },

    "char_6": {
        "screen_1": {
            "dialogue": "",
            "responses": "",
            "directory": ["screen_2"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "",
            "responses": "",
            "directory": [],
            "image": require("../art/source_image_1.png"),
        }
    },

    "char_7": {
        "screen_1": {
            "dialogue": "",
            "responses": "",
            "directory": ["screen_2"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "",
            "responses": "",
            "directory": [],
            "image": require("../art/source_image_1.png"),
        }
    },

    "char_8": {
        "screen_1": {
            "dialogue": "",
            "responses": "",
            "directory": ["screen_2"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "",
            "responses": "",
            "directory": [],
            "image": require("../art/source_image_1.png"),
        }
    },

    "char_9": {
        "screen_1": {
            "dialogue": "",
            "responses": "",
            "directory": ["screen_2"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "",
            "responses": "",
            "directory": [],
            "image": require("../art/source_image_1.png"),
        }
    },

    "char_10": {
        "screen_1": {
            "dialogue": "",
            "responses": "",
            "directory": ["screen_2"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "",
            "responses": "",
            "directory": [],
            "image": require("../art/source_image_1.png"),
        }
    },

    "char_11": {
        "screen_1": {
            "dialogue": "",
            "responses": "",
            "directory": ["screen_2"],
            "image": require("../art/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "",
            "responses": "",
            "directory": [],
            "image": require("../art/source_image_1.png"),
        }
    },
}
