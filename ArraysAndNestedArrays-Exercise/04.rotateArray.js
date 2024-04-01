/**
 * Task: Write a JS function that rotates an array. The array should be rotated to the right side, 
 * meaning that the last element should become the first, upon rotation. 
 * 
 * The input comes as two parameters – an array of strings and a number. 
 * The second parameter is the amount of rotation you need to perform.
 * The output is the resulting array after the rotations. 
 * The elements should be printed on one line, separated by a single space.
 */

/**
 * @param {string[]} array 
 * @param {number} number 
 */
function rotate(array, number) {
    // Calculate the effective rotation count by taking the modulus
    const rotation = number % array.length;
  
    // Extract the elements that need to be rotated
    const rotatedElements = array.slice(-rotation);
  
    // Concatenate the rotated elements with the remaining elements
    const result = rotatedElements.concat(array.slice(0, -rotation));
  
    console.log(result.join(' '));
}

// !    The slice() method takes two arguments: the starting index and the ending index. It returns a new array containing the elements from the original array within the specified range.
// !In this case, -rotation is used as the starting index. A negative index counts from the end of the array, so -rotation indicates the position rotation elements from the end.
// !For example, if rotation is 2 and the array length is 4, -rotation will be -2, which corresponds to the second-to-last element in the array.
// !By using array.slice(-rotation), we extract the elements from the specified starting index (-rotation) until the end of the array. This effectively extracts the last rotation elements from the original array.
// !So, in the context of the problem, array.slice(-rotation) is used to retrieve the elements that need to be rotated, so that they can be concatenated with the remaining elements to form the rotated array.
