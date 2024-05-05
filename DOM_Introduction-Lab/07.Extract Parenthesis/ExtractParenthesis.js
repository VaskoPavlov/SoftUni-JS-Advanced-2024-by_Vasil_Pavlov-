/**
 * Task: Write a JS function that when executed, extracts all parenthesized text from a 
 * target paragraph by given element ID. The result is a string, joined by "; " (semicolon, space).
Input
Your function will receive a string parameter, representing the target element ID, 
from which text must be extracted. The text should be extracted from the DOM.
Output
Return a string with all matched text, separated by "; " (semicolon, space).
 */
/**
 * @param {string} content 
 * @returns {string} result[] when joined turns into string
 */
function extract(content) {
    const text = document.getElementById('content').textContent
    //* ---> \( <---: 
    //! Matches '('.

    //* ---> ([^)]+) <---: 
//! This is a capturing group that matches 
//! any character BUT NOT  ---> ')' <---, 
//! one or more times (the + quantifier).
//! It captures the text inside the parentheses.

    //* ---> \) <--- : 
    //! Matches ')'.
    
    let pattern = new RegExp(/\(([^)]+)\)/g);
    let result = [];

    let match = pattern.exec(text);

    while(match) {
        result.push(match[1]);
        match = pattern.exec(text);
    }
    return result.join('; ');
}