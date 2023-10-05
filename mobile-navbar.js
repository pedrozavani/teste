function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var menuIcon = document.querySelector('.menu-icon');
    var closeIcon = document.querySelector('.close-icon');

    if (mobileMenu.style.right === '' || mobileMenu.style.right === '-100%') {
        mobileMenu.style.right = '0';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block'; // Exibir o ícone "X"
    } else {
        mobileMenu.style.right = '-100%';
        menuIcon.style.display = 'block'; // Exibir o ícone do menu
        closeIcon.style.display = 'none'; // Ocultar o ícone "X"
    }
}


