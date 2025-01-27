// Selección del menú de hamburguesa y los enlaces
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Alternar visibilidad del menú de navegación
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar el menú de hamburguesa al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Funcionalidad del botón de cerrar sesión
logoutButton.addEventListener("click", () => {
    sessionStorage.clear(); // Limpia datos de sesión
    window.location.href = "index.html"; // Redirige a la página de inicio de sesión
});
