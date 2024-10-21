/**
 * Åpner handlekurven ved å sette bredden til 375px.
 */
function openCart() {
  document.getElementById('cart').style.width = '375px';
}

/**
 * Lukker handlekurven ved å sette bredden til 0.
 */
function closeCart() {
  document.getElementById('cart').style.width = '0';
}

/**
 * Oppdaterer handlekurvvisningen ved å:
 * - Hente handlekurvens elementer.
 * - Beregne totalpris og antall varer.
 * - Oppdatere DOM-elementene med nye verdier.
 * - Deaktivere utsjekkingsknappen hvis handlekurven er tom.
 */
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  const checkoutButton = document.getElementById('checkoutButton');
  const cart = getCartItems();

  cartItems.innerHTML = '';
  let total = 0;
  let itemCount = 0;

  cart.forEach((item) => {
    cartItems.innerHTML += `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name"><strong>${item.name}</strong></div>
          <div class="cart-item-details">${item.quantity} x ${item.price} kr</div>
        </div>
        <button class="remove-btn" onclick="removeFromCart('${item.name}'); updateCart();">Fjern</button>
      </div>
    `;
    total += item.price * item.quantity;
    itemCount += item.quantity;
  });

  cartCount.textContent = itemCount;
  cartTotal.textContent = total;
  checkoutButton.disabled = itemCount === 0;
}

/**
 * Viser en varsling som indikerer at handlekurven har blitt oppdatert.
 * Varslingen vises i 2 sekunder før den forsvinner automatisk.
 */
function showCartNotification() {
  const notification = document.getElementById('cartNotification');
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}
