
/*
What is the value of b?

2
3
true
(false)
*/

var a = 2;
var b = a;
a = 3;
var result = b === 3;

////////////////////////////////////////
/*
After the following code is run, what will be the value of result?

2
3
(true)
*/

var a = 2;
var b = a;
a = 3;
var c = b;
c = a;
c = 2;
var result = b === c;

/////////////////////////////////////////////////////
/*
After the following code is run, what will be the value of result?
2
'3'
(true)
false
*/
var a = 2;
var b = "3";
var result = typeof (typeof a) === typeof b;

/////////////////////////////////////////////////////
/*
After the following code is run, what will be the value of result?
5
true
'number'
('number2')
*/

var a = typeof (3 + 2);
var b = typeof 3 + 2;
var result = a = b;

/////////////////////////////////////////////////////////
/*
After the following code is run, what will be the value of result?
true
false
'true'
('false')
*/
var result;
var a = 2 * "three";
var b = 3 + "two";
if(typeof a === typeof b){
  result = "true";
} else {
  result = "false";
}
result = result || isNaN(a) && typeof a !== "number";
