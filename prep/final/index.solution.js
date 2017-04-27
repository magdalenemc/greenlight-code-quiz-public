/**
 * We're going to build a small app to process customer orders
 * for a food delivery service, similar to Uber Eats.
 */

/**
 * Let's create an order to work with.
 * Declare a variable named orderedItems and assign it to
 * an empty array.
 */

// Your code below here
var orderedItems = [];

// Your code above here

/**
 * Populate orderedItems with at least three items. Each
 * item should be an object with two properties:
 *  'name' and 'price'
 * The name value should be the name of the ordered item
 * i.e. "Chicken Pot Pie"
 * The price should be a number representing the cost of\
 * the item in dollars.
 */

// Your code below here
orderedItems.push(
  {
    name: "water",
    price: 0,
  },
  {
    name: "coke",
    price: 1.59,
  },
  {
    name: "chicken nuggets",
    price: 0.99,
  },
  {
    name: "fries",
    price: 1.29,
  }
);
// Your code above here

/*
 *  ---------- calculateSubTotal --------
 * Write a function 'calculateSubTotal' that will calculate the sum of
 * a array of ordered items. Example:
 * var ordered = [
 *    {
 *     name: "fried catfish",
 *     price: 10.99,
 *   },
 *   {
 *     name: "shrimp and grits",
 *     price: 12.49,
 *   },
 *   {
 *     name: "iced tea",
 *     price: 2.49,
 *   },
 * ];
 * 
 *  calculateSubTotal(ordered) ===  25.97
 */

// Your code below here
const calculateSubTotal = items => helpers.centsToDollars(items.reduce((sum, item) =>
  sum + helpers.dollarsToCents(item.price), 0));

// student style answer
// var calculateSubTotal: function (items){
//   var sum = 0;
//   for (var i; i < items.length; i++) {
//     sum =+ dollarsToCents(items[i].price);
//   }
//   return centsToDollars(sum);
// },

// Your code above here

/** 
 * ******  Note! *******
 * Performing calculations om floating-numbers in Javascipt (numbers
 * with a decimal point) cam produce unexpected results. 
 * 
 * Ex:   0.1 + 0.1 + 0.1 -> 0.12000000000000001 not 0.3 
 * 
 * Unexpected results are bad, especially when dealing with money. One
 * solution to Javascipt's floating-point craziness is to convert your
 * floats to integers. In the case of $US you could:
 *  - convert the dollars to cents,
 *  - make your calculations
 *  - convert the resulting cents back to dollars
 * 
 * 
 * Ex:   $13.37 === 1337 cents; 
 * 
 * ------- helpers ---------
 * Create an object named 'helpers'.
 * Populate your helper object  with two functions: 
 *    'dollarsToCents' and 'centsToDollars'.
 * Use these functions in your calculateSubTotal function.
 * 
 */

// Your code below here

const helpers = {
  dollarsToCents: dollars => dollars * 100,
  centsToDollars: cents => cents / 100,
};


// ES5
// var helpers = {
//   dollarsToCents: function(dollars){
//     return dollars * 100;
//   },
//   centsToDollars: function(cents){
//     return cents / 100;
//   },
// };

// Your code above here

/**
 * -------------- calculateTax --------
 * Gotta pay those taxes! Write a function calculateTax that takes a
 * subtotal and a tax rate and returns the sales tax amount in
 * dollars.
 * 
 * calculateTax(13.31, 9) -> 14.51
 * 
 */

// Your code below here
var calculateTax = function(subtotal, taxRate) {
  return helpers.centsToDollars(Math.round(subtotal * taxRate));
};

// Your code above here

/** 
 * ------- calculateGrandTotal -------
 * Create a function that takes:
 * - list of ordered items: (array)
 * - tax rate: (integer)
 * and returns the grand total for the order.
 * This function will use your subtotal and tax calculators
 * to produce the result.
 * 
 * var ordered = [
 *    {
 *     name: "fried catfish",
 *     price: 10.99,
 *   },
 *   {
 *     name: "shrimp and grits",
 *     price: 12.49,
 *   },
 *   {
 *     name: "iced tea",
 *     price: 2.49,
 *   },
 * ];
 * 
 * halleEats.calculateGrandTotal(ordered, 9) -> 
 * 
 *  */

// Your code below here

var calculateGrandTotal = function(items, taxRate) {
  var subtotal = calculateSubTotal(items);
  var tax = calculateTax(subtotal, taxRate);
  var grandTotal = subtotal + tax;
  return grandTotal;
};
// Your code above here

// Your code below here
var getDeliveryETA = function(distance) {
  if (typeof distance !== 'number' || distance < 0) {
    console.log('Invalid distance. Please input distance as a number of miles.');
  } else if (distance < 3) {
    console.log(`30-45 min`);
  } else if (distance < 5) {
    console.log(`40-55 min`);
  } else if (distance < 8) {
    console.log(`45-60 min`);
  } else {
    console.log('Sorry..you\'re too far. Go get it yourself.');
  }
};
// Your code above here
