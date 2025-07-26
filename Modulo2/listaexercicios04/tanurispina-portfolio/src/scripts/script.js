
document.addEventListener('DOMContentLoaded', () => {


    const toggleBtn = document.getElementById('toggle-theme');
    const body = document.body;
    const icon = toggleBtn.querySelector('i');

   
    function updateTheme(isDarkMode) {
        body.classList.toggle('dark-mode', isDarkMode);
        if (isDarkMode) {
            icon.classList.replace('bx-brightness', 'bx-moon');
        } else {
            icon.classList.replace('bx-moon', 'bx-brightness');
        }
    }


    toggleBtn.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
  
        updateTheme(!isDarkMode);
 
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

 
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
        
        hamburgerBtn.setAttribute('aria-expanded', isActive);
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            hamburgerBtn.setAttribute('aria-expanded', 'false');
        });
    });

});