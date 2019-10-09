import LookupSolveType from './Lookup_Solve_Type';

export default {
    "default": {
        "name": "Test Character/Scenario Name",
        "portrait_path": require("../art/profiles/source_image_4.png"),
        "settings_image": require("../art/stand_in.png"),
 	      "solve_type": "newspaper",
        "description": "Whoops, guess someone did a thing that wasn't exactly morally good so now we gotta get after them and do a news journal on 'em."
    },

    "characters" : ["char_1", "char_2", "char_3", "char_4", "char_5", "char_6", "char_7", "char_8", "char_9", "char_10", "char_11"],

    "lines" : [[0, 1, 2, 3, 4, 5], [6, 7, 8, 9, 10]],

    "char_1": {
        "name": "Character 1",
        "portrait_path": require("../art/profiles/source_image_1.png"),
        "settings_image": require("../art/stand_in.png"),
 	      "solve_type": LookupSolveType["newspaper"],
        "description": "You've heard a rumor being spread around that refugees have been slaughtering animals in "+
          "the bathrooms of their hotel, and managed to find the source of those rumours. Why not ask a few questions "+
          "about this claim?",
    },

    "char_2": {
        "name": "Character 2",
        "portrait_path": require("../art/profiles/source_image_2.png"),
        "settings_image": require("../art/stand_in.png"),
 	      "solve_type":  LookupSolveType["laptop"],
          "description": "Something about your interview with Character 1 has struck you as strange. Maybe you should "+
          "follow up and check out where that news story actually came from.",
    },

    "char_3": {
        "name": "Character 3",
        "portrait_path": require("../art/profiles/source_image_3.png"),
        "settings_image": require("../art/stand_in.png"),
 	      "solve_type":  LookupSolveType["word_bubble"],
        "description": "A friend of the family has been distressed lately after some rumors circulated about an incident "+
          "at a school several counties over; some of the things they've said has been concerning to say the least. You've "+
          "decided to sit down and talk with her.",
    },

    "char_4": {
        "name": "Character 4",
        "portrait_path": require("../art/profiles/source_image_4.png"),
        "settings_image": require("../art/stand_in.png"),
 	      "solve_type":  LookupSolveType["laptop"],
        "description": "After getting home from a day of work, you find a friend of yours staring at their laptop screen "+
        "with distress. As you enter the room, they look up and turn the screen towards you.",
    },

    "char_5": {
        "name": "Character 5",
        "portrait_path": require("../art/profiles/source_image_5.png"),
        "settings_image": require("../art/stand_in.png"),
 	      "solve_type":  LookupSolveType["laptop"],
        "description": "Something about Character 3 struck you the wrong way; probably the fact that they've gotten panicked "+
          "several times this year already and every time it's been some sensational story with no substance. You should follow "+
          "up on it and confirm the details.",
    },

    "char_6": {
        "name": "Character 6",
        "portrait_path": require("../art/profiles/source_image_6.png"),
        "settings_image": require("../art/stand_in.png"),
 	      "solve_type":  LookupSolveType["microphone"],
        "description": "There seems to have been some possible truth to an earlier story about refugee children showing "+
          "threatening behavior; according to a Fritter post, there was a post by one kid in their native language that "+
          "translated to some concerning stuff. You should investigate.",
    },

    "char_7": {
        "name": "Character 7",
        "portrait_path": require("../art/profiles/source_image_7.png"),
        "settings_image": require("../art/stand_in.png"),
 	      "solve_type":  LookupSolveType["newspaper"],
          "description": "A claim has been going around saying that the government is giving more money to refugees than "+
          "to Canadian pensioners, and it's been spreading like wildfire. Where did this claim come from, and is it true?",
    },

    "char_8": {
        "name": "Character 8",
        "portrait_path": require("../art/profiles/source_image_8.png"),
        "settings_image": require("../art/stand_in.png"),
 	      "solve_type":  LookupSolveType["microphone"],
        "description": "There's been some chatter lately about someone having tried to commit arson on the hotel where "+
          "the refugees are staying. You need to look into this and either confirm or deny its truth, and if true perhaps "+
          "figure out why they did it.",
    },

    "char_9": {
        "name": "Character 9",
        "portrait_path": require("../art/profiles/source_image_9.png"),
        "settings_image": require("../art/stand_in.png"),
 	      "solve_type":  LookupSolveType["newspaper"],
        "description": "You heard some discomforting rumors today about Canada apparently asking other countries for a "+
          "million immigrants; the speakers generally referenced the same news article, and spoke about it in terms of an "+
          "'invasion'. You should check it out.",
    },

    "char_10": {
        "name": "Character 10",
        "portrait_path": require("../art/profiles/source_image_10.png"),
        "settings_image": require("../art/stand_in.png"),
 	      "solve_type":  LookupSolveType["laptop"],
        "description": "You found the news story about Canada asking other countries for a million immigrants and "+
          "were able to sort of corroborate it; it definitely mis-represented Canada's intent, though, and you're "+
          "surprised such an official news site would publish that news report. Something seems off.",
    },

    "char_11": {
        "name": "Character 11",
        "portrait_path": require("../art/profiles/source_image_1.png"),
        "settings_image": require("../art/stand_in.png"),
 	      "solve_type":  LookupSolveType["laptop"],
        "description": "This is bad; a photo's been circulating on Fritter of Muslims celebrating, and the post "+
          "alleges that they're celebrating a recent shooting on the Metro. You need to verify where the image comes "+
          "from before the story is able to spread out of control.",
    },
}
