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
openRegisterBtn.addEventListener("click", () => (registerModal.style.display = "flex"));
openLoginBtn.addEventListener("click", () => (loginModal.style.display = "flex"));
closeRegisterBtn.addEventListener("click", () => (registerModal.style.display = "none"));
closeLoginBtn.addEventListener("click", () => (loginModal.style.display = "none"));

// Registro de usuario
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const cedula = document.getElementById("cedula").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const carrera = document.getElementById("carrera").value.trim();

    if (!usuarios.find(user => user.cedula === cedula)) {
        usuarios.push({ cedula, nombre, apellidos, carrera });
        alert("Usuario registrado correctamente.");
        registerModal.style.display = "none";
        loginModal.style.display = "flex"; // Abre modal de inicio de sesión
    } else {
        alert("La cédula ya está registrada.");
    }
});

// Inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const cedula = document.getElementById("loginCedula").value.trim();
    const usuario = usuarios.find(user => user.cedula === cedula);

    if (usuario) {
        alert(`¡Bienvenido, ${usuario.nombre}!`);
        loginModal.style.display = "none"; // Cerrar modal
        // Guardar usuario logueado (simulación de sesión)
        sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
    } else {
        alert("Cédula incorrecta. Intenta de nuevo.");
    }
});

// Cerrar modales al hacer clic fuera
window.addEventListener("click", function (e) {
    if (e.target === registerModal) registerModal.style.display = "none";
    if (e.target === loginModal) loginModal.style.display = "none";
});

// Redirigir según el botón clickeado
const botonesAccion = document.querySelectorAll(".action-button");
let botonRedirigir = null;

botonesAccion.forEach(boton => {
    boton.addEventListener("click", function (e) {
        e.preventDefault();
        botonRedirigir = e.target.id; // Guardar el botón clickeado
        loginModal.style.display = "flex"; // Mostrar modal de inicio de sesión
    });
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const cedula = document.getElementById("loginCedula").value.trim();
    const usuario = usuarios.find(user => user.cedula === cedula);

    if (usuario) {
        loginModal.style.display = "none";
        alert(`¡Bienvenido, ${usuario.nombre}!`);

        // Redirigir según el botón clickeado previamente
        switch (botonRedirigir) {
            case "btnConocerMas":
                window.location.href = "informacion.html";
                break;
            case "btnConocerProyecto":
                window.location.href = "informacion.html";
                break;
            case "btnRegistrateAhora":
                window.location.href = "registro.html";
                break;
            default:
                alert("No se pudo redirigir.");
        }
    } else {
        alert("Cédula incorrecta. Intenta de nuevo.");
    }
});
