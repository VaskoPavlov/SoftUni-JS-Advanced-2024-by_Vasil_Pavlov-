/**
 * Task: Write a program that performs different operations on an array of elements. 
 * Implement the following operations:
•	Sum(ai) - calculates the sum of all elements from the input array
•	Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
•	Concat(ai) - concatenates the string representations of all elements from the array

 * The input comes as an array of number elements.
 * The output should be printed on the console on a new line for each of the operations.
 */

/**
 * @param {[number]} numbers 
 */
function aggregateElements(numbers){
    let sum = 0;
    let concat = '';
    let reverseSum = 0;

    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
        concat += String(numbers[i]);
        reversed = 1/numbers[i];
        reverseSum += reversed;
    }
    console.log(sum);
    console.log(reverseSum);
    console.log(concat);
}

aggregateElements();