/**
 * Håndterer toggling av synlighet for navigasjonsmenyen og aktiv tilstand på menyknappen.
 * Dette gir brukeren muligheten til å vise eller skjule den mobile navigasjonsmenyen.
 */

const menuToggle = document.querySelector('.header__menu-toggle');
const navMenu = document.querySelector('.header__nav');

/**
 * Klikkhendelse som aktiverer eller deaktiverer klassene for menyknappen
 * og navigasjonsmenyen.
 *
 * @event click - Utløses når menyknappen blir klikket.
 */
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('header__menu-toggle--active');
  navMenu.classList.toggle('header__nav--active');
});
