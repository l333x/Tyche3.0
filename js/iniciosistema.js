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
    { cedula: "005", nombre: "Mateo", apellidos: "Carcelen", carrera: "Negocios Digitales" },
    { cedula: "1722273487", nombre: "Joseph", apellidos: "Torres", carrera: "Psicología" },
    { cedula: "1756066088", nombre: "Alan", apellidos: "Singaña", carrera: "Negocios Digitales" },
    { cedula: "1727522490", nombre: "Daniel", apellidos: "Tituaña", carrera: "Negocios Digitales" },
    { cedula: "0820226230", nombre: "Mateo", apellidos: "Yanez", carrera: "Negocios Digitales" },
    { cedula: "0114368753", nombre: "Anahi", apellidos: "Díaz", carrera: "Negocios Digitales" },
    { cedula: "1823456706", nombre: "Pamela", apellidos: "Padilla", carrera: "Negocios Digitales" },
    { cedula: "1246789058", nombre: "Jesús", apellidos: "Barreto", carrera: "Negocios Digitales" },
    { cedula: "1720203650", nombre: "Diana", apellidos: "Carrera", carrera: "Negocios Digitales" },
    { cedula: "1726251134", nombre: "Joffre", apellidos: "Chacón", carrera: "Negocios Digitales" },
    { cedula: "1759696492", nombre: "Erick", apellidos: "Carvajal", carrera: "Odontología" },
    { cedula: "1722654405", nombre: "Amelia", apellidos: "Reinoso", carrera: "Negocios Digitales" },
    { cedula: "1036839165", nombre: "Xavier", apellidos: "Casa", carrera: "Negocios Digitales" },
    { cedula: "1839250147", nombre: "Jorge", apellidos: "Rodríguez", carrera: "Negocios Digitales" },
    { cedula: "1725254895", nombre: "Camila", apellidos: "Andrade", carrera: "Negocios Digitales" },
    { cedula: "1162374900", nombre: "Diego", apellidos: "Benítez", carrera: "Negocios Digitales" },
    { cedula: "1755436415", nombre: "Emily", apellidos: "Romero", carrera: "Psicología" },
    { cedula: "1725083297", nombre: "Carlos", apellidos: "Rodriguez", carrera: "Psicología" },
    { cedula: "1753461092", nombre: "Christian", apellidos: "Mármol", carrera: "Derecho" },
    { cedula: "1729165942", nombre: "Emily", apellidos: "Toledo", carrera: "Psicología" },
    { cedula: "1753717667", nombre: "Alexey", apellidos: "Rubio", carrera: "Psicología" },
    { cedula: "1751284678", nombre: "Daniela", apellidos: "Lema", carrera: "Derecho" },
    { cedula: "1750777938", nombre: "Patricio", apellidos: "Simba", carrera: "Derecho" },
    { cedula: "1106076878", nombre: "Emily", apellidos: "Marín", carrera: "Derecho" },
    { cedula: "1725499691", nombre: "Seleni", apellidos: "Jurado", carrera: "Psicología" }
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
                
        }
    } else {
        alert("Cédula incorrecta. Intenta de nuevo.");
    }
});
