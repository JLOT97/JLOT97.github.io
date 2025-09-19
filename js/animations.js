// animations.js
document.addEventListener('DOMContentLoaded', function() {
    // Activar transición de carga
    document.body.classList.add('loaded');
    
    // Transición suave entre páginas
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        if (link.href && !link.hash && link.target !== '_blank') {
            link.addEventListener('click', function(e) {
                if (this.href.includes(window.location.origin)) {
                    e.preventDefault();
                    document.body.style.opacity = '0';
                    
                    setTimeout(() => {
                        window.location = this.href;
                    }, 300);
                }
            });
        }
    });
    
    // Animación de las barras de skills
    function animateSkills() {
        const skills = document.querySelectorAll('.skill-progress');
        skills.forEach(skill => {
            const width = skill.getAttribute('data-width');
            skill.style.width = width;
        });
    }
    
    // Observer para animar skills cuando están en viewport
    if (document.querySelector('.skills-container')) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkills();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(document.querySelector('.skills-container'));
    }
    
    // Efecto de partículas dinámicas
    function createParticles() {
        const particlesContainer = document.querySelector('.particles-background');
        if (!particlesContainer) return;
        
        // Crear múltiples partículas
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(0, 255, 255, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                animation: particles ${Math.random() * 10 + 10}s infinite linear;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 5}s;
            `;
            particlesContainer.appendChild(particle);
        }
    }
    
    createParticles();
});