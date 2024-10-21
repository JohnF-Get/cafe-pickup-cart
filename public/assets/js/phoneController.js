/**
 * Validerer telefonnummer ved å sikre at det består av nøyaktig 8 sifre.
 *
 * @param {string} phoneNumber - Telefonnummeret som skal valideres.
 * @returns {boolean} - Returnerer true hvis telefonnummeret er gyldig, ellers false.
 */
function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{8}$/;
  return phoneRegex.test(phoneNumber);
}
