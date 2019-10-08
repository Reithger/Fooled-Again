export default {
    "default": {
      "text" : ["Canadian authorities ignoring hazards of costly refugee system"],
      "image" : require('../art/profiles/source_image_1.png'),
    },

    "present" : {
      "text" : ["Hey friends, I saw that people were getting worked up about this"+
		            " news story circulating on social media so I talked to a few folks"+
                " and did some fact checking.",

                "Turns out that not everything in the story is true.",

                "See below for which parts of the story can be verified.",

                "Don’t get fooled by fake news!"],
      "image" : require("../art/newspapers.png"),
    },
    "unprepared" : {
      "text" : ["Hmm...",

                "I don't think I've quite figured this out yet.",

                "I should make sure that I have tracked down all of the claims that I've heard."],
      "image" : require("../art/newspapers.png"),
    },

    "failure" : {
      "text" : "Anti-immigration protests rocked the city today "+
		"as a result of a fake news story that falsely "+
		"claimed refugees were causing violence.",
      "image" : require("../art/stand_in.png"),
    },
    "success" : {
      "text" : "Fact checkers saved the city from potential riots today when "+
		"they exposed a viral anti-immigrant story as Fake News.",
      "image" : require("../art/stand_in.png"),
    },

    "answer" : [false, false, true, true, true, true, false, false, true, false, true],
}
