/**
 * Task: Write a JS function that dynamically validates an email input field when it is changed. 
 * If the input is invalid, apply to it the class "error". Do not validate on every keystroke, 
 * as it is annoying for the user, consider only change events.
A valid email will be in format: <name>@<domain>.<extension>
Only lowercase Latin characters are allowed for any of the parts of the email. If the input is valid, 
clear the style.
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
 */
function validate() {
    // valid email = <name>@<domain>.<extension>
    const emailInputRef = document.getElementById('email');
    emailInputRef.addEventListener('change', changeHandler);

    function changeHandler(event) {
        const email = emailInputRef.value;

        const regexp = new RegExp(/[a-z]+\@[a-z]+\.[a-z]+/g)

        if (!email.match(regexp)) {
            emailInputRef.classList.add('error');
        } else {
            emailInputRef.classList.remove('error');
        }
    }
}