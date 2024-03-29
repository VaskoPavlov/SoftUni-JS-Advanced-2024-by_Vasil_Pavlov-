/**
 * Task: The input comes as two parameters – an array of strings and a string. 
 * The second parameter is the delimiter.
 * 
 * The output is the elements of the array, printed on the console, 
 * each element separated from the others by the given delimiter.
 */

/**
 * @param {string[]} array 
 * @param {string} delimiter 
 */
function solve(array, delimiter){
    let newArray = '';
    for(let i = 0; i < array.length; i ++){
        if (i < array.length - 1){
            newArray += array[i] + delimiter;
        } else {
            newArray += array[i];
        }
        
    }
    console.log(newArray)
}