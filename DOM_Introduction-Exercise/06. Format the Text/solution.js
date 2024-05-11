/**
 * Task: Create a functionality that gets a text from textarea, formats the given text - 
 * you need to find out how many sentences there are in the text, simply split the whole text by '.' 
Also, every sentence must have at least 1 character.
 
Generate HTML paragraphs as a string (Use interpolation string to create paragraph element: 
  `<p> {text} </p>`) and append it to the div with an id = "output".
 
When the [Format] button is clicked, get the text inside the textarea with an id="input" 
and format it. The formatting is done as follows:
•	Create a new paragraph element that holds no more than 3 sentences from the given input.
•	Hint: Use interpolation string to create paragraph element. (`<p> {text} </p>`)
•	If the given input contains less or 3 sentences, you need to create only 1 paragraph, 
fill it with these sentences and append this paragraph to the div with an id="output". 
Otherwise, when you have more than 3 sentences, create enough paragraphs to get all sentences 
from the textarea.
Just remember to restrict the sentences in each paragraph to 3.
Example:
•	If the input textarea contains 2 sentences, create only 1 paragraph with these 2 sentences
 
•	If the input textarea contains 7 sentences, create 3 paragraphs
- The first paragraph must contain the first 3 sentences
- The second paragraph must contain the other three sentences of the whole text
- The third paragraph will contain only the last sentence 

 */
function solve() {
  const paragraph = document.getElementById('input').value;
  const outputArea = document.getElementById('output');

  const sentences = paragraph.split('.').filter(sentence => sentence.trim().length > 0);
  const numSentences = sentences.length;

  outputArea.innerHTML = ''; // Clear the previous output.

  const maxSentencesPerParagraph = 3;
  let currentParagraph = '';

  for (let i = 0; i < numSentences; i++) {
    currentParagraph += sentences[i] + '. ';

    //! it means we have the MAXIMUM number of sentences,  Checks if we REACHED the LAST
    //! and it's time to create a NEW {paragraph}.           SENTENCE OF THE PARAGRAPH
    //!                                                     it's time to create a NEW {paragraph}. 
    if ((i + 1) % maxSentencesPerParagraph === 0 || i === numSentences - 1) {
      outputArea.innerHTML += `<p>${currentParagraph.trim()}</p>`;
      //! RESETING || when we are done with the {currentParagraph}
      //!          \/
      currentParagraph = '';
    }
  }
  /*In summary, this part of the code ensures that we group sentences into paragraphs 
  /*containing at most maxSentencesPerParagraph sentences. 
  /*It correctly handles situations where the input contains fewer than maxSentencesPerParagraph 
  /*sentences or when the last paragraph may contain fewer sentences than maxSentencesPerParagraph. 
  /*The result is a formatted text with sentences divided into paragraphs, 
  /*each containing up to maxSentencesPerParagraph sentences.*/
}