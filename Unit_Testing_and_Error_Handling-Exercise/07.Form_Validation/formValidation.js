/**
 * Task: You are given the task to write validation for the fields of a simple form.
HTML and JavaScript Code
You are provided a skeleton containing the necessary files for your program.
The validations should be as follows:
•	The username needs to be between 3 and 20 symbols inclusively and only letters and numbers 
    are allowed.
•	The password and confirm-password must be between 5 and 15 inclusively symbols and 
    only word characters are allowed (letters, numbers, and _).
•	The inputs of the password and confirm-password field must match.
•	The email field must contain the “@” symbol and at least one "."(dot) after it.
If the "Is company?" checkbox is checked, the CompanyInfo fieldset should become visible 
    and the Company Number field must also be validated, if it isn’t checked the Company 
    fieldset should have the style "display: none;" and the value of the Company Number 
    field shouldn’t matter. 
•	The Company Number field must be a number between 1000 and 9999.
•	Use addEventListener() function to attach an event listener for the "change" event to the checkbox.
Every field with an incorrect value when the [Submit] button is pressed should have the following 
style applied border-color: red;, alternatively, if it’s correct it should have style border: none;. 
If there are required fields with an incorrect value when the [Submit] button is pressed, 
the div with id="valid" should become hidden ("display: none;"), alternatively if all fields 
are correct the div should become visible.
Constraints
•	You are NOT allowed to change the HTML or CSS files provided.
 */
function validate() {
    document.querySelector("#submit").type = "button";

    document.querySelector("#company").addEventListener("change", () => {
        const companyInfo = document.querySelector("#companyInfo");
        companyInfo.style.display = document.querySelector("#company").checked ? "block" : "none";
    });

    document.querySelector("#submit").addEventListener("click", () => {
        let isValid = true;

        const username = document.querySelector("#username");
        const email = document.querySelector("#email");
        const password = document.querySelector("#password");
        const confirmPassword = document.querySelector("#confirm-password");
        const companyNumber = document.querySelector("#companyNumber");

        const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        const passwordPattern = /^[\w]{5,15}$/;

        if (!usernamePattern.test(username.value)) {
            username.style.borderColor = "red";
            isValid = false;
        } else {
            username.style.borderColor = "";
        }

        if (!emailPattern.test(email.value)) {
            email.style.borderColor = "red";
            isValid = false;
        } else {
            email.style.borderColor = "";
        }

        if (!passwordPattern.test(password.value) || password.value !== confirmPassword.value) {
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
            isValid = false;
        } else {
            password.style.borderColor = "";
            confirmPassword.style.borderColor = "";
        }

        if (document.querySelector("#company").checked) {
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                companyNumber.style.borderColor = "red";
                isValid = false;
            } else {
                companyNumber.style.borderColor = "";
            }
        }

        document.querySelector("#valid").style.display = isValid ? "block" : "none";
    });
}
