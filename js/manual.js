// Elementos del DOM
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const logoutButton = document.getElementById("logoutButton");

// Alternar visibilidad del menú de hamburguesa
hamburgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Cerrar el menú de hamburguesa al hacer clic en un enlace
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Función para cerrar sesión
logoutButton.addEventListener("click", () => {
    sessionStorage.clear(); // Limpia la sesión
    window.location.href = "index.html"; // Redirige al inicio de sesión
});
