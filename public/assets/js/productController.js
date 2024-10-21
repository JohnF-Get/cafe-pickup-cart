/**
 * Viser hovedkategorien ved å oppdatere produktlisten basert på valgt kategori.
 *
 * @param {string} category - Kategorien som skal vises, for eksempel "meny", "baguetter", "snitter", "kaffe", osv.
 */
function showMainCategory(category) {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  if (category === 'meny' || category === 'baguetter') {
    category = 'baguetter';
    menuTabs.style.display = 'block';
  } else {
    menuTabs.style.display = 'none';
  }

  const products = getProductsByCategory(category);

  if (products.length === 0) {
    productList.innerHTML =
      '<p>Ingen produkter tilgjengelig i denne kategorien.</p>';
    return;
  }

  products.forEach((product) => {
    const escapedDescription = product.description.replace(/'/g, "\\'");
    const escapedAllergens = JSON.stringify(product.allergens).replace(
      /"/g,
      '&quot;',
    );

    productList.innerHTML += `
      <div class="card">
        <h3 class="card__title" onclick="openProductModal('${product.name}', ${product.price}, 'assets/images/${product.img}', '${escapedDescription}', ${escapedAllergens})">${product.name}</h3>
        <img class="card__img" src="assets/images/${product.img}" alt="${product.name}" onclick="openProductModal('${product.name}', ${product.price}, 'assets/images/${product.img}', '${escapedDescription}', ${escapedAllergens})">
        <p class="card__price">Pris: ${product.price} kr</p>

        <div class="card__action">
          <div class="card__quantity">
            <label for="productQuantity-${product.name}" class="card__quantity-label">Antall:</label>
            <input type="number" id="productQuantity-${product.name}" value="1" min="1" class="card__quantity-input" aria-label="Velg mengde for ${product.name}">
          </div>
          <button class="card__btn card__btn--add-to-cart" onclick="addToCart('${product.name}', ${product.price}, parseInt(document.getElementById('productQuantity-${product.name}').value)); updateCart();">Legg til</button>
        </div>
      </div>
    `;
  });

  setActiveLink(category);
}

/**
 * Viser underkategorien ved å oppdatere produktlisten basert på valgt underkategori.
 *
 * @param {string} category - Underkategorien som skal vises, for eksempel "baguetter", "snitter", "kaffe", osv.
 */
function showCategory(category) {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';

  const products = getProductsByCategory(category);

  if (products.length === 0) {
    productList.innerHTML =
      '<p>Ingen produkter tilgjengelig i denne kategorien.</p>';
    return;
  }

  products.forEach((product) => {
    const escapedDescription = product.description.replace(/'/g, "\\'");
    const escapedAllergens = JSON.stringify(product.allergens).replace(
      /"/g,
      '&quot;',
    );

    productList.innerHTML += `
      <div class="card">
        <h3 class="card__title" onclick="openProductModal('${product.name}', ${product.price}, 'assets/images/${product.img}', '${escapedDescription}', ${escapedAllergens})">${product.name}</h3>
        <img class="card__img" src="assets/images/${product.img}" alt="${product.name}" onclick="openProductModal('${product.name}', ${product.price}, 'assets/images/${product.img}', '${escapedDescription}', ${escapedAllergens})">
        <p class="card__price">Pris: ${product.price} kr</p>

        <div class="card__action">
          <div class="card__quantity">
            <label for="productQuantity-${product.name}" class="card__quantity-label">Antall:</label>
            <input type="number" id="productQuantity-${product.name}" value="1" min="1" class="card__quantity-input" aria-label="Velg mengde for ${product.name}">
          </div>
          <button class="card__btn card__btn--add-to-cart" onclick="addToCart('${product.name}', ${product.price}, parseInt(document.getElementById('productQuantity-${product.name}').value)); updateCart();">Legg til</button>
        </div>
      </div>
    `;
  });

  setActiveLink(category);
}

/**
 * Saniterer brukerinput for å forhindre XSS-angrep ved å konvertere spesialtegn til HTML-entiteter.
 *
 * @param {string} input - Brukerinput som skal sanitiseres.
 * @returns {string} - Den sanitiserte inputen.
 */
function sanitizeInput(input) {
  const element = document.createElement('div');
  element.textContent = input;
  return element.innerHTML;
}
