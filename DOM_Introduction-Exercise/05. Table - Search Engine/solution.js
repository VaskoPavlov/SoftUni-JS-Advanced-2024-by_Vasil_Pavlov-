/**
 * Task: Write a function that searches in a table by given input.
When the "Search" button is clicked, go through all cells in the table except for the first row 
(Student name, Student email, and Student course) and check if the given input has a match 
(check for both full words and single letters).
If any of the rows contain the submitted string, add a class select to that row. 
Note that more than one row may contain the given string. 
Оtherwise, if there is no match, nothing should happen.

Note: After every search ("Search" button is clicked), 
clear the input field and remove all already selected classes (if any) from the previous search, 
for the new search to contain only the new result.
 */
function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   const searchTextRef = document.getElementById('searchField');
   const trsRef = document.querySelectorAll('.container tbody tr');

   function onClick() {
      Array.from(trsRef).forEach((row) => {
         if (row.textContent.toLowerCase().includes(searchTextRef.value.toLowerCase().trim())) {
            row.classList.add('select');
         } else {
            row.classList.remove('select');
         }
      });
      searchTextRef.value = '';
   }
}