/**
 * Task: You will receive an array of strings. 
 * For each string, create a div with a paragraph with the string in it. 
 * Each paragraph is initially hidden (display:none). 
 * Add a click event listener to each div that displays the hidden paragraph. 
 * Finally, you should append all divs to the element with an id "content".
 */
/**
 * @param {string[]} words 
 */
function create(words) {
   const contentDiv = document.getElementById('content');

   for (const word of words) {
      const div = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      div.appendChild(p);
      contentDiv.appendChild(div);
      div.addEventListener('click', revealHandler); 
   }

   function revealHandler (event) {
      event.currentTarget.children[0].style.display = 'block';
   }
}