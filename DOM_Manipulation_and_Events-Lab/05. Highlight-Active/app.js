/**
 * Task: Write a function that highlights the currently active section of a document. 
 * There will be multiple divs with input fields inside them. 
 * Set the class of the div that contains the currently focused input field to "focused". 
 * When the focus is lost (blurred), remove the class from the element.
Submit only the focused() function in Judge.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
 */
function focused() {
    const inputsInDivRef = document.querySelectorAll('div div input');
    for (const input of inputsInDivRef) {
        input.addEventListener('focus', focusHandler);
        input.addEventListener('blur', blurHandler)
    }

    function focusHandler(event) {
        let div = event.currentTarget.parentElement;
        div.classList.add('focused');
    }
    function blurHandler(event) {
        let div = event.currentTarget.parentElement;
        div.classList.remove('focused');
    }
}