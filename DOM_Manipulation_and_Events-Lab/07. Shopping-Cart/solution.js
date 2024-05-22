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