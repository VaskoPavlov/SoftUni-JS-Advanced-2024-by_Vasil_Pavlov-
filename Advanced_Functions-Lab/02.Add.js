/**
 * Task:Write a program that keeps a number inside its context and returns a new function that 
 * adds a given number to the previous one.
Input
Check the examples below to see how your code will be executed.
Output
Your function should return the final result.

Examples
Sample Input	       Output
let add5 = solution(5);
console.log(add5(2));   7
console.log(add5(3));	8
let add7 = solution(7);
console.log(add7(2));   9
console.log(add7(3));	10
 */
/**
 * @param {number} number 
 * @returns {Function} add
 */
function solution(number) {
    let currentNum = number;
    function add(num) {
         let result = currentNum + num;
         return result;
    }
    return add;
}