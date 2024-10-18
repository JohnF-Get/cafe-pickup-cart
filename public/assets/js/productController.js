// Funksjon for å vise hovedkategori som "Meny", "Kaker", etc.
function showMainCategory(category) {
  const productList = document.getElementById('productList');
  productList.innerHTML = ''; // Tøm produktvisningen

  // Hvis kategorien er 'meny', vis Baguetter som standard
  if (category === 'meny') {
    category = 'baguetter'; // Standard til Baguetter når Meny vises
  }

  // Hent produkter fra model.js
  const products = getProductsByCategory(category);

  if (products.length === 0) {
    productList.innerHTML = '<p>Ingen produkter tilgjengelig i denne kategorien.</p>';
    return;
  }

  // Gå gjennom produktene og vis hvert enkelt produkt
  products.forEach(product => {
    productList.innerHTML += `
      <div class="card">
        <h3>${product.name}</h3>
        <img src="${product.img}" alt="${product.name}">
        <p>Pris: NOK ${product.price}</p>
        <button onclick="openProductModal('${product.name}', '${product.price}', '${product.img}')">Detaljer</button>
        <button onclick="addToCart('${product.name}', ${product.price}); updateCart();">Legg til i handlekurv</button>
      </div>
    `;
  });
}

// Funksjon for å vise underkategori som Baguetter, Snitter, Kaffe
function showCategory(category) {
  const productList = document.getElementById('productList');
  productList.innerHTML = ''; // Tøm produktvisningen

  // Hent produkter fra model.js
  const products = getProductsByCategory(category);

  if (products.length === 0) {
    productList.innerHTML = '<p>Ingen produkter tilgjengelig i denne kategorien.</p>';
    return;
  }

  // Gå gjennom produktene og vis hvert enkelt produkt
  products.forEach(product => {
    productList.innerHTML += `
      <div class="card">
        <h3>${product.name}</h3>
        <img src="${product.img}" alt="${product.name}">
        <p>Pris: NOK ${product.price}</p>
        <button onclick="openProductModal('${product.name}', '${product.price}', '${product.img}')">Detaljer</button>
        <button onclick="addToCart('${product.name}', ${product.price}); updateCart();">Legg til i handlekurv</button>
      </div>
    `;
  });
}
