// Modell for å administrere data

const productsData = {
  baguetter: [
    { name: 'Baguette med reker', price: 75, img: 'assets/images/baguette_reker.webp' },
    { name: 'Baguette med roastbiff', price: 80, img: 'assets/images/baguette_roastbiff.webp' }
  ],
  snitter: [
    { name: 'Snitter med roastbiff', price: 45, img: 'assets/images/snitter_roastbiff.webp' },
    { name: 'Snitter med reker', price: 50, img: 'assets/images/snitter_reker.webp' }
  ],
  kaffe: [
    { name: 'Nybrygget kaffe', price: 30, img: 'assets/images/kaffe_nybrygget-kaffe.webp' },
    { name: 'Americano', price: 40, img: 'assets/images/kaffe_americano.webp' }
  ],
  kake: [
    { name: 'Sjokoladekake', price: 120, img: 'assets/images/kake_sjokoladekake.webp' },
    { name: 'Gulrotkake', price: 110, img: 'assets/images/kake_gulrotkake.webp' }
  ],
  temakaker: [
    { name: 'Bryllupskake', price: 1500, img: 'assets/images/kake_bryllupskake.webp' },
    { name: 'Fotballkake', price: 850, img: 'assets/images/kake-fotballkake.webp' }
  ]
};

// Handlekurvdata
let cart = [];

// Funksjoner for å håndtere handlekurven
function addToCart(name, price, quantity = 1) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ name, price, quantity });
  }
}

function removeFromCart(name) {
  cart = cart.filter(item => item.name !== name);
}

function clearCart() {
  cart = [];
}

function getCartItems() {
  return cart;
}

function getProductsByCategory(category) {
  return productsData[category] || [];
}

function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{8}$/;
  return phoneRegex.test(phoneNumber);
}
