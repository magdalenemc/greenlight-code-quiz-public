// solution code here:
// make sure it passes all of the test specs
/* eslint no-unused-vars: "off" */

/** 
 * Given an input String, return its length.
 * 
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

function length(string) {
  // YOUR CODE BELOW HERE //
  return string.length;


  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
  // YOUR CODE BELOW HERE //
  return string.toLowerCase();


  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
  // YOUR CODE BELOW HERE //
  return string.toUpperCase();


  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 * 
 * Examples:
 * 
 *      toDashCase('Hello World'); // => 'hello-world'
 * 
 * TIP: How can you look for and replace a space in a String? How can you 
 *      enforce lowercase? Look at the global replace link below, or, try String 
 *      methods split and join?
 *      
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
  // YOUR CODE BELOW HERE //
  return toLowerCase(string.split(' ').join('-'));


  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input String and a single character, return true if the String 
 * begins with the character, false otherwise. The Function is case insensitive.
 * 
 * Example:
 *  
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 * 
 * TIP: How can you use Array access to your advantage here? How can you 
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
  // YOUR CODE BELOW HERE //
  return toLowerCase(string[0]) === toLowerCase(char);


  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input String and a single character, return true if the String 
 * ends with the character, false otherwise. The Function is case insensitive.
 * 
 * Example:
 *  
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 * 
 * TIP: How can you use Array access to your advantage here? How can you 
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
  // YOUR CODE BELOW HERE //
  return toLowerCase(string[string.length - 1]) === toLowerCase(char);


  // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 * 
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  return stringOne + stringTwo;



  // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 * 
 * TIP: This Function pulls out all the arguments passed to it and stores them 
 *      in an Array called args. 
 * 
 *      When any Function is executed, all arguments passed to the Function are 
 *      stored in an Array-like Object called "arguments". The "arguments" Object
 *      is available within the local scope of the Function, so we can use the 
 *      "arguments" Object to inspect all values passed to the Function.
 * 
 *      Array-like Objects store their values using integer keys, starting at 0. 
 *      So while they are still lists of key/value pairs, they appear to be like 
 *      Arrays in that their keys are ordered indices.
 * 
 *      In this example, we are also introducing a new utility Function, 
 *      Array.from(), a property of the Array constructor - it is a Function that
 *      converts an Array-like Object into an Array by plucking out only its 
 *      integer keys, and ordering them into an Array.
 * 
 *      Things to Google in JavaScript: arguments Object, Array-like Objects, Array.from()
 */
function join(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  const args = Array.from(arguments);
  return args.reduce(function(concatenated, string) {
    return concatenated + string;
  }, '');

  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 * 
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  return length(stringOne) > length(stringTwo) ?
    stringOne : stringTwo;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the 
 * first, and return 0 if they're equal.
 * 
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  if (toLowerCase(stringOne) === toLowerCase(stringTwo)) {
    return 0;
  }
  console.log(stringOne, stringTwo);
  return stringOne > stringTwo ? -1 : 1;
  // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the 
 * first, and return 0 if they're equal.
 * 
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
  // YOUR CODE BELOW HERE //
  if (toLowerCase(stringOne) === toLowerCase(stringTwo)) {
    return 0;
  }
  return stringOne > stringTwo ? 1 : -1;
  // YOUR CODE ABOVE HERE //
}
