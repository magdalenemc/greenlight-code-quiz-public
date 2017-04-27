// solution code here:
// make sure it passes all of the test specs
function tipCalculator(foodPrice, gratuity){
  var tax = 0.10;
  var meal = foodPrice + (foodPrice * tax);
  var total = meal + (meal * gratuity);
  return total;
}

var tenPercent = tipCalculator(28.50, 0.10);
var fifteenPercent = tipCalculator(28.50, 0.15);
var twentyPercent = tipCalculator(28.50, 0.20);

console.log('Your total bill with 10% gratuity is: $' + tenPercent.toFixed(2));
console.log('Your total bill with 15% gratuity is: $'
+ fifteenPercent.toFixed(2));
console.log('Your total bill with 20% gratuity is: $'
+ twentyPercent.toFixed(2));
