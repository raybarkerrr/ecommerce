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


let products = [

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
    image: "Photos/blueshirt2.webp",
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


for (let i = 0; i < products.length; i++) {

  let foodDiv = document.getElementById('food-card');
  let heading = document.createElement('h1');
  heading.innerHTML = products[i].name;
  foodDiv.appendChild(heading); 


}


let shoppingCart = []

