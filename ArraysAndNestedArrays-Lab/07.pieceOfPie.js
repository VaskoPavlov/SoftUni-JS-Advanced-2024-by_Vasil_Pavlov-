/**
 * Task: Write a function that receives three parameters – an array of pie flavors as strings, 
 * two target flavors as strings. The result of the function should be a new array, 
 * containing a section of the original array, starting at the first flavor parameter, 
 * and ending at (and including) the second flavor parameter.
 * 
The input comes as three arguments:
•	An array of strings, representing pie flavors
•	Two more strings, representing the start and end of the section, respectively
The output is the return value of the function and should be an array of strings.
 */

/**
 * @param {string[]} array 
 * @param {string} firstFlavour 
 * @param {string} secondFlavour 
 * @returns {string[]} finalArray
 */
function pieceOfPie(array, firstFlavour, secondFlavour) {
    let finalArray = []
    let firstIndex = array.indexOf(firstFlavour);
    let secondIndex = array.indexOf(secondFlavour);
    
    for (let i = firstIndex; i <= secondIndex; i++){
        finalArray.push(array[i]);
    }
    return finalArray;
}