// Funksjon for å bekrefte ordre
function confirmOrder() {
  const pickupDate = document.getElementById('pickupDate').value;
  const pickupTime = document.getElementById('pickupTime').value;
  const customerName = document.getElementById('customerName').value;
  const customerEmail = document.getElementById('customerEmail').value;
  const customerPhone = document.getElementById('customerPhone').value;

  // Valider telefonnummeret (nøyaktig 8 sifre)
  if (!validatePhoneNumber(customerPhone)) {
    alert('Telefonnummeret må være 8 sifre.');
    return;
  }

  // Valider at hentetid er valgt
  if (!validatePickupTime(pickupDate, pickupTime)) {
    alert('Vennligst velg en gyldig tid.');
    return;
  }

  // Valider at alle feltene er fylt ut
  if (!pickupDate || !pickupTime || !customerName || !customerEmail || !customerPhone) {
    alert('Vennligst fyll ut alle feltene.');
    return;
  }

  // Bestilling bekreftet, vis melding til brukeren
  alert(`Bestilling bekreftet!\nNavn: ${customerName}\nDato: ${pickupDate}\nTid: ${pickupTime}`);

  // Tøm handlekurven etter bekreftet bestilling
  closeCheckoutModal();
  clearCart(); // Funksjon fra model.js for å tømme handlekurven
  updateCart(); // Oppdater handlekurvvisningen etter tømming
}
