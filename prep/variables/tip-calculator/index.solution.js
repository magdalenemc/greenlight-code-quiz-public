// solution code here:
// make sure it passes all of the test specs
var foodPrice = 28.50;
var tax = 0.10;
var tenPercent = 0.10;
var fifteenPercent = 0.15;
var twentyPercent = 0.20;


var totalNoTip = foodPrice + (foodPrice * tax);
var tenPercentTip = totalNoTip + (totalNoTip * tenPercent);
var fifteenPercentTip = totalNoTip + (totalNoTip * fifteenPercent);
var twentyPercentTip = totalNoTip + (totalNoTip * twentyPercent);

console.log('Your total is $' + totalNoTip.toFixed(2)
+ ', not including gratuity');
console.log('Here are some options including gratuity: ');
console.log('10% : $' + tenPercentTip.toFixed(2));
console.log('15% : $' + fifteenPercentTip.toFixed(2));
console.log('20% : $' + twentyPercentTip.toFixed(2));
console.log('Please tip your waiter!');
