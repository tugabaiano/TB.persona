// scripts.js - Muito mais enxuto
document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile (se for implementar)
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Efeito de rolagem no header
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('bg-darker', 'shadow-lg');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.add('bg-transparent');
            header.classList.remove('bg-darker', 'shadow-lg');
        }
    });
});