/**
 * Task: You are given an array of numbers. Write a JS function that sorts the array in ascending order 
 * and returns a new array, containing only the second half of the input. 
 * If there is an odd number of elements in the input, always take the bigger half. 
 * For example, if the input array contains 4 elements, the output should be 2, and if the input is 5 – 
 * the output is 3.
 * 
 * The input comes as an array of number elements.
 * The output is the return value of the function and should be an array of numbers.
 */

/**
 * @param {number[]} array 
 * @returns {Array} finalArray
 */
function biggerHalf (array){
    function compareNumbers(a,b){
        return a - b;
    }
    let sortedArr = array.sort(compareNumbers);
    let finalArray = [];
    if(sortedArr.length % 2 === 0){
        let numCount = sortedArr.length / 2;
        for (let i = 0; i < numCount; i++){
            finalArray.push(sortedArr.pop());
        }
    } else {
        let numCount = sortedArr.length / 2;
        for (let i = 0; i <= numCount; i++){
            finalArray.push(sortedArr.pop());
        }
    }
    finalArray.sort(compareNumbers);
    return finalArray;
}