export default {
    "default": {
      "text" : ["Canadian authorities ignoring hazards of costly refugee system"],
      "image" : require('../art/profiles/source_image_1.png'),
    },

    "prepared" : {
      "source" : ["Local News Woes",

                "11/12/2019 - You, the Player",

                "Hey friends, I saw that people were getting worked up about this"+
		            " news story circulating on social media so I talked to a few folks"+
                " and did some fact checking.",

                "Turns out that not everything in the story is true.",

                "See below for which parts of the story can be verified.",

                "Don’t get fooled by fake news!"],

      "format" : ["header", "tag", "body", "body", "body", "body"],
    },

    "failure" : {
      "source" : ["Anti-immigration protests rocked the city today "+
            		  "as a result of a fake news story that falsely "+
            		  "claimed refugees were causing violence.",

                  "11/13/2019 - Professional Writer",

                  require("../art/end/bad_ending.png"),
                ],
      "format" : ["header", "tag", "frame"],
    },

    "success" : {
      "source" : ["Fact checkers saved the city from potential riots today when "+
		              "they exposed a viral anti-immigrant story as Fake News.",

                  "11/13/2019 - Professional Writer",


                  require("../art/end/good_ending.png"),
                ],
      "format" : ["header", "tag", "frame"],
    },

    "answer" : [false, true, false, false, true, false, true, false],
}
