/**
 * Task: The input comes as two parameters – an array of strings and a number. 
 * The second parameter is N – the step.
 * 
 * The output is every element on the N-th step starting from the first one. 
 * If the step is 3, you need to return the 1-st, the 4-th, the 7-th … and so on, 
 * until you reach the end of the array. 
 * The output is the return value of your function and must be an array.
 */

/**
 * @param {string[]} array // example ['5', '20', '88'] they are numbers in quotes
 * @param {number} step 
 * @returns {Array} finalArray
 */
function print(array, step){
    let finalArray = []
    for(let i = 0; i < array.length; i+= step){
        if (i < array.length){
            finalArray.push(array[i]);
       }
   }
   return(finalArray);
}