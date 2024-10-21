/**
 * Setter den aktive lenken i toppmenyen basert på den valgte kategorien.
 *
 * @param {string} category - Kategorien som skal settes som aktiv.
 */
function setActiveLink(category) {
  const menuLinks = document.querySelectorAll('.header__menu-link');
  menuLinks.forEach((link) => {
    link.classList.remove('header__menu-link--active');
  });

  if (category === 'baguetter' || category === 'snitter' || category === 'kaffe') {
    document.querySelector('[data-category="meny"]').classList.add('header__menu-link--active');
  } else {
    const activeLink = document.querySelector(`[data-category="${category}"]`);
    if (activeLink) {
      activeLink.classList.add('header__menu-link--active');
    }
  }
}
