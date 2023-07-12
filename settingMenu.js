const settings = document.querySelector('.settingsBtn');
const closeMenu = document.querySelector('.close');
const menu = document.querySelector('.settingsMenu');

closeMenu.addEventListener('click', function () {
  menu.style.display = 'none';
});

settings.addEventListener('click', function () {
  menu.style.display = 'flex';
});
