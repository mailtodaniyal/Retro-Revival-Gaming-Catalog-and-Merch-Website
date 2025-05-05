        document.addEventListener('DOMContentLoaded', function() {
            const gameCards = document.querySelectorAll('.game-card');
            
            gameCards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const x = e.clientX - card.getBoundingClientRect().left;
                    const y = e.clientY - card.getBoundingClientRect().top;
                    
                    const centerX = card.offsetWidth / 2;
                    const centerY = card.offsetHeight / 2;
                    
                    const angleX = (y - centerY) / 10;
                    const angleY = (centerX - x) / 10;
                    
                    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(-10px)';
                });
            });
            
            const ctaButton = document.querySelector('.cta-button');
            ctaButton.addEventListener('click', () => {
                ctaButton.classList.add('pulse');
                setTimeout(() => {
                    window.location.href = '#';
                }, 500);
            });
            
            const logo = document.querySelector('.logo');
            let glitchInterval;
            
            logo.addEventListener('mouseenter', () => {
                glitchInterval = setInterval(() => {
                    logo.classList.toggle('glitch-effect');
                }, 100);
            });
            
            logo.addEventListener('mouseleave', () => {
                clearInterval(glitchInterval);
                logo.classList.remove('glitch-effect');
            });
            
            document.querySelector('.search-icon').addEventListener('click', () => {
                alert('Search functionality coming soon!');
            });
            
            const hero = document.querySelector('.hero');
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
                hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
            });
        });
