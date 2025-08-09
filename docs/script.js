const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const toggle = document.getElementById('darkModeToggle');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for your message! ⭐️');
});

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Keep user theme preference
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    toggle.checked = true;
  }
});
