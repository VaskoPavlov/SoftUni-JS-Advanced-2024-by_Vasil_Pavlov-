/**
 * Task: Write a function that extracts only those numbers that form a non-decreasing subset. 
 * In other words, you start from the first element and 
 * continue to the end of the given array of numbers. 
 * Any number which is LESS THAN the current biggest one is ignored, 
 * alternatively if it’s equal or higher than the current biggest one you set 
 * it as the current biggest one and you continue to the next number. 
 * 
 * The input comes as an array of numbers.
 * The output is the processed array after the filtration, which should be a non-decreasing subset. 
 * Return the array of numbers.
 */

/**
 * @param {number[]} array 
 * @returns {number[]} newArray
 */
function extract (array){
    let newArray = [array[0]];
    for(let i = 1; i < array.length; i++){
        if(array[i - 1] <= array[i]){
            newArray.push(array[i]);
        }
    }
    for (let j = 0; j < newArray.length; j++){
        if (newArray[j] > newArray[j+1] && j < newArray.length - 1){
            newArray.pop(newArray[j + 1]);
        }
    }
    return(newArray);
}