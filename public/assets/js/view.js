// Åpne handlekurven
function openCart() {
  document.getElementById('cart').style.width = '350px';
}

// Lukk handlekurven
function closeCart() {
  document.getElementById('cart').style.width = '0';
}

// Åpne produktmodalen
function openProductModal(name, price, img) {
  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalProductContent');

  modalContent.innerHTML = `
    <h3>${name}</h3>
    <img src="${img}" alt="${name}">
    <p>Pris: NOK ${price}</p>
    <p>Antall: <input type="number" id="productQuantity" value="1" min="1"></p>
    <button onclick="addToCart('${name}', ${price}, parseInt(document.getElementById('productQuantity').value)); updateCart(); closeProductModal();">Legg til i handlekurv</button>
  `;

  modal.style.display = 'flex';
}

// Lukk produktmodalen
function closeProductModal() {
  document.getElementById('productModal').style.display = 'none';
}

// Funksjon for å åpne checkout-modalen
function openCheckoutModal() {
  document.getElementById('checkoutModal').style.display = 'flex';
}

// Sett opp event listener for "Til kassen"-knappen
document.getElementById('checkoutButton').addEventListener('click', function() {
  openCheckoutModal(); // Åpne checkout-modalen når "Til kassen"-knappen klikkes
});

// Lukk checkout-modalen
function closeCheckoutModal() {
  document.getElementById('checkoutModal').style.display = 'none';
}

// Oppdater handlekurvvisningen
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  const checkoutButton = document.getElementById('checkoutButton'); // Til kassen-knappen
  const cart = getCartItems();

  cartItems.innerHTML = '';
  let total = 0;
  let itemCount = 0;

  // Gå gjennom handlekurven og vis hver vare
  cart.forEach(item => {
    cartItems.innerHTML += `
      <div>
        <strong>${item.name}</strong> - NOK ${item.price} x ${item.quantity}
        <button onclick="removeFromCart('${item.name}'); updateCart();">Fjern</button>
      </div>
    `;
    total += item.price * item.quantity;
    itemCount += item.quantity;
  });

  cartCount.textContent = itemCount; // Oppdater antall varer i handlekurven
  cartTotal.textContent = total; // Oppdater totalprisen

  // Aktiver eller deaktiver "Til kassen"-knappen
  checkoutButton.disabled = itemCount === 0; // Knappen er deaktivert når handlekurven er tom
}


// Sett opp event listeners når siden er lastet
document.addEventListener('DOMContentLoaded', function() {
  // Vis Baguetter som standardvisning når siden lastes
  showMainCategory('baguetter'); // Kall for å vise Baguetter som standardkategori

  // Event listeners for Meny-knappene og kategoriene
  document.getElementById('cartLink').addEventListener('click', openCart);
  document.getElementById('closeCartBtn').addEventListener('click', closeCart);
  document.getElementById('closeProductModal').addEventListener('click', closeProductModal);
  document.getElementById('closeCheckoutModal').addEventListener('click', closeCheckoutModal);

  document.querySelectorAll('.header__menu a').forEach(link => {
    link.addEventListener('click', function() {
      const category = this.getAttribute('data-category');

      // Hvis kategorien er 'meny', vis Baguetter og vis tabs for Baguetter, Snitter, Kaffe
      if (category === 'meny') {
        document.getElementById('menuTabs').style.display = 'flex'; // Vis tabs
        showMainCategory('baguetter'); // Vis Baguetter som standard
      } else {
        document.getElementById('menuTabs').style.display = 'none'; // Skjul tabs for Baguetter, Snitter, Kaffe
        showMainCategory(category); // Vis den valgte kategorien
      }
    });
  });

  document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      showCategory(category); // Vis den valgte underkategorien
    });
  });

  document.getElementById('confirmOrderBtn').addEventListener('click', confirmOrder);
});
