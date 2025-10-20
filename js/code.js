        document.addEventListener('DOMContentLoaded', function() {
            // --- Efeito de scroll na barra de navegação ---
            const navbar = document.getElementById('mainNav');
            if (navbar) {
                window.addEventListener('scroll', function() {
                    if (window.scrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                });
            }

            // --- Animação de fade in ao rolar ---
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });

            // --- Efeitos de hover ---
            document.querySelectorAll('.custom-card').forEach(card => {
                card.addEventListener('mouseenter', function() { this.style.transform = 'translateY(-5px)'; });
                card.addEventListener('mouseleave', function() { this.style.transform = 'translateY(0)'; });
            });

            document.querySelectorAll('.skill-item').forEach(skill => {
                skill.addEventListener('mouseenter', function() { this.style.transform = 'translateY(-2px) scale(1.05)'; });
                skill.addEventListener('mouseleave', function() { this.style.transform = 'translateY(0) scale(1)'; });
            });
            
             // --- Fechar menu responsivo ao clicar em um link ---
            const navLinks = document.querySelectorAll('.nav-link');
            const menuToggle = document.getElementById('navbarNav');
            const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});
            navLinks.forEach((l) => {
                l.addEventListener('click', () => { 
                    if (menuToggle.classList.contains('show')) {
                        bsCollapse.toggle() 
                    }
                })
            });
        });

        // Mensagem no console para desenvolvedores
        console.log(`
        🌿 Currículo da LIGIA RIBEIRO - Bióloga
        ✨ Desenvolvido com HTML5, CSS3, Bootstrap 5 e JavaScript
        `);
