/**
 * Task: Write a function to sum a range of numeric elements from an array. 
The function takes three parameters - the first is an array, the second is the start index 
and the third is the end index. Both indexes are inclusive. 
Have in mind that the array elements may not be of type Number and cast everything. 
Implement the following error handling:
•	If the first element is not an array, return NaN
•	If the start index is less than zero, consider its value to be a zero
•	If the end index is outside the bounds of the array, assume it points to the last index of the array
Input / Output
Your function must take three parameters. As output, return the sum.

Examples
Input	                            Output
[10, 20, 30, 40, 50, 60], 3, 300	150
[1.1, 2.2, 3.3, 4.4, 5.5], -3, 1	3.3
[10, 'twenty', 30, 40], 0, 2	    NaN
[], 1, 2	                        0
'text', 0, 2	                    NaN
 */

/**
 * @param {number[]} array 
 * @param {number} startIndex 
 * @param {number} endIndex 
 * @returns {(array | NaN)} array || NaN
 */
function solve(array, startIndex, endIndex) {
    if (Array.isArray(array) == false) {
    return NaN;
    }
    if (startIndex < 0) {startIndex = 0; }
    if (endIndex > array.length - 1) {
    endIndex = array.length - 1;
    }
    return array
    .slice(startIndex, endIndex + 1)
    .map(Number)
    .reduce((acc, x) => acc + x, 0);
   }