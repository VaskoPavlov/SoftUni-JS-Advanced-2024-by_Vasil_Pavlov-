/**
 * Task: You will be given some furniture as an array of objects. Each object will have a name, 
 * a price, and a decoration factor. 
When the ["Generate"] button is clicked, add a new row to the table for each piece of furniture 
with image, name, price, and decoration factor (code example below). 
When the ["Buy"] button is clicked, get all checkboxes that are marked and show in the result textbox 
the names of the piece of furniture that were checked, separated by a comma and single space (", ") 
in the following format: "Bought furniture: {furniture1}, {furniture2}…".
On the next line, print the total price in the format: "Total price: {totalPrice}" 
(formatted to the second decimal point). 
Finally, print the average decoration factor in the format: "Average decoration factor: {decFactor}"

Input Example
[{"name": "Sofa", 
"img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", 
"price": 150, 
"decFactor": 1.2}]
 */
function solve() {
  const [inputTextareaRef,resultTextareaRef] = document.querySelectorAll('textarea');
  const [generateBtn, buyBtn] = document.querySelectorAll('button');
  const tbodyRef = document.querySelector('.table tbody');


  generateBtn.addEventListener('click', infoHandler);
  buyBtn.addEventListener('click', buyHandler);

  function infoHandler(event) {
    const data = JSON.parse(inputTextareaRef.value);
    
    for (const item of data) {
      createRowAndAppend(item);
    }
  }



  function createRowAndAppend(item) {
    const tr = document.createElement('tr');

    // img
    const imgTd = document.createElement('td');
    const img = document.createElement('img');
    img.src = item.img;
    imgTd.appendChild(img);
    //-------
    //name
    const nameTd = document.createElement('td');
    const p = document.createElement('p');
    p.textContent = item.name;
    nameTd.appendChild(p);
    //-------
    //price
    const priceTd = document.createElement('td');
    const p2 = document.createElement('p');
    p2.textContent = item.price;
    priceTd.appendChild(p2);
    //-------
    //decFactor
    const decFactorTd = document.createElement('td');
    const p3 = document.createElement('p');
    p3.textContent = item.decFactor;
    decFactorTd.appendChild(p3);
    //-------
    //checkbox
    const checkboxTd = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkboxTd.appendChild(checkbox);
    //-------


    //append all tds to tr
    tr.appendChild(imgTd);
    tr.appendChild(nameTd);
    tr.appendChild(priceTd);
    tr.appendChild(decFactorTd);
    tr.appendChild(checkboxTd);

    //append tr to tbody;
    tbodyRef.appendChild(tr);
  }

  function buyHandler(event) {
    let name = [];
    let price = 0;
    let sumDecFactor = 0;
    let selectedRows = document.querySelectorAll("input[type='checkbox']:checked");

    for (const checkbox of selectedRows) {
      let [imgRef, nameRef, priceRef, decFactorRef ] = Array.from(checkbox.parentElement.parentElement.children);
      
      let nameValue = nameRef.children[0].textContent;
      name.push(nameValue);

      let priceValue = Number(priceRef.children[0].textContent);
      price += priceValue;

      let decFactorValue = Number(decFactorRef.children[0].textContent);
      sumDecFactor += decFactorValue;
    }

    // ----------- V2 ------------
    // let res = 'Bought furniture: '
    // res += name.join(', ') + `\n`;
    // res += `Total price: ${price.toFixed(2)}` + `\n`;
    // res += `Average decoration factor: ${sumDecFactor / name.length}`;
    // resultTextareaRef.value = res;
    //----------------------------

    resultTextareaRef.value += `Bought furniture: ${name.join(', ')}` + `\n`;
    resultTextareaRef.value += `Total price: ${price.toFixed(2)}` + `\n`;
    resultTextareaRef.value += `Average decoration factor: ${sumDecFactor / name.length}`;
  }
}