// Variables para actividades
let academicIndex = 0;
let extraIndex = 0;

// Matriz de actividades académicas
const actividadesAcademicas = [
    { nombre: "Investigación de Mercado", puntos: 10, estado: "Pendiente" },
    { nombre: "Seminario de Finanzas", puntos: 15, estado: "Completada" },
    { nombre: "Taller de Marketing Digital", puntos: 20, estado: "Pendiente" },
    { nombre: "Curso de Contabilidad", puntos: 25, estado: "Completada" },
    { nombre: "Expo Académica", puntos: 30, estado: "Pendiente" },
    { nombre: "Tarea Análisis FODA", puntos: 35, estado: "Completada" },
    { nombre: "Proyecto Emprendimiento", puntos: 40, estado: "Pendiente" },
    { nombre: "Entrega de Ensayo", puntos: 45, estado: "Completada" },
    { nombre: "Evaluación Técnica", puntos: 50, estado: "Pendiente" },
    { nombre: "Certamen de Innovación", puntos: 55, estado: "Completada" }
];

// Matriz de actividades extracurriculares
const actividadesExtracurriculares = [
    { nombre: "Partido de Fútbol", puntos: 5, estado: "Pendiente" },
    { nombre: "Taller de Liderazgo", puntos: 10, estado: "Completada" },
    { nombre: "Club de Lectura", puntos: 15, estado: "Pendiente" },
    { nombre: "Concierto Universitario", puntos: 20, estado: "Completada" },
    { nombre: "Jornada de Voluntariado", puntos: 25, estado: "Pendiente" },
    { nombre: "Concurso de Oratoria", puntos: 30, estado: "Completada" },
    { nombre: "Actividad Deportiva", puntos: 35, estado: "Pendiente" },
    { nombre: "Feria Cultural", puntos: 40, estado: "Completada" },
    { nombre: "Conferencia de Bienestar", puntos: 45, estado: "Pendiente" },
    { nombre: "Torneo de Debate", puntos: 50, estado: "Completada" }
];

// Usuario logueado
const currentUser = sessionStorage.getItem("cedula");
const userName = sessionStorage.getItem("usuarioNombre");
const userLastName = sessionStorage.getItem("usuarioApellido");

// Mostrar nombre y apellido del usuario logueado
document.getElementById("userNameBox").innerText = `${userName || "Usuario"} ${userLastName || ""}`.trim();

// Mostrar botones dependiendo del usuario
if (["001", "002", "004"].includes(currentUser)) {
    document.getElementById("loadAcademicBtn").style.display = "inline-block";
    document.getElementById("loadExtraBtn").style.display = "inline-block";
} else {
    document.getElementById("loadAcademicBtn").style.display = "none";
    document.getElementById("loadExtraBtn").style.display = "none";
}
// Función para mostrar actividades dinámicamente
function displayActivity(containerId, activities, index) {
    const container = document.getElementById(containerId);
    const activity = activities[index];
    container.innerHTML = activity
        ? `<strong>${activity.nombre}</strong><br>Puntos: ${activity.puntos} | Estado: ${activity.estado}`
        : "No hay actividades disponibles";
}

// Cargar actividades iniciales
displayActivity("academicActivities", actividadesAcademicas, academicIndex);
displayActivity("extraActivities", actividadesExtracurriculares, extraIndex);

// Funciones de navegación
document.getElementById("nextAcademic").addEventListener("click", () => {
    if (academicIndex < actividadesAcademicas.length - 1) academicIndex++;
    displayActivity("academicActivities", actividadesAcademicas, academicIndex);
});
document.getElementById("prevAcademic").addEventListener("click", () => {
    if (academicIndex > 0) academicIndex--;
    displayActivity("academicActivities", actividadesAcademicas, academicIndex);
});

document.getElementById("nextExtra").addEventListener("click", () => {
    if (extraIndex < actividadesExtracurriculares.length - 1) extraIndex++;
    displayActivity("extraActivities", actividadesExtracurriculares, extraIndex);
});
document.getElementById("prevExtra").addEventListener("click", () => {
    if (extraIndex > 0) extraIndex--;
    displayActivity("extraActivities", actividadesExtracurriculares, extraIndex);
});

// Modal funcionalidad
const modal = document.getElementById("activityModal");
const closeModal = document.getElementById("closeModal");
const activityForm = document.getElementById("activityForm");
let currentMatrix;

document.getElementById("loadAcademicBtn").addEventListener("click", () => {
    currentMatrix = actividadesAcademicas;
    modal.style.display = "flex";
});

document.getElementById("loadExtraBtn").addEventListener("click", () => {
    currentMatrix = actividadesExtracurriculares;
    modal.style.display = "flex";
});

// Guardar nueva actividad en la matriz
activityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("activityName").value;
    const puntos = document.getElementById("activityPoints").value;
    const estado = document.getElementById("activityStatus").value;

    if (currentMatrix.length < 30) {
        currentMatrix.push({ nombre, puntos: Number(puntos), estado });
        alert("Actividad guardada correctamente.");
    } else {
        alert("No puedes agregar más actividades.");
    }

    modal.style.display = "none";
    activityForm.reset();

    // Actualizar vista
    displayActivity(
        currentMatrix === actividadesAcademicas ? "academicActivities" : "extraActivities",
        currentMatrix,
        currentMatrix.length - 1
    );
});

// Cerrar modal
closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// Función para formatear la actividad
function formatActivity(activity) {
    return `
        <div>
            <span><strong>${activity.nombre}</strong></span><br>
            <span>Puntos: ${activity.puntos}</span><br>
            <span>Estado: ${activity.estado}</span>
        </div>
    `;
}

// Mostrar actividad en el contenedor
function displayActivity(containerId, activities, index) {
    const activity = activities[index];
    const container = document.getElementById(containerId);

    if (activity) {
        container.innerHTML = formatActivity(activity);
    } else {
        container.innerHTML = "<p>No hay actividades disponibles</p>";
    }
}

// Cargar actividades al inicio
displayActivity("academicActivities", actividadesAcademicas, academicIndex);
displayActivity("extraActivities", actividadesExtracurriculares, extraIndex);
