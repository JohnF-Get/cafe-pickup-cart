/**
 * Åpner produktmodalen med informasjon om produktet.
 *
 * @param {string} name - Navnet på produktet.
 * @param {number} price - Prisen på produktet.
 * @param {string} img - URL til produktbildet.
 * @param {string} description - Beskrivelse av produktet.
 * @param {Array<string>} allergens - Liste over allergener for produktet.
 */
function openProductModal(name, price, img, description, allergens) {
  const modal = document.getElementById('productModal');
  const modalContent = document.getElementById('modalProductContent');

  modalContent.innerHTML = `
    <h3 class="modal__heading">${name}</h3>
    <img src="${img}" alt="${name}" class="modal__img">
    <p class="modal__description">${description}</p>
    ${allergens.length > 0 ? `<p class="modal__allergens"><strong>Allergener:</strong> ${allergens.join(', ')}</p>` : ''}
    <p class="modal__price">Pris: ${price} kr</p>

    <div class="modal__customization">
      <label for="productComment" class="modal__customization-label">Tilpasninger:</label>
      <textarea id="productComment" class="modal__customization-input" rows="4" placeholder="Skriv inn eventuelle tilpasninger her..."></textarea>
    </div>

    <div class="modal__action">
      <div class="modal__quantity-wrapper">
        <label for="productQuantity" class="modal__quantity-label">Antall:</label>
        <input type="number" id="productQuantity" class="modal__quantity-input" value="1" min="1">
      </div>
      <button class="modal__button modal__button--cart"
              onclick="addToCart('${name}', ${price}, parseInt(document.getElementById('productQuantity').value), sanitizeInput(document.getElementById('productComment').value));
                       updateCart(); closeProductModal();">Legg til i handlekurv</button>
    </div>
  `;

  modal.style.display = 'flex';
}

/**
 * Lukk produktmodalen.
 */
function closeProductModal() {
  document.getElementById('productModal').style.display = 'none';
}

/**
 * Åpner checkout-modalen.
 */
function openCheckoutModal() {
  document.getElementById('checkoutModal').style.display = 'flex';
}

/**
 * Lukk checkout-modalen.
 */
function closeCheckoutModal() {
  document.getElementById('checkoutModal').style.display = 'none';
}
