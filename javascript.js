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


 window.initMap = initMap;





 // Carousel
 let i = 0; 
 let images = [];
 let time = 3000;

 images [0] = "Photos/food3.jpeg"
 images [1] = "Photos/food4.jpeg"
 images [2] = "Photos/food5.jpg"

 function changeImage(){
  document.pic.src = images[i]

  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImage()", time)
 }

 window.onload=changeImage;
