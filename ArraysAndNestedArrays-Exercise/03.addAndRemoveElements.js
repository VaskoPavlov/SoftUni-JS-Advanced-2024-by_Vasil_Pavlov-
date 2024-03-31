/**
 * Task: Write a JS function that adds and removes numbers to/from an array. 
 * You will receive a command which can either be "add" or "remove". 
 * The initial number is 1. 
 * Upon receiving an "add" command you should add the current number to your array. 
 * Upon receiving the "remove" command you should remove the last entered number, 
 * currently existent in the array.
 * 
 * Each input command should increase that number, regardless of what it is.
 * The input comes as an array of strings. Each element holds a command. 
 * The output is the element of the array, each printed on a new line. 
 * In case of an empty array, just print "Empty".
 */

/**
 * @param {string[]} array 
 */
function addAndRemove (array){
    let element = 0;
    let finalArray = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] === 'add'){
            element++;
            finalArray.push(element);
        } else {
            element++;
            if (finalArray.length > 0){
                finalArray.pop(finalArray[i - 1]);
            } 
        }
    }
    if (finalArray.length === 0){
        console.log('Empty');
    } else {
        for (let j = 0; j < finalArray.length; j++){
            console.log(finalArray[j]);
        }
    }
}