// solution code here:
// make sure it passes all of the test specs
// Your code here:

var grade = 'A';

const logGrade = () => {
  switch (grade) {
  case grade === 'F':
    console.log("You failed the class");
    break;
  case grade === 'D':
    console.log("Your grade is low, you need to improve");
    break;
  case grade === 'C':
    console.log("You're doing OK, there is still roomm for improvement");
    break;
  case grade === 'B':
    console.log("Pretty good, you're close to acing the course!");
    break;
  case grade === 'A':
    console.log("Great job! You aced the course!");
    break;
  default:
    console.log("I don't recognize your grade...");
    break;
  }
};
