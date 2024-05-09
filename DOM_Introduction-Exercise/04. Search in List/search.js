/**
 * Task: An HTML page holds a list of towns, a search box, and a [Search] button. 
 * Implement the search function to bold and underline the items from the list 
 * which include the text from the search box. Also, print the number of items the current search 
 * matches in the format `${matches} matches found`.
Note: It is necessary to clear the results of the previous search.
 */
function search() {
   const townsRef = document.querySelectorAll('#towns li');
   const searchRef = document.getElementById('searchText');
   const resultRef = document.getElementById('result');
   let matches = 0;

   for(let town of townsRef) {
      let townName = town.textContent;
      if(townName.includes(searchRef.value)){
         town.style.textDecoration = 'underline';  
         town.style.fontWeight = 'bold';
         matches++;
      } else {
         town.style.textDecoration = 'none';  
         town.style.fontWeight = 'normal';
      }
   }
   resultRef.textContent = `${matches} matches found`;
   searchRef.value = '';
}