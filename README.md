# yikesOrNah
  customizable profanity/hate speech filter with several levels of checks, built on top of the 
    <a href="https://github.com/tensorflow/tfjs-models/tree/master/toxicity">
  tensorflow toxicity classifier
  </a>

  # WARNING
  ## As this project aims to filter language containing hate speech, some files contain examples of extremely explicit hateful langauge

The yikes Or Nah module was made with the goal of avoiding false positive matches, it isn't a perfect language filter by any means,
but it does a decent job imo

## How It Works

The toxicity classifier returns the certainty level that a sentence contains language in each of 7 categories:
identity attack, insult, obscene, severe toxicity, sexually explicit, threat, and general toxicity

But setting a threshold for a category isn't the best approach, as this leads to having false positives when making a filter to check if phrases should be allowed

For example, you might want to allow a phrase through that has a higher insult level than usual if it has a lower level of obscenity and racism

YikesOrNah builds a set of custom rules from a set of allowed sentences, you should provide it with sentences that are at the threshold of what is allowed.

Because of this there is a likelihood for false negatives. But there is a secondary hard check against a list banned words/phrases of your creation

The module also converts <a href="https://en.wikipedia.org/wiki/Homoglyph#:~:text=In%20orthography%20and%20typography%2C%20a,of%20characters%20sharing%20these%20properties."> homoglyphs </a> back to plain text which the toxicity classifier will work on, for example the classifier wont realize the phrase "1 h@t3 y0u" is an toxic phrase.

Hard checks are also done on the phrase with punctuation and spaces removed, and with multiple characters replaced with one, so if the word 'moist' was one of your banned words<br>
'm.o.i.s.t' or 'm<o.i,s-t' or 'm .o. i,s t', or just 'm  o  i  s  t' or 'mmmmmmooooooiiiiiiiissssssttttt' wont make it through 
<br />
letter emojis are included in the homoglyphs, and checks are done with non homoglyph emojis removed, so 
🅼🅾🅸🆂🆃 and m👏o👏i👏s👏t also wont make it through
<br />

These hard checks are great but they do lead to some false positives, for example: If the banned word was 'moist' again <br />
and the phrase to check was "the demo is today", with no spaces that is "thedemoistoday" which contains the word moist.

To avoid false positives like this, a threshold is created relative to the length of the string, and checks of modified versions of the string (like without spaces or punctuation) wont count as much towards that threshold as a check on the normal string.

Also words in the banned list directory are given a severity level from 0 being the most severe to 4 being partially allowable, strange spellings of banned words could have a lower severity, 'moyst' for example.


## How to use it

download this repository

open yikesOrNahBuildRules.html in an editor

Fill the list yikes_or_nah.bannedWords with words and phrases that will be strictly banned,<br />
fill the list with a string enclosed in quotes followed by an int 0-4 for it's severity,<br />
for example yikes_or_nah.bannedWordsAndSeverity = ["moist", 0, "moyst", 3, "moiest", 4];<br />
note the entries will be white space sensitive, which you can use to avoid banning words that would contain the banned word in them, for example if you wanted to ban the word cat but not catastrophe,
you could add " cat " to the bannedWords list with a space before and after.

Fill yikes_or_nah.testAllowedPhrases with phrases that might be considered toxic or insulting but are within what you want to allow, try to think of as many as you can
for my application I wanted phrases with profanity/sexual content to be allowed as long as they weren't threatening or extremely explicit or contained any hate speech.

Then fill yikes_or_nah.testDisallowedPhrases with some phrases you dont want to make it through, this is more just for testing and to see what kind of false negatives you get. But they will also be used to set thresholds at which checks are preformed.

You can view examples of these three lists in the exampleContentForBuildingRules folder in the file exampleContent.txt but be warned the file contains examples the extremely explicit language this project aims to filter

next open yikesOrNahBuildRules.html in your browser locally and it should generate a json file, place that along with yikesOrNah.js in your project directory on your server.



To check sentences in your project use the yikes_or_nah.checkEm function, the parameters you can pass are:
an array of sentences,<br />
optional callback function which will be passed the results which are an array of true/false (yikes/not yikes) for each sentence,<br />
optional array of extra info you can fill with anything that will be passed to the callback function<br />
optional true or false to console log info about the sentences passed, false by default<br />


here is an example of what your project might look like using this module (make sure to load tensorflowjs and toxicity)
```
<html>

<head>
  <!-- <script scr="" type="text/javascript"></script> -->
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity"></script>
  <script type='text/javascript' src='./yikesOrNah.js'></script>

</head>

<body></body>
<script>
  //example callback function
  function handleResults(res) {
    console.log(res);
    //for i in res do something, 
    console.log("this is the callback function")
  }
  //example usage
  window.addEventListener('load', function() {
    console.log("loaded");
    yikes_or_nah.checkEm(["hello friend", "go kill yourself I hate you, piece of shit"], handleResults)
})
 

</script>
</html>
```