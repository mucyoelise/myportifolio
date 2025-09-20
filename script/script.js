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

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show button when user scrolls down 100px
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Scroll smoothly to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});