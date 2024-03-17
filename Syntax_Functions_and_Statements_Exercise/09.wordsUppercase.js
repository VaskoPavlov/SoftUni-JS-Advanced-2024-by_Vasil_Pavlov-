/**
 * Task: Write a program that extracts all words from a passed-in string and converts them to upper case. 
 * The extracted words in the upper case must be printed on a single line separated by ", ".
 * 
 * The input comes as a single string argument - the text to extract and convert words from.
 * The output should be a single line containing the converted string.
 */

/**
 * @param {string} string 
 */
function wordsUppercase (string) {
    
    let pattern = new RegExp(/\w+/g);
    const sentence = string.match(pattern);
    let uppercased = sentence.map(word => word.toUpperCase());
    console.log(uppercased.join(', '))
}