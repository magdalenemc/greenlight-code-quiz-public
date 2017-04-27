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

// Your code above here
