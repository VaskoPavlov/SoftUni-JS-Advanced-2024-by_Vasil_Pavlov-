/**
 * Task: Your tests will be supplied with a function named 'sum()'. 
 * It should meet the following requirements:
•	Take an array of numbers as an argument
•	Return the sum of the values of all elements inside the array
 */
/**
 * @param {number[]} arr
 * @returns {number} sum
 */
function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}

export{
    sum
}