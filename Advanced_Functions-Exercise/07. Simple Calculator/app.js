/**
 * Task: Create a function calculator which returns an object that can modify the DOM. 
 * The returned object should support the following functionality: 
•	init (selector1, selector2, resultSelector) - initializes the object to work with 
    the elements corresponding to the supplied selectors. 
•	add () - adds the numerical value of the element corresponding to selector1 to the 
    numerical value of the element corresponding to selector2 and then writes the result 
    in the element corresponding to resultSelector. 
•	subtract () - subtracts the numerical value of the element corresponding to selector1 
    from the numerical value of the element corresponding to selector2 and then writes 
    the result in the element corresponding to resultSelector.

Input 
There will be no input your function must only provide an object. 
Output 
Your function should return an object that meets the specified requirements. 
Constraints 
•	All commands will always be valid, there will be no nonexistent or incorrect input. 
•	All selectors will point to single textbox elements. 
•	Use the given skeleton to solve this problem. 

Sample execution 
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
 */
/**
 * This Fn returns more than one function that is why I listed them like this:
 * @returns {Function} init
 * @returns {Function} add
 * @returns {Function} subtract
 */
function calculator() {
    let inputOneRef = document.querySelector('#num1');
    let inputTwoRef = document.querySelector('#num2');
    let resultRef = document.querySelector('#result');

    function init(selector1, selector2, resultSelector) {
        inputOneRef = document.querySelector(selector1);
        inputTwoRef = document.querySelector(selector2);
        resultRef = document.querySelector(resultSelector);
    }

    function add() {
        resultRef.value = Number(inputOneRef.value) + Number(inputTwoRef.value);
    }

    function subtract() {
        resultRef.value = Number(inputOneRef.value) - Number(inputTwoRef.value);
    }

    return {
        init: init,
        add: add,
        subtract: subtract
    };
}




