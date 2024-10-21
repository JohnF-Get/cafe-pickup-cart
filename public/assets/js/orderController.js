/**
 * Bekrefter en ordre ved å validere brukerinput og oppdatere handlekurven.
 *
 * Denne funksjonen utfører følgende trinn:
 * 1. Henter brukerens valg for hentedato og hentetid, samt kundens navn, e-post og telefonnummer.
 * 2. Validerer telefonnummeret for å sikre at det består av nøyaktig 8 sifre.
 * 3. Validerer at en gyldig hentetid er valgt.
 * 4. Sjekker at alle feltene er fylt ut.
 * 5. Viser en bekreftelsesmelding til brukeren med bestillingsdetaljer.
 * 6. Lukker utsjekkingsmodulen, tømmer handlekurven og oppdaterer handlekurvvisningen.
 *
 * @function
 * @returns {void}
 */
function confirmOrder() {
  const pickupDate = document.getElementById('pickupDate').value;
  const pickupTime = document.getElementById('pickupTime').value;
  const customerName = document.getElementById('customerName').value;
  const customerEmail = document.getElementById('customerEmail').value;
  const customerPhone = document.getElementById('customerPhone').value;

  if (!validatePhoneNumber(customerPhone)) {
    alert('Telefonnummeret må være 8 sifre.');
    return;
  }

  if (!validatePickupTime(pickupDate, pickupTime)) {
    alert('Vennligst velg en gyldig tid.');
    return;
  }

  if (
    !pickupDate ||
    !pickupTime ||
    !customerName ||
    !customerEmail ||
    !customerPhone
  ) {
    alert('Vennligst fyll ut alle feltene.');
    return;
  }

  alert(
    `Bestilling bekreftet!\nNavn: ${customerName}\nDato: ${pickupDate}\nTid: ${pickupTime}`,
  );

  closeCheckoutModal();
  clearCart();
  updateCart();
}
