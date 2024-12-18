// Variables de modales
const registerModal = document.getElementById("registerModal");
const loginModal = document.getElementById("loginModal");
const openRegisterBtn = document.getElementById("openRegisterModal");
const openLoginBtn = document.getElementById("openLoginModal");
const closeRegisterBtn = document.getElementById("closeRegisterModal");
const closeLoginBtn = document.getElementById("closeLoginModal");

// Matriz de usuarios
const usuarios = [
    { cedula: "001", nombre: "Victor", apellidos: "Segura", carrera: "Negocios Digitales" },
    { cedula: "002", nombre: "Gabriel", apellidos: "Toaquiza", carrera: "Negocios Digitales" },
    { cedula: "003", nombre: "Josue", apellidos: "Martinez", carrera: "Negocios Digitales" },
    { cedula: "004", nombre: "Sebastian", apellidos: "Moreno", carrera: "Negocios Digitales" },
    { cedula: "005", nombre: "Mateo", apellidos: "Carcelen", carrera: "Negocios Digitales" }
];

// Abrir y cerrar modales
openRegisterBtn.addEventListener("click", () => registerModal.style.display = "flex");
openLoginBtn.addEventListener("click", () => loginModal.style.display = "flex");
closeRegisterBtn.addEventListener("click", () => registerModal.style.display = "none");
closeLoginBtn.addEventListener("click", () => loginModal.style.display = "none");

// Registro de usuario
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const cedula = document.getElementById("cedula").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const carrera = document.getElementById("carrera").value.trim();

    if (usuarios.length < 5) {
        usuarios.push({ cedula, nombre, apellidos, carrera });
        alert("Usuario registrado correctamente.");
        registerModal.style.display = "none";
        loginModal.style.display = "flex"; // Abre modal de inicio de sesión
    } else {
        alert("No se pueden registrar más de 5 usuarios.");
    }
});

// Inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const cedula = document.getElementById("loginCedula").value.trim();
    const usuario = usuarios.find(user => user.cedula === cedula);

    if (usuario) {
        // Guardar el nombre del usuario en sessionStorage
        sessionStorage.setItem("usuarioNombre", usuario.nombre);
        sessionStorage.setItem("cedula", usuario.cedula);

        alert(`¡Bienvenido, ${usuario.nombre}!`);

        // Redirigir a inicio.html
        window.location.href = "inicio.html";
    } else {
        alert("Cédula incorrecta. Intenta de nuevo.");
    }
});

// Cerrar modal al hacer clic fuera
window.addEventListener("click", function (e) {
    if (e.target === registerModal) registerModal.style.display = "none";
    if (e.target === loginModal) loginModal.style.display = "none";
});

// Botón adicional para abrir el modal de registro centrado
document.getElementById("registerBtnCentered").addEventListener("click", function (e) {
    e.preventDefault();
    registerModal.style.display = "flex";
});


