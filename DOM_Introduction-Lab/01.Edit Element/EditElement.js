/**
 * Task: Create function edit() that takes three parameters.
Input/Output
The first parameter is a reference to an HTML element, the other two parameters are string–match 
and replacer.
You have to replace all occurrences of the match inside the text content of the 
given element with a replacer.
 */

/**
 * @param {string} reference //reference to an HTML element 
 * @param {string} match 
 * @param {string} replacer 
 */
function editElement(reference, match, replacer) {
    const text = reference.textContent;
    const matcher = new RegExp(match, 'g')
    const replacedText = text.replace(matcher, replacer);
    reference.textContent = replacedText;
}