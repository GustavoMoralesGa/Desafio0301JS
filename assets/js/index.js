// STEP 1

quantity = document.querySelector('#quantity');
inputcolor = document.querySelector('#inputColor');
price = document.querySelector('#price');

// STEP 2

totalPrice = document.querySelector('#total');
totalQuantity = document.querySelector('#totalQuantity');
changeColor = document.querySelector('#ballColor')

totalPrice.innerHTML = Number(quantity.value) * Number(quantity.innerHTML);
totalQuantity.innerHTML = quantity.value; 

//STEP 3

changeColor.style.backgroundColor = inputColor.value;
