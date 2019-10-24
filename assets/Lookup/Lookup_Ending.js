export default {
    "default": {
      "text" : ["Canadian authorities ignoring hazards of costly refugee system"],
      "image" : require('../art/profiles/source_image_1.png'),
    },

    "prepared" : {
      "source" : ["Local News Sources Rife with Errors",

                "11/12/2019 - You, the Player",

                require("../art/meta/newspapers.png"),

                "Hey friends, I saw that people were getting worked up about this"+
		            " news story circulating on social media so I talked to a few folks"+
                " and did some fact checking.",

                "Turns out that not everything in the story is true.",

                "See below for which parts of the story can be verified.",

                "Don’t get fooled by fake news!"],

      "format" : ["header", "tag", "frame", "body", "body", "body", "body"],
    },

    "recall" : [
        "Remember this?",
        "And this one.",
        "Memories abound!",
        "Oh, this was fun.",
        "This one was nasty.",
        "Why even bother with this?",
        "This'll jog the memory.",
        "Hey, that guy!",
        "And that old newstory.",
        "Love this chestnut",
        "Good times, friend.",
    ],

    "failure" : {
      "source" : ["Anti-immigration protests rocked the city today "+
            		  "as a result of a fake news story that falsely "+
            		  "claimed refugees were causing violence.",

                  require("../art/end/bad_ending.png"),
                ],
      "format" : ["header", "frame"],
    },

    "success" : {
      "source" : ["Fact checkers saved the city from potential riots today when "+
		              "they exposed a viral anti-immigrant story as Fake News.",

                  require("../art/end/good_ending.png"),
                ],
      "format" : ["header", "frame"],
    },

    "answer" : [false, false, false, true, false, false, false, true, false, false, false],
}
