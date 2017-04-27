/*
 * Instructions: WRITE CODE BELOW EACH OF THE NUMBERED INSTRUCTIONS.
 */

/*
 * 0. First, declare a const called "numbers"" and assign it to 
 * an Array containing 3 numbers, 1, 2, 3.
 */

const numbers = [1, 2, 3];

/*
 * 1. Write a Function called "printBackwards" that accepts an Array, 
 * and prints its valus in reverse order.
 */

function printBackwards(array) {
  for (var i = array.length - 1; i > -1; i--) {
    console.log(array[i]);
  }
}

/*
 * 2. Declare called a const called "obj" that contains 3 key/value 
 * pairs. The keys can be called anything, the values should 
 * be Strings.
 */

