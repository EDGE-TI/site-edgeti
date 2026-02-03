// Seleciona os elementos pelo ID
const btnMobile = document.getElementById('btn-mobile');
const menuContainer = document.getElementById('menu-mobile');
const iconElement = btnMobile.querySelector('i');

function toggleMenu(event) {
    // Previne comportamento padrão de touch (bug comum em iOS)
    if (event && event.type === 'touchstart') event.preventDefault();

    // Adiciona/Remove a classe 'active' no menu container
    menuContainer.classList.toggle('active');

    // Verifica se abriu ou fechou para trocar o ícone e travar scroll
    const isActive = menuContainer.classList.contains('active');

    if (isActive) {
        // Abriu: Muda ícone para X e trava a tela
        iconElement.classList.replace('ph-list', 'ph-x');
        document.body.style.overflow = 'hidden'; 
    } else {
        // Fechou: Muda ícone para Lista e libera a tela
        iconElement.classList.replace('ph-x', 'ph-list');
        document.body.style.overflow = 'auto';
    }
}

// Ouve os cliques (Click e Touch)
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Fecha o menu ao clicar em qualquer link
const mobileLinks = document.querySelectorAll('.menu-mobile-container a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(menuContainer.classList.contains('active')) toggleMenu();
    });
});

// Segurança: Se a tela crescer (virar Desktop), fecha o menu automaticamente
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && menuContainer.classList.contains('active')) {
        toggleMenu();
    }
});