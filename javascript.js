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


const productsEl = document.querySelector(".products");

// RENDER PRODUCTS
function renderProdcuts(products) {
  products.forEach((product) => {
    productsEl.innerHTML += 
    `<div class="shop-container">
      <div class="card" id="card">
        <div class ="card-image car-1"></div>
        <div class="card-1-name" id="card-1-name"></div>
        <img src="${product.image}" alt="product image" class="product-image">
        <p>${product.price}</p>
        <p>${product.name}</p>
        <div class="button-mover">
            <a href=""><button class="shop-button">Checkout</button></a>
        </div>
    </div>`
  });
}


renderProdcuts(products);



let shoppingCart = []


