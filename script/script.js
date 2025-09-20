const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Toggle menu visibility
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  if (navLinks.classList.contains('active')) {
    menuToggle.textContent = 'X'; 
  }else {
    menuToggle.textContent = '☰';
}
});

navLinks.addEventListener('click', () => {
  navLinks.classList.remove('active');
  menuToggle.textContent = '☰';
});