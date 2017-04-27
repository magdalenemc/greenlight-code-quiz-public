// solution code here:
// make sure it passes all of the test specs
function weatherMan(weather) {
  if (weather === 'sunny') {
    return 'Bring out the sunglasses, folks!';
  } else if (weather === 'rainy') {
    return 'Time to bring out the umbrellas and raincoats!';
  } else if (weather === 'cloudy') {
    return 'Ideal day for vampires - no sun in sight!';
  } else {
    return 'Hm, must be snowing or something';
  }
}
// Users must do four function calls with each of the options
// from above and one new option.

// The only requirement for the fourth call is that it must be of
// type string.

weatherMan('sunny');
weatherMan('rainy');
weatherMan('cloudy');
weatherMan('windy');
