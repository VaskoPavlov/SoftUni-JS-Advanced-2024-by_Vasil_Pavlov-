/**
 * Task: You will be given some products that you should be able to add to your cart. 
 * Each product will have a name, picture, and price.
When the "Add" button is clicked, append the current product to the textarea in the following format: 
"Added {name} for {money} to the cart.\n". The price must be fixed to the second digit.
When the button "Checkout" is clicked, calculate the total money that you need to pay for the products 
that are currently in your cart. Append the result to the textarea in the following format: 
"You bought {list} for {totalPrice}."
The list should contain only the unique products, separated by ", ". 
The total price should be rounded to the second decimal point.
Also, after clicking over "Checkout" and every from above is done you should disable all buttons. 
(You can't add products or checkout again if once the checkout button is clicked).
 */
function solve() {
   const textareaRef = document.querySelector('textarea');
   const addBtnsRef = document.querySelectorAll('.add-product');
   const checkoutBtnRef = document.querySelector('.checkout');

   let list = [];
   let totalPrice = 0;
   let result = '';

   let isCheckoutClicked = false;

   for (const btn of addBtnsRef) {
      btn.addEventListener('click', buyProductHandler);
      if(isCheckoutClicked) {
         btn.removeEventListener('click', buyProductHandler);
         checkoutBtnRef.removeEventListener('click', checkoutHandler);
      } 
   }

   if(isCheckoutClicked) {
      for (const btn of addBtnsRef) {
         btn.removeEventListener('click', buyProductHandler);
      }
   }

   function buyProductHandler(event) {
      let product = event.currentTarget.parentElement.parentElement;
      let title = product.children[1].children[0].textContent;
      if (!list.includes(title)){
         list.push(title);
      } 
      let money = Number(product.children[3].textContent);
      totalPrice += money;
      result = `Added ${title} for ${money.toFixed(2)} to the cart.\n`
      textareaRef.value += result;
   }

   checkoutBtnRef.addEventListener('click', checkoutHandler);

// When Checkout btn is clicked disable all btns
   function checkoutHandler(event) {
      isCheckoutClicked = true;
      list = list.join(', ')
      textareaRef.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`
   }
}