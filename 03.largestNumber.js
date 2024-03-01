/**
 * Task: Write a function that takes three number arguments as input 
 * and finds the largest of them. 
 * Print the following text on the console:  
 * `The largest number is {number}.`.

    The input comes as three number arguments passed to your function.
 */

// Solution WITH build in method Math.max()
/**
 * @param {number} numOne 
 * @param {number} numTwo 
 * @param {number} numThree 
 */
function largestNumber(numOne, numTwo, numThree){
    console.log(`The largest number is ${Math.max(numOne, numTwo, numThree)}.`);
}
// Solution WITHOUT build in method
/**
 * @param {number} numOne 
 * @param {number} numTwo 
 * @param {number} numThree 
 */
function largestNumber(numOne, numTwo, numThree){
    if (numOne > numTwo && numOne > numThree){
        console.log(`The largest number is ${numOne}.`);
    }
    if (numTwo > numOne && numTwo > numThree){
        console.log(`The largest number is ${numTwo}.`);
    }
    if (numThree > numTwo && numThree > numOne){
        console.log(`The largest number is ${numThree}.`);
    }
}