/**
 * Task: Create a function that can compose objects by copying functions from a given library of functions. 
 * You will receive two parameters – a library of functions as an associative array (object) and 
 * an array of orders, represented as objects. You must return a new array – the fulfilled orders.
The first parameter will be an object where each property is a function. 
You will use this library of functions to compose new objects.
The second parameter is an array of orders. Each order is an object with the following shape:
{
  template: [Object],
  parts: string[]
}
A template is an object that must be copied. The parts array contains the names of required functions 
as strings.
You must create and return a new array, by fulfilling all orders from the orders array. 
To fulfill an order, create a copy of the object’s template and then add to it all functions, 
listed in the parts array of the order, by taking them from the function library 
(the first parameter to your solution).

Input
You will receive two parameters:
•	library – an object
•	orders – an array of objects
Output
Your solution must return an array of objects.
 */

/**
 * @param {object} library 
 * @param {string[]} orders 
 * @returns {object[]} result
 */
function factory(library, orders) {
    const result = [];
    for (let order of orders) {
    // Create a copy of the 'template' object from the current order
    const current = Object.assign({}, order.template);
    for (let part of order.parts) {
    current[part] = library[part];
    }
    result.push(current);
    }
    return result;
}