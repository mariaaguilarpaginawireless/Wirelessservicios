document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery-grid img');

    images.forEach((img, index) => {
        // Establecer la opacidad inicial
        img.style.opacity = 0;
        img.style.transition = 'opacity 0.5s ease-in-out';
        img.style.animationDelay = `${index * 0.2}s`; // Delay para el efecto secuencial

        // Usar setTimeout para poder hacer el efecto de fade-in
        setTimeout(() => {
            img.style.opacity = 1;
        }, 100 * index);
    });
});