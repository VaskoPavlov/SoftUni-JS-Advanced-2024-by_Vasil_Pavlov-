/**
 * Task: Write a program that takes an email from an input field and deletes the matching row from a table. 
•	If entry is found, the textContent in the element with id="result" must be set to "Deleted."
•	Otherwise, an error should be displayed in a <div> with id="result". The error should be "Not found." 
Submit only the deleteByEmail() function in Judge. 
Input/Output
There will be no input/output, your program should instead modify the DOM of the given HTML document.
 */
function deleteByEmail() {
    const trsRef = document.querySelectorAll('#customers tbody tr');
    const searchInput = document.querySelector("input[name='email']");
    const resultRef = document.getElementById('result');

    for (const tr of trsRef) {
        let email = tr.children[1];
        if(searchInput.value === email.textContent){
            email.parentElement.remove();
            resultRef.textContent = 'Deleted.'
        } else {
            resultRef.textContent = 'Not found.'
        }
    }
    searchInput.value = '';
}