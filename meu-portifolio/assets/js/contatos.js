// Efeito de digitação
document.addEventListener('DOMContentLoaded', function() {
    const thankYouMessage = document.querySelector('.thank-you-message');
    if (thankYouMessage) {
        const text = "Obrigado pela visita!";
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                thankYouMessage.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }

    // Animações quando os elementos aparecem na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.contact-card').forEach(card => {
        observer.observe(card);
    });
});