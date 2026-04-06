// script.js - Menu com efeito hover tecnológico

document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os links do menu
    const menuLinks = document.querySelectorAll('.menu-link');
    
    // Para cada link, adiciona a estrutura HTML necessária para os efeitos
    menuLinks.forEach(link => {
        const originalText = link.textContent.trim();
        const textContent = originalText;
        
        // Salva o texto original como atributo data
        link.setAttribute('data-text', textContent);
        
        // Limpa o conteúdo atual
        link.innerHTML = '';
        
        // Adiciona a estrutura para o efeito de preenchimento
        link.innerHTML = `
            <span class="fill-text">${textContent}</span>
            <span class="moving-bar">|</span>
            ${textContent}
        `;
    });
    
    // Efeito adicional: rastrear o mouse para glow dinâmico
    const sidebar = document.querySelector('.sidebar');
    const glowEffect = document.querySelector('.glow-effect');
    
    if (glowEffect) {
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            
            // Calcula a posição relativa do mouse (0 a 1)
            const xPercent = mouseX / windowWidth;
            const yPercent = mouseY / windowHeight;
            
            // Move o efeito de glow suavemente
            glowEffect.style.background = `radial-gradient(circle at ${xPercent * 100}% ${yPercent * 100}%, rgba(0, 229, 255, 0.08) 0%, transparent 60%)`;
        });
    }
    
    // Efeito de som ao passar o mouse nos itens
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Adiciona classe para efeito adicional
            item.style.transition = 'all 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            // Remove qualquer estilo residual
            item.style.transform = '';
        });
    });
    
    // Previne o comportamento padrão dos links (para demonstração)
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const text = link.getAttribute('data-text') || link.textContent.trim();
            console.log(`🔗 Navegando para: ${text}`);
            
            // Feedback visual opcional
            showTemporaryFeedback(text);
        });
    });
    
    // Função para mostrar feedback temporário
    function showTemporaryFeedback(text) {
        const feedback = document.createElement('div');
        feedback.textContent = `📍 ${text}`;
        feedback.style.position = 'fixed';
        feedback.style.bottom = '30px';
        feedback.style.right = '30px';
        feedback.style.color = '#00e5ff';
        feedback.style.fontFamily = 'Courier New, monospace';
        feedback.style.fontSize = '0.9rem';
        feedback.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        feedback.style.padding = '8px 16px';
        feedback.style.borderRadius = '20px';
        feedback.style.borderLeft = `3px solid #00e5ff`;
        feedback.style.zIndex = '9999';
        feedback.style.opacity = '0';
        feedback.style.transition = 'opacity 0.3s ease';
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.opacity = '1';
        }, 10);
        
        setTimeout(() => {
            feedback.style.opacity = '0';
            setTimeout(() => {
                feedback.remove();
            }, 300);
        }, 2000);
    }
    
    // Adiciona efeito de typing suave ao carregar (opcional)
    console.log('%c🚀 Menu Tecnológico Carregado!', 'color: #00e5ff; font-size: 16px; font-family: monospace;');
    console.log('%cEfeitos: Preenchimento lateral | Barra deslizante | Brilho Neon', 'color: #888; font-size: 12px;');
});

// Efeito de parallax no gradiente de fundo (opcional)
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
    
    const gradientX = 20 + mouseX * 20;
    const gradientY = 20 + mouseY * 20;
    
    document.body.style.background = `linear-gradient(${gradientX}deg, #0a0e27 0%, #141432 ${50 + mouseY * 20}%, #0a0a20 100%)`;
});
