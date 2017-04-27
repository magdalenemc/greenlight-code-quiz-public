// solution code here:
// make sure it passes all of the test specs
var salary = 10000;

const logPosition = () => {
  if (salary < 10000) {
    console.log("Part Time");
  } else if (salary < 30000) {
    console.log("Entry Level");
  } else if (salary < 60000) {
    console.log("Management Level");
  } else if (salary < 200000) {
    console.log("Senior Level");
  } else {
    console.log("C-Suite Level");
  }
};
