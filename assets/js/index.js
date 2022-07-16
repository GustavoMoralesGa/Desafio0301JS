// STEP 1

cantidad = document.querySelector('#quantity');
inputcolor = document.querySelector('#inputColor');
price = document.querySelector('#price');

// STEP 2

totalPrice = document.querySelector('#total');
totalQuantity = document.querySelector('#totalQuantity');
totalColor = document.querySelector('#totalColor')

totalPrice.innerHTML = Number(quantity.value) * Number(quantity.innerHTML);
totalQuantity.innerHTML = quantity.value; 