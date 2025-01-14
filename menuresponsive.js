const mobileMenuContent = document.getElementById('mobile-menu');
const nav = document.querySelector('.menu nav');

mobileMenuContent.addEventListener('click', () => {
    nav.classList.toggle('active'); // Alterna entre mostrar y ocultar el menú
});
