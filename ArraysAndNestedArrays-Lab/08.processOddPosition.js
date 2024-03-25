/**
 * Task: You are given an array of numbers. 
 * Write a JS function that returns the elements at odd positions from the array, 
 * doubled and in reverse order.

 * The input comes as an array of number elements.
 * The output is the return on the console on a single line, separated by space
 */

/**
 * @param {number[]} array 
 * @returns {array} finalArray
 */
function processOddPos (array){
    let finalArray = [];
    for(let i = 0; i < array.length; i++){
        if(i % 2 !== 0){
            finalArray.unshift(array[i] * 2);
        }
    }
    return finalArray.join(' ');
}