document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn__filter');
    const cards = document.querySelectorAll('.card__trust');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = button.getAttribute('data-filter');

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-type') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('.menu nav');

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
