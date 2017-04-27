// solution code here:
// make sure it passes all of the test specs
var weather = "rainy";

var logWeather = () => {
  if (weather === "cloudy") {
    console.log("Ideal day for vampires!");
  } else if (weather === "rainy") {
    console.log("Time to bring out your raincoat!");
  } else if (weather === "sunny") {
    console.log("You'll need sunglasses today!");
  } else {
    console.log("Hmm, must be snowing");
  }
};
