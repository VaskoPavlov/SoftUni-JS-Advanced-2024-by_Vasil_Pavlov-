/**
 * Task: Extend the previous problem to display a [Delete] link after each list item. 
 * Clicking it should delete the item with no confirmation. You have to add href="#" to the link element.
 */
function addItem() {
    const ulRef = document.getElementById('items');
    let newItemRef = document.getElementById('newItemText');
    
    if(newItemRef.value.length === 0) {
        return;
    }
    //Delete functionality
    const a = document.createElement('a');
    a.textContent = '[Delete]';
    a.href = '#';
    a.addEventListener('click', deleteHandler)

    function deleteHandler () {
        a.parentElement.remove();
    }
    //-------------------
    const li = document.createElement('li');
    li.textContent = newItemRef.value;
    //Appending delete btn to the created (li)
    li.appendChild(a);
    //-------------------
    ulRef.appendChild(li);


    newItemRef.value = '';
}