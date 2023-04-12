// Hamburger Menu
let mobileMenu = document.querySelector('.mobileMenu'); 
let menuToggle = document.querySelector('.menuToggle');

menuToggle.onclick = function() {
   mobileMenu.classList.toggle('open');
}




// Cart Menu
let cartMenu = document.querySelector('.cartMenu'); 
let cartToggle = document.querySelector('.cartToggle');

cartToggle.onclick = function() {
   cartMenu.classList.toggle('open');
}



 /* Item Objects */

let shoppingCart = []

let items = [

  {
    id: 0,
    image: "Photos/blueshirt.jpeg",
    name: "Light Blue Tee", 
    price: 29.99,
  },
  {
    id: 1,
    image: "Photos/redshirt.jpeg",
    name: "Red Tee", 
    price: 29.99,
  },
  {
    id: 2,
    image: "Photos/blueshirt2.jpeg",
    name: "Blue Tee", 
    price: 24.99,
  },
  {
    id: 3,
    image: "Photos/greyshirt.jpeg",
    name: "Grey Tee", 
    price: 19.99,
  },

]

const itemName = document.createElement("p");
itemName.innerText = "This is a paragraph ";
document.body.appendChild(itemName);