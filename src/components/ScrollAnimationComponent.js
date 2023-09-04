import React, { useEffect } from 'react';

function ScrollAnimationComponent() {
    useEffect(() => {
        // Função para verificar se um elemento está visível na tela
        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Função para aplicar a classe de animação quando o elemento estiver visível
        function handleScrollAnimation() {
            const animatedElements = document.querySelectorAll('.popup');

            animatedElements.forEach(element => {
                if (isElementInViewport(element)) {
                    element.classList.add('show');
                }
            });
        }

        // Adiciona um listener para o evento 'scroll'
        window.addEventListener('scroll', handleScrollAnimation);

        // Chama a função uma vez quando a página carregar para checar os elementos já visíveis
        handleScrollAnimation();

        // Remove o listener quando o componente for desmontado
        return () => {
            window.removeEventListener('scroll', handleScrollAnimation);
        };
    }, []);

    return (
        <div>
            {/* Seus elementos e componentes aqui */}
        </div>
    );
}

export default ScrollAnimationComponent;
