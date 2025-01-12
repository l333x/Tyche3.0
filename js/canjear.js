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

// Función para cerrar sesión
const logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", () => {
    sessionStorage.clear(); // Limpia la sesión
    window.location.href = "index.html"; // Redirige al inicio de sesión
});

//Matriz de productos
const products = [
    { id: 1, name: "Camiseta", description: "Camiseta diseñada para ofrecer comodidad y durabilidad en tus actividades diarias.", points: 30, image: "png/Producto1.png" },
    { id: 2, name: "Bolsas", description: "Lleva todo lo esencial con esta práctica bolsa, ideal para tus materiales u objetos diarios.", points: 70, image: "png/Producto2.png" },
    { id: 3, name: "Caja de Colores", description: "Conjunto de colores vibrantes, diseñado para apoyar tus actividades creativas y académicas.", points: 30, image: "png/Producto3.png" },
    { id: 4, name: "Cuaderno", description: "Cuaderno elegante el compañero perfecto para tus ideas y notas. ", points: 50, image: "png/Producto4.png" },
    { id: 5, name: "Gorra", description: "Gorra resistente y funcional, diseñada para protegerte del sol y complementar tu vestimenta.", points: 70, image: "png/Producto5.png" },
    { id: 6, name: "Mochila", description: "Mochila diseñada para acompañarte en tu día a día, esta mochila combina funcionalidad, espacio y diseño.", points: 150, image: "png/Producto6.png" },
    { id: 7, name: "Caja de Notas", description: "Notas adhesivas prácticas, ideales para la organización y resaltar información importante.", points: 25, image: "png/Producto7.png" },
    { id: 8, name: "Termos", description: "Termo aislante de alto rendimiento, perfecto para mantener la temperatura de tus bebidas.", points: 80, image: "png/Producto8.png" },

];

const productsPerPage = 4; // Mostrar 6 productos por página
let currentPage = 1;

const productsContainer = document.getElementById("productsContainer");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Renderizar productos
function renderProducts(page) {
    productsContainer.innerHTML = "";
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const currentProducts = products.slice(start, end);

    currentProducts.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <button class="redeem-btn" data-index="${start + index}">Canjear</button>
        `;
        productsContainer.appendChild(productCard);
    });

    // Deshabilitar botones si es el inicio o el final
    prevButton.disabled = page === 1;
    nextButton.disabled = end >= products.length;
}

// Paginación
prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderProducts(currentPage);
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage * productsPerPage < products.length) {
        currentPage++;
        renderProducts(currentPage);
    }
});

// Inicializar Renderizado
renderProducts(currentPage);

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("productModal");
    const closeModal = document.getElementById("closeModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalPoints = document.getElementById("pointsNeeded");
    const redeemButton = document.getElementById("redeemButton");

    const whatsappNumber = "593995866394"; // Cambia por tu número de WhatsApp

    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("redeem-btn")) {
            const productIndex = event.target.getAttribute("data-index");
            const product = products[productIndex];

            modalImage.src = product.image;
            modalTitle.textContent = product.name;
            modalDescription.textContent = product.description;
            modalPoints.textContent = product.points;
            modal.style.display = "flex";

            // Configurar el botón de canjear
            redeemButton.onclick = () => {
                const message = `Vengo de Tyché, deseo canjear este producto: ${product.name}. Espero la confirmación muchas gracias.`;
                const encodedMessage = encodeURIComponent(message);
                const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
                window.open(whatsappLink, "_blank"); // Redirigir a WhatsApp
            };
        }
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
