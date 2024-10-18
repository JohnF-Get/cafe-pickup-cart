// Funksjon for å generere tidspunkter for henting basert på valgt dato
function generateTimeOptions(pickupDate) {
  const timeSelect = document.getElementById('pickupTime');
  timeSelect.innerHTML = '';

  if (!pickupDate) {
    return;
  }

  const date = new Date(pickupDate);
  const day = date.getDay();

  let openingTime, closingTime;
  if (day === 0) {
    timeSelect.innerHTML = `<option disabled>Ingen tilgjengelige tider på søndag</option>`;
    return;
  } else if (day >= 1 && day <= 5) {
    openingTime = 8 * 60 + 30;
    closingTime = 15 * 60 + 30;
  } else if (day === 6) {
    openingTime = 9 * 60 + 30;
    closingTime = 14 * 60 + 30;
  }

  for (let time = openingTime; time <= closingTime; time += 30) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    const option = document.createElement('option');
    option.value = formattedTime;
    option.textContent = formattedTime;
    timeSelect.appendChild(option);
  }
}

// Funksjon for å validere hentetid
function validatePickupTime(pickupDate, pickupTime) {
  return pickupTime !== '';
}

document.getElementById('pickupDate').addEventListener('change', function() {
  const pickupDate = document.getElementById('pickupDate').value;
  generateTimeOptions(pickupDate);
});
