/**
 * Task: Write a function that adds a number passed to it to an internal sum and returns itself 
 * with its internal sum set to the new value, so it can be chained functionally. 
Hint: Overwrite toString() of the function. 
 
Input
Your function needs to take one numeric argument.
Output
Your function needs to return itself with an updated context.

Example
Input	        Output
add(1)	        1
add(1)(6)(-3)	4
 */
/**
 * @param {number} num 
 * @returns {Function} innerAdd (itself with an updated context)
 */
function add(num) {
    let sum = num;
    
    function innerAdd(nextNum){
        sum += nextNum;
        return innerAdd;
    }

    innerAdd.toString = function() {
        return sum;
    }

    return innerAdd;
}