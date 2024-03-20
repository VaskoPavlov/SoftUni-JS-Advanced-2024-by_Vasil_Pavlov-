/**
 * Task: Write a function that calculates and returns the sum of the first and the last elements in an array.
 * 
 * The input comes as an array of string elements holding numbers.
 * The output is the return value of your function and should be a number
 */

/**
 * @param {string[]} array 
 */
function sumFirstLast(array){
    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());
    let sum = firstElement + lastElement;

    console.log(sum); 
}