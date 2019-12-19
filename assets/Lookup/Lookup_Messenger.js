export default {
    "default": [
        {source : "name", text : "text", image : require('../art/meta/icon.png')},
    ],

    "identity" : {
        player : {name :"You", image : require('../art/profiles/cat_comic.png')},
        "source_0" : {name : "Eva", image : require('../art/profiles/profile_18_comic.png')},
        "source_1" : {name :"Devon", image : require('../art/profiles/profile_1_comic.png')},
        "source_2" : {name :"Jannet", image : require('../art/profiles/profile_2_comic.png')},
        "source_3" : {name :"Mitch", image : require('../art/profiles/profile_3_comic.png')},
        "source_4" : {name :"Hildre", image : require('../art/profiles/profile_4_comic.png')},
        "source_5" : {name :"Glen", image : require('../art/profiles/profile_5_comic.png')},
        "source_6" : {name :"Nura", image : require('../art/profiles/profile_13_comic.png')},
        "source_7" : {name :"Sean", image : require('../art/profiles/profile_7_comic.png')},
        "source_8" : {name :"Drake", image : require('../art/profiles/profile_8_comic.png')},
        "source_9" : {name :"Snowd'n", image : require('../art/profiles/profile_9_comic.png')},
        "source_10" : {name :"Kim", image : require('../art/profiles/profile_10_comic.png')},
        "source_11" : {name :"Rachel", image : require('../art/profiles/profile_14_comic.png')},
        "special" : {name : "Hadiya", image : require("../art/profiles/special_comic.png")},
    },

    "script" : {

      intro : {
        content : [
          {source : "player", text : "Joined Chatroom"},
          {source : "player", text : "Hi peeps. Just read this super disturbing news story. Not 100% sure "+
          "if it is all true. If you folks have been following this issue let me know. http://www.canadanewswire.ca.co",
          choice : ["Verify", "Question"], goto : ["blue1", "red1"]},
        ]
      },
      red1 : {
        content : [
          {source : "player", text : "Ok, so did anyone else hear about refugee kids attacking their classmates?	"},
          {source : "source_1", text : "For sure. That story was reported in our local newspaper. "},
          {source : "player", text : "Did the refugee kid really send a post threatening to hurt his classmates?"},
          {source : "source_5", text : "Yes, the social media sites used an advanced algorithm to translate it and apparently the "+
          "Arabic comment he posted says “I want to hurt them.”"},
          {source : "source_1", text : "Okay, but wouldn’t you lash out if you were bullied just because you came from a war torn country? "+
          "Other kids want to hurt each other all the time. I feel like the only reason this is getting shared so much is because he’s different.",
          choice : ["Verify", "Question"], goto : ["blue3", "red2"]},
      	],
      	},
      red2 : {
      	content : [
          {source : "player", text : "Is there proof that some academic really said that stuff linking immigrants and violence? "},
          {source : "source_8", text : "yes, it got international media coverage."},
          {source : "source_6", text : "Sasquatch gets international media coverage too sometimes, that doesn’t mean they’re real."},
          {source : "source_5", text : "It is true he said it but he has got his facts all wrong. Research shows that immigrants are less "+
          "violent and commit less crime.", choice : ["Verify", "Question"], goto : ["blue4", "red3"]},
      	],
      	},
      red3 : {
      	content : [
          {source : "player", text : "The news story says Canada is asking a bunch of African countries for a million immigrants. I feel like I’ve heard that before.	"},
          {source : "source_6", text : "well at least this time the Africans have a choice about coming."},
          {source : "source_10", text : "I just googled it. There are tons of websites with that info."},
          {source : "source_8", text : "I am not so sure. When I looked more closely it seems that the websites reporting it seemed a bit sketchy. They "+
          "share misleading information some of which is pretty Islamophobic."},
          {source : "source_1", text : "A lot of those websites have a ton of misspellings and use comic sans as their font. So, I’d be wary of those."},
          {source : "source_10", text : "Does our immigration office go to a continent and say “I’ll take a millions, pls.” I don’t think so. Our immigration system is "+
          "merit based and people are highly vetted. We take immigrants because we have an aging population and low birth rates. It keeps the economy going.",
          choice : ["Verify", "Question"], goto : ["blue5", "red4"]},
      	],
      	},
      red4 : {
      	content : [
          {source : "player", text : "Is there a verified source for that story about the refugees slaughtering animals in the hotel?"},
          {source : "source_11", text : "Yeah for sure. I am looking at the news story right now. It was a goat that they killed."},
          {source : "source_3", text : "To be fair, if you were going to slaughter a goat in a hotel, the bathroom is probably the most logical place."},
          {source : "source_2", text : "Asking for a friend... Was the hotel kitchen not available?"},
          {source : "source_1", text : "I saw that the hotel management put out a press release saying no such thing happened. "},
          {source : "source_4", text : "Or maybe it DID happen and the management is just trying to cover it up… just kidding. That makes a lot more sense that it didn’t happen."},
          {source : "source_9", text : "Like, where do you even get a goat in Toronto?"},
          {source : "source_6", text : "Your moms.", choice : ["Verify", "Question"], goto : ["blue6", "red5"]},
      	],
      	},
      red5 : {
      	content : [
          {source : "player", text : "Did someone really try to burn down the hotel where the refugees are staying?"},
          {source : "source_7", text : "Multiple news sources are reporting the arson story with the dramatic pictures to prove it."},
          {source : "source_4", text : "Yeah, there was a small fire but no one got hurt. But the hotel was housing over 200 asylum seekers at the time. "+
          "Good thing whoever did it was too stupid to know how set a serious fire.", choice : ["Verify", "Question"], goto : ["blue7", "red6"]},
      	],
      	},
      red6 : {
      	content : [
          {source : "player", text : "Is there really photo evidence of Muslims celebrating the deadly shooting in Metro?"},
          {source : "source_9", text : "Why would the newspaper post something that wasn’t true?"},
          {source : "source_7", text : "Some publications just want to get clicks. Some want to fact-check first. This story didn’t happen and reputable newspapers "+
          "are debunking it. Unfortunately the debunk story never gets shared as much as the fake one.", choice : ["Verify", "Question"], goto : ["blue8", "red7"]},
      	],
      	},
      red7 : {
      	content : [
          {source : "player", text : "So is some political party promising to reduce the number of refugees in Canada, repeal multiculturalism and introduce a values test for new immigrants?"},
          {source : "source_0", text : "It’d be near impossible to know if a political party will actually keep a promise, but there are ways to find out if they’re claiming to make one.	"},
          {source : "source_3", text : "Pretty sure that is Fake news. If you get really mad when you read something then it is sure sign someone is trying to manipulate you."},
          {source : "source_2", text : "If someone is saying they want to repeal multiculturalism would they even pass a Canadian values test?", choice : ["Verify", "Question"], goto : ["blue9", "red8"]},
      	],
      	},
      red8 : {
      	content : [
          {source : "player", text : "Does the government really give more money to refugees than Canadian pensioners?"},
          {source : "source_10", text : "Wow, that claim is widely circulated and appears on dozens of web sites. "},
          {source : "source_5", text : "But you can look if a myth busting or fact checking site has confirmed or debunked it. I see a fact checking site that confirms it is true. "},
          {source : "source_4", text : "Not all fact checking sites are reputable. "},
          {source : "source_6", text : "So we have to fact check sites that are fact check sites? This sounds complicated."},
          {source : "source_9", text : "Just checked and it turns out that this is a false claim. No. Refugees do not get more financial help from the federal government than Canadian pensioners. "},
          {source : "source_8", text : "Found a good list of reputable fact checking sites from the library web page. I checked it and it turns out that the source of that fake news is a widely shared "+
          "email that mistakenly includes the one-time start-up payment to refugees as part of their monthly payment."},
          {source : "source_7", text : "It’s almost like these fake sites want to paint victims of global atrocities as some sort of drain on society in order to generate resentment with working people!",
          choice : ["Verify", "Question"], goto : ["blue10", "red9"]},
      	],
      	},
      red9 : {
      	content : [
          {source : "player", text : "Is this story even from a legitimate news site?"},
          {source : "source_6", text : "Good question! Creators of fake news stories often use a technique called “spoofing” where they make their story look like it is coming from a legitimate news site."},
          {source : "source_8", text : "There’s usually some pretty obvious tells, like the way a knock-off brand of anything doesn’t quite get everything right. That’s how I got shafted with this genuine Douche & Banana purse. "},
          {source : "source_0", text : "Yeah, if you look very closely at the URL for this news site you will see that it does not match that of the real news site. Notice that there is “.co” added to the end. Even though the story appears to be from a well-respected news source it is in fact just a convincing copy of the actual website."},
          {source : "source_9", text : "There’s a lot of fake news sites out there, wish there were more about baking, everybody likes cake news."},
          {source : "source_2", text : "Cake! So that’s what the C in CNN stands for!", choice : ["Thank"], goto : ["end"]},
      	],
      },
      blue1 : {
        content : [
          {source : "player", text : "How can I verify that refugee kids attacked their classmates?	"},
          {source : "source_3", text : "Our local newspaper reported that story. "},
          {source : "source_10", text : "Actually if you keep digging you will see that the newspaper that reported that story has now retracted it. The original article — based on the accounts of two unnamed parents who shared allegations of bullying and threatening behaviour by some new refugee children — has since been removed from the newspaper’s website."},
          {source : "source_5", text : "One of the kids in my class took the class hamster home for the weekend and fed it to his cat, I don’t think he was a refugee."},
          {source : "source_2", text : "It’d be nice if the retraction of any story had to be on the same page and as big a heading as the original story."},
          {source : "source_7", text : "Can u imagine? “Extra! Extra! We F-‘d up!”", choice : ["Confirm", "Proof"], goto : ["blue2", "red2"]},
        ],
      },

      blue2 : {
      	content : [
          {source : "player", text : "How could I confirm that the refugee kid sent a threatening post in Arabic to hurt his classmates?"},
          {source : "source_8", text : "You can use a translation app to check if the message has been translated correctly."},
          {source : "source_0", text : "Auto-translate algorithms utilize artificial intelligence but they do make mistakes. It is a good idea to check controversial translations on a few sites for yourself. "},
          {source : "source_10", text : "Better yet, if you know someone who actually speaks the language. Sometimes context is lost. Even when you speak the language, tone and sarcasm are routinely missed. Imagine when it’s another language altogether. "},
          {source : "special", text : "I can help you there. The social media site made an error when they translated the word “yusbihuhum” in the post as ”I want to hurt them”. The correct translation for “yusbihuhum” is: Good Morning."},
          {source : "source_5", text : "Wow. That algorithm was less of a translation and more of a Thesaurus for Antonyms on that one."},
          {source : "source_0", text : "Let’s hope the people who created that translator don’t get put in charge of making alien contact. “We come in peace!”  *Blows up Earth*", choice : ["Verify", "Question"], goto : ["blue3", "red2"]},
      		],
      	},
      blue3 : {
      	content : [
          {source : "player", text : "That “culture of violence’ stuff is pretty disturbing. Who is saying that? What’s their deal?"},
          {source : "source_3", text : "That guy is a professor! He promotes racist conspiracy theories and his talks are celebrated by neo-Nazis. He was recently forced to resign from his University for spreading anti-immigrant propaganda.  "},
          {source : "source_1", text : "Yeah, today’s racists use dog whistles - code words that they and their followers will know like “Those people” or “Old Stock Canadians.”", choice : ["Verify", "Question"], goto : ["blue4", "red3"]},
      		],
      	},
      blue4 : {
      	content : [
          {source : "player", text : "There must be a way to confirm whether Canada is seeking a million immigrants. "},
          {source : "source_2", text : "The Government website confirms that Canada has a 3 year global strategy to recruit one million immigrants but not from individual countries. "},
          {source : "source_6", text : "I heard all Canada Geese fly back to Canada and there must be millions of them, what were we talking about?"},
          {source : "source_10", text : "I know a million sounds like a lot of people, but there are already 37 millions of us. 1 million people is roughly  1% growth per year after three years. We need more people to help our economy grow."},
          {source : "source_5", text : "I think it’s great we’re trying to get more people from all over the world. Whether it’s Africa, Europe, Asia, or even Antarctica. Do any people come from Antarctica? Regardless it sounds nice."},
          {source : "source_3", text : "Yeh but I heard the world’s flat, what if it’s all those folks who’ve been hanging out on the underneath?"},
          {source : "source_7", text : "What if *we’re* actually the ones on the underneath and there’s a much better world on the other side?", choice : ["Verify", "Question"], goto : ["blue5", "red4"]},
      		],
      	},
      blue5 : {
      	content : [
          {source : "player", text : "What is the evidence for the story about the refugees slaughtering animals in the hotel?"},
          {source : "source_8", text : "How would you know? I know I’m messy enough where it probably “looks like” I slaughtered an animal in my hotel room, but to be clear - I never actually have."},
          {source : "source_4", text : "The claim that asylum-seekers slaughtered animals in the hotel bathrooms did not come from the news section of the paper. It was written by a columnist as an opinion piece."},
          {source : "source_10", text : "I’m looking at that opinion piece now. The columnist does not quote anyone who stayed at the hotel, or hotel staff, and appears to have relied entirely on an online review posted to a travel website from an unnamed visitor."},
          {source : "source_3", text : "I think we can do better than believing someone who believes a quote from an ANONYMOUS source on a comments page."},
          {source : "source_2", text : "What’s going on with the news media when they allow journalists to use an online comment as a source??? "},
          {source : "source_1", text : "I’d bet there’s a decent chance that whoever the “Anonymous” source was just someone trying to rent out their AirBnb. Sorry, I have no source to back this up. Now I’m spreading misinformation. Sorry.  "},
          {source : "source_9", text : "I saw that the hotel management put out a press release saying no such thing happened.  "},
          {source : "source_3", text : "The online review said animal services had to be called because of the slaughter, but animal services says that definitely didn’t happen. This is why good journalism is important, "+
          "and why bad journalists give all journalists a bad name.", choice : ["Verify", "Question"], goto : ["blue6", "red5"]},
      		],
      	},
      blue6 : {
      	content : [
          {source : "player", text : "Where can I find more information about whether someone tried to burn down the hotel where the refugees are staying?"},
          {source : "source_4", text : "Sounds like you need to go directly to the source these days to make sure you don’t get fooled by fake news. You can find police news releases on their websites. "},
          {source : "source_8", text : "You can also sometimes find funny stories on police blogs/websites. Like people calling about raccoons getting into their sheds. It’s adorable."},
          {source : "source_6", text : "I see that police reports confirm that they are investigating an arson attack at the hotel by someone who may have been motivated by the fake news about the animal slaughter."},
          {source : "source_3", text : "I hope whoever it was gets the help they so desperately need.", choice : ["Verify", "Question"], goto : ["blue7", "red6"]},
      		],
      	},
      blue7 : {
      	content : [
          {source : "player", text : "Is this a legit photo of Muslims celebrating the deadly shooting in Metro?	"},
          {source : "source_8", text : "I just did a quick reverse image search to find where that photo originates. Turns out that this photo shows people celebrating at a cricket match."},
          {source : "source_6", text : "It’s crazy how easy it is to take one piece of video and put a new fake title on it and it goes bananas online. They were celebrating something wholesome and people want to turn that into them being terrorist supporters. Awful! "},
          {source : "source_10", text : "Well that brings up a whole new line of questions, mainly: why would anyone be celebrating cricket?"},
          {source : "source_1", text : "Oh you have no idea how big a deal cricket is outside of North America! It’s huge!", choice : ["Verify", "Question"], goto : ["blue8", "red7"]},
      		],
      	},
      blue8 : {
      	content : [
          {source : "player", text : "How can I find out about a political party’s platform?"},
          {source : "source_0", text : "It is easy to check the social media posts of public figures. Make sure to look for the verified symbol so you know it is not an imposter."},
          {source : "source_1", text : "Political parties also have their election platforms available online."},
          {source : "source_4", text : "Fun fact: The vast majority of voters never read the party platform because it’s usually pretty detailed and long. If you actually read the whole thing, you’re head and shoulders above 99% of people. "},
          {source : "source_3", text : "That’s also a good source for AFTER the election so you can see if the candidate is actually trying to keep their promises."},
          {source : "source_4", text : "Just looked that up.  Yes, the party platform calls for repealing the multiculturalism act and reducing the number of refugees coming to Canada and imposing a values test on new immigrants. "},
          {source : "source_3", text : "Disturbing how brazenly open they are out their racism. "},
          {source : "source_6", text : "That doesn’t sound very nice of us. We got plenty of room. I literally have a spare couch if any immigrant needs a place to stay for a bit. It pulls out into a bed any everything.",
          choice : ["Verify", "Question"], goto : ["blue9", "red8"]},
      		],
      	},
      blue9 : {
      	content : [
          {source : "player", text : "What’s the source of the claim that the government really gives more money to refugees than Canadian pensioners?	"},
          {source : "source_7", text : "Found a good list of reputable fact checking sites from a library web page. Turns out that the source of that fake news is a widely shared email that mistakenly includes the "+
          "one-time start-up payment to refugees as part of their monthly payment."},
          {source : "source_8", text : "People are being set up to get angry at immigrants when they should be angry at capitalism for hoarding the wealth and resources that would allow us all to prosper. "+
          "I wonder who gave them that idea?", choice : ["Verify", "Question"], goto : ["blue10", "red9"]},
      		],
      	},
      blue10 : {
      	content : [
          {source : "player", text : "I’m starting to wonder who is benefitting from this news story. How can I find out more about it? "},
          {source : "source_11", text : "Been following the news site that put out this wild story – looks like they are funded by the Islamophobia industry who are spending bug bucks to stir up hate against Muslims."},
          {source : "source_9", text : "Some people just cash in big by creating sensational fake news stories that get us all mad and keep us paying attention longer to view more ads. This madness has got to stop!",
          choice : ["Thank"], goto : ["end"]},
      	],
      },
      end : {
        content : [
          {source : "player", text : "Thanks guys. Fact checking by committee is kind of fun! If the story IS true I feel like we need to do something. If the story ISNT true we also need to do something.",
          choice : [""], goto : ["done`"]},
        ],
      },
    },
}
