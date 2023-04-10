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

let i = 0
let time = 1000;
let images = ["Photos/redshirt.jpeg", "Photos/blueshirt.jpeg", "Photos/greyshirt.jpeg"];
let imageContainer = document.getElementById("image-carousel");

for (let i = 0; i < images.length; i++) {

  setTimeout(() => {
    console.log(images[i]);
  }, time * i);
  function changeImage(){
    document.pic.src = images[i]
   }
}
 window.onload=changeImage;

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

  document.getElementById("card1").innerHTML = items[0].name;
  

