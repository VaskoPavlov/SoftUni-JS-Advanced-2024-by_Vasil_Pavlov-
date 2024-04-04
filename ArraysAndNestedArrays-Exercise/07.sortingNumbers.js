/**
 * Task: Write a function that sorts an array of numbers so that the first element is the smallest one, 
 * the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one,
 * and so on. 
 * 
 * Return the resulting array.
 */

/**
 * @param {number[]} array 
 * @returns {number[]} result
 */
function sortingNums(array) {
    array.sort((a, b) => a - b);
    let left = 0;
    let right = array.length - 1;
    let result = [];
  
    while (left <= right) {
      if (left === right) {
        result.push(array[left]);
      } else {
        result.push(array[left]);
        result.push(array[right]);
      }
      left++;
      right--;
    }
  
    return(result);
}