/**
 * Write a function that reads the text inside an input field and 
 * appends the specified text to a list inside an HTML page.
 */
function addItem() {
    const ulRef = document.getElementById('items');
    let newItemRef = document.getElementById('newItemText');
    
    if(newItemRef.value.length === 0) {
        return;
    }
    const li = document.createElement('li');
    li.textContent = newItemRef.value;
    ulRef.appendChild(li);

    newItemRef.value = '';
}