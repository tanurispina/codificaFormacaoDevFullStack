// Aguarda o DOM estar completamente carregado para executar os scripts
document.addEventListener('DOMContentLoaded', () => {

    /* =================================
       LÓGICA DO TOGGLE DE TEMA
    ================================= */
    const toggleBtn = document.getElementById('toggle-theme');
    const body = document.body;
    const icon = toggleBtn.querySelector('i');

    // Função centralizada para atualizar o ícone e o estado
    function updateTheme(isDarkMode) {
        body.classList.toggle('dark-mode', isDarkMode);
        if (isDarkMode) {
            icon.classList.replace('bx-brightness', 'bx-moon');
        } else {
            icon.classList.replace('bx-moon', 'bx-brightness');
        }
    }

    // Evento de clique no botão de tema
    toggleBtn.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        // A lógica de toggle agora é negada, pois queremos o estado oposto
        updateTheme(!isDarkMode);
        // Armazena a nova escolha no localStorage
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // O script no <head> já cuidou do estado inicial,
    // então aqui apenas garantimos que o ícone esteja correto.
    const savedTheme = localStorage.getItem('theme') === 'dark';
    updateTheme(savedTheme);


    /* =================================
       LÓGICA DO MENU HAMBÚRGUER
    ================================= */
    const hamburgerBtn = document.querySelector('.hamburger');
    const menu = document.getElementById('menu');
    const menuLinks = menu.querySelectorAll('a.nav-link'); // Seleciona todos os links do menu

    hamburgerBtn.addEventListener('click', () => {
        const isActive = menu.classList.toggle('active');
        
        // Atualiza o atributo ARIA para acessibilidade
        hamburgerBtn.setAttribute('aria-expanded', isActive);
    });

    // Fecha o menu ao clicar em um dos links (melhora a usabilidade)
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        });
    });

});