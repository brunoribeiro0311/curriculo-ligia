// ============================================
        // INSTRUÇÕES PARA PERSONALIZAÇÃO DO SITE
        // ============================================
        // 
        // 1. ESTRUTURA DE ARQUIVOS:
        //    - Mantenha este arquivo como index.html
        //    - Crie uma pasta 'img' no mesmo diretório
        //    - Adicione as imagens com os nomes corretos:
        //      * img/profile.jpg (foto de perfil)
        //      * img/about.jpg (imagem da seção sobre mim)
        //
        // 2. EDITAR INFORMAÇÕES PESSOAIS:
        //    - Nome e profissão: Procure por comentários no HTML
        //    - Sobre mim: Procure por "EDITAR TEXTO SOBRE MIM" no HTML
        //    - Formação: Procure por "EDITAR FORMAÇÃO" no HTML
        //    - Experiência: Procure por "EDITAR EXPERIÊNCIA" no HTML
        //    - Habilidades: Procure por "EDITAR HABILIDADES" no HTML
        //    - Idiomas: Procure por "EDITAR IDIOMAS" no HTML
        //    - Contatos: Procure por "EDITAR CONTATOS" no HTML
        //
        // 3. MODIFICAR CORES E ESTILOS:
        //    - As cores principais estão definidas nas variáveis CSS no topo do arquivo
        //    - Procure por ":root" no CSS para alterar as cores
        //
        // 4. ADICIONAR MAIS SEÇÕES:
        //    - Copie uma seção existente e modifique o conteúdo
        //    - Mantenha as classes CSS para preservar o estilo
        //
        // ============================================

        // Smooth scrolling and fade in animations
        document.addEventListener('DOMContentLoaded', function() {
            // Fade in animation on scroll
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

            // Observe all fade-in elements
            document.querySelectorAll('.fade-in').forEach(el => {
                observer.observe(el);
            });
        });

        // Image error handling - show placeholders if images don't load
        document.addEventListener('DOMContentLoaded', function() {
            const profileImg = document.querySelector('.profile-img');
            const aboutImg = document.querySelector('.about-img');
            
            // Handle profile image load error
            if (profileImg) {
                profileImg.addEventListener('error', function() {
                    console.log('Imagem de perfil não encontrada: img/profile.jpg');
                });
            }
            
            // Handle about image load error  
            if (aboutImg) {
                aboutImg.addEventListener('error', function() {
                    console.log('Imagem sobre mim não encontrada: img/about.jpg');
                });
            }
        });

        // Add hover effects to cards
        document.querySelectorAll('.custom-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // Add smooth hover effects to skill items
        document.querySelectorAll('.skill-item').forEach(skill => {
            skill.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px) scale(1.05)';
            });
            
            skill.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Add parallax effect to header (subtle)
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('.header-section');
            if (header) {
                header.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        });

        // Add typing animation to name (optional enhancement)
        function addTypingEffect() {
            const nameElement = document.querySelector('.name-title h1');
            const originalText = nameElement.textContent;
            nameElement.textContent = '';
            
            let i = 0;
            const typingSpeed = 100;
            
            function typeChar() {
                if (i < originalText.length) {
                    nameElement.textContent += originalText.charAt(i);
                    i++;
                    setTimeout(typeChar, typingSpeed);
                }
            }
            
            // Start typing effect after a small delay
            setTimeout(typeChar, 500);
        }

        // Initialize typing effect (uncomment to enable)
        // addTypingEffect();

        // Add accessibility improvements for images
        document.querySelectorAll('.profile-img, .about-img').forEach(img => {
            // Remove interactive attributes since images are now static
            img.removeAttribute('tabindex');
            img.removeAttribute('role');
        });

        // Print friendly styles (optional)
        window.addEventListener('beforeprint', function() {
            document.body.style.background = 'white';
            document.querySelectorAll('.custom-card').forEach(card => {
                card.style.boxShadow = 'none';
                card.style.border = '1px solid #ccc';
            });
        });

        // Console message for developers
        console.log(`
        🌿 Currículo da LIGIA RIBEIRO - Bióloga
        
        📝 Para personalizar este site:
        1. Modifique o HTML onde há comentários de edição
        2. Crie uma pasta 'img' no mesmo diretório do HTML
        3. Adicione as imagens 'profile.jpg' e 'about.jpg' na pasta 'img'
        4. Altere as cores nas variáveis CSS (:root)
        
        📁 Estrutura de arquivos necessária:
        ├── index.html
        └── img/
            ├── profile.jpg    (foto de perfil)
            └── about.jpg      (imagem da seção sobre mim)
        
        ✨ Desenvolvido com HTML5, CSS3, Bootstrap 5 e JavaScript
        🎨 Design responsivo e acessível
        `);
		
		