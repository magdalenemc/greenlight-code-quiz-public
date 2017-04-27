/*
Instructions:
0. CODE BELOW THESE INSTRUCTIONS.
*/

/*
 1. First, declare an Array named urlParts
 */

var urlParts = [];

/*  
2. Great! Now populate urlParts with three Strings:
  a) Put your GitHub username as the first String 
     (if you don't remmeber it, you may just use 
     'my-github-username')
  b) Put the String, 'github' as the second element
  c) Put the String, 'io' as the third element.
*/

urlParts.push('harveysanders');
urlParts.push('github');
urlParts.push('io');

/*
3. Next, declare a Function named makePersonalUrl.

  a) makePersonalUrl should take an Array as its only parameter
     - you should name this Array something that tells the user 
     what they should provide.
  b) makePersonalUrl should return a String by joining the
     each of the 3 Strings in the Array. These
     Strings should be joined with a dot. For exmaple: 
     input: ['hallebot', 'github', 'io']
     output: 'hallebot.github.io'
*/

var makePersonalUrl = parts => parts.join('.');

/*
 4. Make a new Object named myData, and add the following key
    key-value pairs, following these instructions:
  a) fullName: assign this to String of your full name 
  b) github: assign this to your GitHub username stored in urlParts
 	c) website: call makePersonalUrl with urlParts as its argument 
*/

var myData = {
  fullName: 'Harvey Sanders',
  github: urlParts[0],
  website: makePersonalUrl(urlParts),
};
