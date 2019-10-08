export default {
    "default": {
        "screen_1": {
            "dialogue": "This is presenting the player with some kind of information or scenario",
            "responses": ["This is one thing the user could do", "This is something else the user could do", "Or a third option similar to another"],
            "directory": ["screen_2", "screen_3", "screen_3"],
            "image": require("../art/profiles/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "If the user did one option, they may get this screen",
            "responses": ["And say this", "Or this"],
            "directory": ["screen_3", "screen_4"],
            "image": require("../art/profiles/source_image_1.png"),
        },
        "screen_3": {
            "dialogue": "Now the user could reach this point one of two ways",
            "responses": [],
            "directory": [],
            "image": require("../art/profiles/source_image_1.png"),
        }
    },

    "char_1": {
        "screen_1": {
            "dialogue": "You: Thanks for meeting with me. Regarding the claims you've made, do you really believe that refugees slaughtered " +
            "animals in the bathroom of a hotel?",
            "responses": ["(Continue)"],
            "directory": ["screen_2"],
            "image": require("../art/profiles/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "Char_1: I do. I read an expose on it in the newspaper a while back.",
            "responses": ["That seems incredibly unlikely, though; why are you so sure?"],
            "directory": ["screen_3"],
            "image" : require("../art/profiles/source_image_1.png"),
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
            "dialogue": "You: I'm not sure that news story about the refugees slaughtering animals is true...",
            "responses": ["(Look up the article)"],
            "directory": ["screen_2"],
            "image": require("../art/profiles/source_image_2.png"),
        },
        "screen_2": {
            "dialogue": "You: Yeah, here it is - wait, this isn't the news section. It's an opinion piece?",
            "responses": ["(Dig deeper)"],
            "directory": ["screen_3"],
            "image": require("../art/newspapers.png"),
        },
        "screen_3" : {
            "dialogue" : "You: They didn't interview anyone, and are basing their claims entirely on an online review?",
            "responses" : ["(Has the hotel put out a statement?)"],
            "directory" : ["screen_4"],
            "image": require("../art/newspapers.png"),
        },
        "screen_4" : {
            "dialogue" : "You: And according to this press release from the hotel, the whole thing is a hoax.",
            "responses" : ["(Whelp, glad we checked that)"],
            "directory" : ["exit_success"],
            "image": require("../art/newspapers.png"),
        },
    },

    "char_3": {
        "screen_1": {
            "dialogue": "You: Hello, thanks for meeting with me. I understand that this can be a... difficult time for a parent.",
            "responses": ["(Continue)"],
            "directory": ["screen_2"],
            "image": require("../art/profiles/source_image_3.png"),
        },
        "screen_2": {
            "dialogue": "Char_3: It's been terrible! I don't know if my kids are safe anymore going to school of all places.",
            "responses": ["So what happened?"],
            "directory": ["screen_3"],
            "image": require("../art/profiles/source_image_3.png"),
        },
        "screen_3" : {
            "dialogue" : "Char_3: You can read the story yourself! Those refugee children just attacked those poor, innocent children. What " +
            "are we going to do about this?",
            "responses" : ["I don't know. Do you mind if I keep this?"],
            "directory" : ["screen_4"],
            "image" : require("../art/newspapers.png")
        },
        "screen_4" : {
            "dialogue" : "Char_3: Please do! People need to know about the dangers that these refugees pose to our kids.",
            "responses" : ["Thanks."],
            "directory" : ["exit_success"],
            "image": require("../art/profiles/source_image_3.png"),
        },
    },

    "char_4": {
        "screen_1": {
            "dialogue": "Friend: Hey, did you hear the rumours about [political party leader]?",
            "responses": ["Rumours? Aren't they part of that new party [political part]?"],
            "directory": ["screen_2"],
            "image": require("../art/profiles/source_image_4.png"),
        },
        "screen_2": {
            "dialogue": "Friend: Yeah, they are. They've said... here it is: that they are promising to reduce the number of refugees in Canada, "+
            "repeal multiculturalism, and introduce a new values test for immigrants.",
            "responses": ["Where did they say that?"],
            "directory": ["screen_3"],
            "image": require("../art/profiles/source_image_4.png"),
        },
        "screen_3" : {
            "dialogue" : "Friend: You can read it yourself; they're not faked, you can go to their Fritter account yourself.",
            "responses" : ["(Check Fritter)"],
            "directory" : ["screen_4"],
            "image": require("../art/profiles/source_image_4.png"),
        },
        "screen_4" : {
            "dialogue" : "You: Okay, so... yep, they did say that, and it hasn't been taken down despite public backlash. This... is this their" +
            "public stance as the party's leader?",
            "responses" : ["(Continue)"],
            "directory" : ["screen_5"],
            "image": require("../art/profiles/source_image_4.png"),
        },
        "screen_5" : {
            "dialogue" : "Friend: Well, according to their website here, we can see their official platform and that is their official position.",
            "responses" : ["That's... whelp. Alright. Checks out."],
            "directory" : ["exit_success"],
            "image": require("../art/profiles/source_image_4.png"),
        }
    },

    "char_5": {
        "screen_1": {
            "dialogue": "You: That news article I got about the refugee children attacking other kids at school... I have to look "+
            "into this, it can't be right.",
            "responses": ["(Use the internet)"],
            "directory": ["screen_2"],
            "image": require("../art/profiles/source_image_5.png"),
        },
        "screen_2": {
            "dialogue": "You: According to this, the article's been... retracted! They cite unreliable sources as the reason; some "+
            "unnamed mothers and a grandparent alleged bullying and threatening behaviours, but had nothing to back that up.",
            "responses": ["(So what does this mean?)"],
            "directory": ["screen_3"],
            "image": require("../art/profiles/source_image_5.png"),
        },
        "screen_3": {
            "dialogue": "You: I'll have to show this to Character 3 and remind them not to spread this kind of gossip.",
            "responses": ["(Like that'll stop them)"],
            "directory": ["exit_success"],
            "image": require("../art/profiles/source_image_5.png"),
        }
    },

    "char_6": {
        "screen_1": {
            "dialogue": "You: Okay, so here's the original post... it says 'yusbihuhum' and if I click translate it - yep, "+
            "they weren't lying, that's an unpleasant thing to say.",
            "responses": ["(Language is complicated?)"],
            "directory": ["screen_2"],
            "image": require("../art/profiles/source_image_6.png"),
        },
        "screen_2": {
            "dialogue": "You: 'I want to hurt them.' Something about this rubs me the wrong way... Translation is an imperfect " +
            "process, maybe their automatic translation is wrong?",
            "responses": ["(Run it through another translator)"],
            "directory": ["screen_3"],
            "image": require("../art/profiles/source_image_6.png"),
        },
        "screen_3": {
            "dialogue": "You: Okay, this translation service has been training their AI for years and is used internationally, "+
            "let's give this one a go.",
            "responses": ["(Click that button)"],
            "directory": ["screen_4"],
            "image": require("../art/profiles/source_image_6.png"),
        },
        "screen_4": {
            "dialogue": "You: Aha! It doesn't translate to anything threatening, it just meant 'Good Morning'. Folks love to "+
            "jump on anything sensational these days.",
            "responses": ["(Exit)"],
            "directory": ["exit_success"],
            "image": require("../art/profiles/source_image_6.png"),
        }
    },

    "char_7": {
        "screen_1": {
            "dialogue": "You: I'm seeing this claim all over the place, but where did it first come from? Is it true?",
            "responses": ["(Dig deeper)"],
            "directory": ["screen_2"],
            "image": require("../art/profiles/source_image_7.png"),
        },
        "screen_2": {
            "dialogue": "You: I'm getting conflicting reports on this from several fact-checking sites; it seems like "+
            "the story started from an email about monthly payments.",
            "responses": ["(Who do I believe)"],
            "directory": ["screen_3"],
            "image": require("../art/profiles/source_image_7.png"),
        },
        "screen_3": {
            "dialogue": "You: Alright, this website looks trustworthy: it's a library research page, so that's pretty reliable. "+
            "Now what does it say?",
            "responses": ["(Continue)"],
            "directory": ["screen_4"],
            "image": require("../art/profiles/source_image_7.png"),
        },
        "screen_4": {
            "dialogue": "You: Okay, an email went around and... it incorrectly calculated the monthly payments, counting a one-time "+
            "payment as being continuing.",
            "responses": ["(Continue)"],
            "directory": ["screen_5"],
            "image": require("../art/profiles/source_image_7.png"),
        },
        "screen_5": {
            "dialogue": "You: So these claims are wrong and widespread... that's troubling.",
            "responses": ["(Exit)"],
            "directory": ["exit_success"],
            "image": require("../art/profiles/source_image_7.png"),
        }
    },

    "char_8": {
        "screen_1": {
            "dialogue": "Friend: Have you seen this? Sometime tried to burn down the hotel that the refugees are staying in!",
            "responses": ["For real? That's... not good."],
            "directory": ["screen_2"],
            "image": require("../art/profiles/source_image_8.png"),
        },
        "screen_2": {
            "dialogue": "Friend: The police put out a report about it, you can read it yourself.",
            "responses": ["Why did someone do that?"],
            "directory": ["screen_3"],
            "image": require("../art/profiles/source_image_8.png"),
        },
        "screen_3": {
            "dialogue": "Friend: They're saying it was motivated by a recent news story about refugees... slaughtering animals "+
            "in the bathroom of the hotel?",
            "responses": ["But that story was fake!"],
            "directory": ["screen_4"],
            "image": require("../art/profiles/source_image_8.png"),
        },
        "screen_4": {
            "dialogue": "Friend: I know, but it was still on the front page of the website for days; the correction? Not so much.",
            "responses": ["(Exit)"],
            "directory": ["exit_success"],
            "image": require("../art/profiles/source_image_8.png"),
        }
    },

    "char_9": {
        "screen_1": {
            "dialogue": "You: So, first of all, what is Canada's actual stance here?",
            "responses": ["(Check their website)"],
            "directory": ["screen_2"],
            "image": require("../art/profiles/source_image_9.png"),
        },
        "screen_2": {
            "dialogue": "You: According to the Government website, they have a three year global goal to... recruit one "+
            "million immigrants from any assortment of countries.",
            "responses": ["(Who misrepresented this?)"],
            "directory": ["screen_3"],
            "image": require("../art/profiles/source_image_9.png"),
        },
        "screen_3": {
            "dialogue": "You: Hmm... looking at the other stories this site has put out, it's no wonder they posed a recruitment "+
            "drive as an 'invasion'.",
            "responses": ["(Yikes!)"],
            "directory": ["screen_4"],
            "image": require("../art/profiles/source_image_9.png"),
        },
        "screen_4": {
            "dialogue": "You: This 'news site' is filled with islamaphobia and fear mongering; how many people are reading this?",
            "responses": ["(Exit)"],
            "directory": ["exit_success"],
            "image": require("../art/profiles/source_image_9.png"),
        }
    },

    "char_10": {
        "screen_1": {
            "dialogue": "You: Is this a legitimate news site? I don't remember them having this kind of material. Maybe it's...",
            "responses": ["(Doubt)"],
            "directory": ["screen_2"],
            "image": require("../art/profiles/source_image_10.png"),
        },
        "screen_2": {
            "dialogue": "You: Hang on... the url is wrong. It's almost the same, but they added '.co' to the end? They're pretending "+
            "to be someone they're not for authenticity!",
            "responses": ["(It's a clone!)"],
            "directory": ["exit_success"],
            "image": require("../art/profiles/source_image_10.png"),
        }
    },

    "char_11": {
        "screen_1": {
            "dialogue": "You: Okay, first of all there's nothing in the picture that has anything to do with the Metro shooting.",
            "responses": ["(Are people lying again?)"],
            "directory": ["screen_2"],
            "image": require("../art/profiles/source_image_1.png"),
        },
        "screen_2": {
            "dialogue": "You: So... let's try looking up this image to see where it actually came from... reverse image search please...",
            "responses": ["(Technology!)"],
            "directory": ["screen_3"],
            "image": require("../art/profiles/source_image_1.png"),
        },
        "screen_3": {
            "dialogue": "You: Oh for the love of - it's from a cricket match! They're celebrating sports! It's not...",
            "responses": ["(sigh)"],
            "directory": ["exit_success"],
            "image": require("../art/profiles/source_image_1.png"),
        }
    },
}
