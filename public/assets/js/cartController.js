/**
 * Oppdaterer handlekurven ved å øke antallet varer,
 * vise en varsling, legge til animasjonseffekter på handlekurv-lenken,
 * og re-render handlekurven.
 */
function updateCart() {
  const cartLink = document.getElementById('cartLink');
  const cartCount = document.getElementById('cart-count');

  cartCount.textContent = parseInt(cartCount.textContent) + 1;

  showCartNotification();

  cartLink.classList.add('cart-bounce', 'cart-pulse');

  setTimeout(() => {
    cartLink.classList.remove('cart-bounce', 'cart-pulse');
  }, 600);

  renderCart();
}
