document.addEventListener('DOMContentLoaded', function () {
  showMainCategory('baguetter');

  document
    .getElementById('headerLogo')
    .addEventListener('click', function (event) {
      event.preventDefault();
      showMainCategory('baguetter');
    });
  document.getElementById('cartLink').addEventListener('click', openCart);
  document.getElementById('closeCartBtn').addEventListener('click', closeCart);
  document
    .getElementById('closeProductModal')
    .addEventListener('click', closeProductModal);
  document
    .getElementById('closeCheckoutModal')
    .addEventListener('click', closeCheckoutModal);

  document
    .getElementById('checkoutButton')
    .addEventListener('click', openCheckoutModal);

  document.querySelectorAll('.header__menu a').forEach((link) => {
    link.addEventListener('click', function () {
      const category = this.getAttribute('data-category');

      if (category === 'meny') {
        document.getElementById('menuTabs').style.display = 'flex';
        showMainCategory('baguetter');
      } else {
        document.getElementById('menuTabs').style.display = 'none';
        showMainCategory(category);
      }
    });
  });

  document.querySelectorAll('.tab-btn').forEach((button) => {
    button.addEventListener('click', function () {
      const category = this.getAttribute('data-category');
      showCategory(category);
    });
  });

  document
    .getElementById('confirmOrderBtn')
    .addEventListener('click', confirmOrder);
});

/**
 * Håndterer aktiv fane-oppdatering når en fane klikkes.
 * @param {Event} event - Klikkhendelsen for faneknappen.
 */
document.querySelectorAll('.tabs__button').forEach((button) => {
  button.addEventListener('click', function () {
    document
      .querySelector('.tabs__button--active')
      .classList.remove('tabs__button--active');
    this.classList.add('tabs__button--active');

    const category = this.getAttribute('data-category');
    showCategory(category);
  });
});
