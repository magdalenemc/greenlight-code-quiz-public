// solution code here:
// make sure it passes all of the test specs
//Your code
var firstName = "Katie"; //can be any first name - must be string value

const logName = () => {
  if (firstName.length >= 7) {
    console.log("You have a pretty long Name, " + firstName);
  } else {
    console.log("Your name's pretty short, " + firstName);
  }
};
