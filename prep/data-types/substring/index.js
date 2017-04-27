/*Instructions

Another property we can use on strings besides .length() is the .substring() property in JavaScript.
Substring returns a portion of a string that we designate using indexes of a string.
Each character in a string has an index - a number that corresponds to the position of a character in a string.

For instance, in the string “Hallebot”, ‘H’ has the inex 0, ‘a’ has the index 1, ‘l’ has the index 2,
and so on and so forth. We use these indexes in our substring property to choose the portion of our
string we’d like to use.

If we wanted to get ‘Hal’ from Hallebot while using substring, we’d type:
‘Hallebot’.substring(0,3).

When we use substring, we use two numbers inside the parenthesis.
The first number  is the index of the first letter of the string that we want to grab,
while the second number is the index of the last number we want to grab plus one.

So:

string.substring(firstLetterIndex, lastLetterIndex + 1) Will be the format you can use on any string
to successfully use substring.

Where the code editor says ‘your code here’ :
1) In a console.log statement, use substring on the string “HalleB0t” to print “Hal” to the console.
2) In a second console.log statement, use substring on the string “Fraboni” to print ‘rabo’ to the console.
3) In a console.log statement, use substring on the string ‘Immersion’ to print ‘mers’ to the console.
4) Some examples have been provided below.

Make sure to place your console.log statement ONLY where it says ‘your code here’
and before the final curly brace and semicolon ‘ };
*/

//example
console.log("Selina".substring(0,3)); //prints "Sel" to the console
console.log("Maddy".substring(1,4)); //prints "add" to the console

// Your code here:
