// solution code here:
// make sure it passes all of the test specs
function giveGrade(grade) {
  if(grade <= 100 && grade >= 90){
    return'A';
  } else if (grade < 90 && grade >= 80){
    return 'B';
  } else if (grade < 80 && grade >= 70){
    return 'C';
  } else if(grade < 70 && grade >= 60){
    return 'D';
  } else {
    return 'F';
  }

}

console.log(giveGrade(90)); //must test for every opption above.
console.log(giveGrade(80));
console.log(giveGrade(70));
console.log(giveGrade(60));
console.log(giveGrade(50));
