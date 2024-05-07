/**
 * Task: An HTML file is given and your task is to write a function that takes 
 * two string parameters as an input and transforms the first parameter 
 * to the type required by the second parameter.
•	The first parameter will be the text that you need to modify depending on the 
second parameter. The words in it will always be separated by space.
•	The second parameter will be either "Camel Case" or "Pascal Case". 
In case of different input, your output should be "Error!"
When the button is clicked the function should convert the first string to either of the cases. 
The output should consist of only one word - the string you have modified. 
Once your output is done, you should set it as HTML to the <span> element. 
For more information, see the examples below:
 */
function solve() {
  const text = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  let resultString = '';
  
  if(namingConvention === 'Camel Case') {
    let words = text.toLowerCase().split(' ');
    
    for(let i = 0; i < words.length; i++) {
      if (i > 0) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        resultString += words[i];
      } else {
        resultString += words[i];
      }
    }
    result.textContent = resultString;
  } else if(namingConvention === 'Pascal Case') {
    let words = text.toLowerCase().split(' ');
    
    for(let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        resultString += words[i];
    }
    result.textContent = resultString;
  } else {
    result.textContent = 'Error!';
  }
}