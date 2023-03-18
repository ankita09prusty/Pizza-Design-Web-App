// Selecting the elements
const baseImgs = document.querySelectorAll('.base-img');
const toppingImgs = document.querySelectorAll('.topping-img');
const emptyCircle = document.querySelector('.empty-circle');

let pizzaBase = null;
let toppings = [];

// Adding event listeners to the pizza base images
baseImgs.forEach((img) => {
  img.addEventListener('dragstart', (e) => {
    pizzaBase = e.target;
  });
});

// Adding event listeners to the empty circle
emptyCircle.addEventListener('dragover', (e) => {
  e.preventDefault();
});

emptyCircle.addEventListener('drop', (e) => {
  e.preventDefault();
  emptyCircle.appendChild(pizzaBase.cloneNode());
});

// Adding event listeners to the topping images
toppingImgs.forEach((img) => {
  img.addEventListener('dragstart', (e) => {
    toppings.push(e.target.cloneNode());
  });
});

// Updating the pizza image with the selected toppings
setInterval(() => {
  emptyCircle.innerHTML = '';
  emptyCircle.appendChild(pizzaBase.cloneNode());
  toppings.forEach((topping) => {
    emptyCircle.appendChild(topping.cloneNode());
  });
});

// Creating a new img element for the selected pizza base
const pizzaBaseImg = document.createElement('img');
pizzaBaseImg.alt = 'Base 1';

// Appending the img element to the empty circle container
emptyCircle.appendChild(pizzaBaseImg);
