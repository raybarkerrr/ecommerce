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

let items = [
  {
    id: 1,
    image: "Photos/redshirt.jpeg",
    name: "Black Tee", 
    price: 29.99,

  },
  {},
]