const nav = document.querySelector('nav');
const toggleBtn = document.querySelector('.fa-bars'); // Add a <i class="fa fa-bars"></i> in header
toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

