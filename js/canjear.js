const products = [
    { id: 1, name: "Cuaderno Universitario", description: "Un cuaderno de 100 hojas con el logo de la universidad.", points: 50, image: "png/Producto1.png" },
    { id: 2, name: "Lápices de Colores", description: "Set de 12 lápices de colores ideales para actividades creativas.", points: 30, image: "png/Producto2.png" },
    { id: 3, name: "Estuche para Lápices", description: "Un estuche práctico y resistente para guardar lápices y bolígrafos.", points: 40, image: "png/Producto3.png" },
    { id: 4, name: "Calculadora Básica", description: "Calculadora portátil para realizar operaciones básicas.", points: 100, image: "png/Producto4.png" },
    { id: 5, name: "Juego de Reglas", description: "Incluye regla, escuadra y transportador para trabajos de geometría.", points: 20, image: "png/Producto5.png" },
    { id: 6, name: "Bolígrafos Universitarios", description: "Set de 3 bolígrafos con tinta negra y logo de la universidad.", points: 25, image: "png/Producto6.png" },
    { id: 7, name: "Carpeta de Documentos", description: "Carpeta plástica para mantener tus papeles organizados.", points: 45, image: "png/Producto7.png" },
    { id: 8, name: "Termo Universitario", description: "Taza con el escudo de la universidad, ideal para el café.", points: 80, image: "png/Producto8.png" },
    { id: 9, name: "Cuaderno de Notas", description: "Cuaderno pequeño para tomar apuntes en clases o reuniones.", points: 30, image: "png/Producto9.png" },
    { id: 10, name: "Mochila Universitaria", description: "Mochila sencilla con logo de la universidad.", points: 150, image: "png/Producto10.png" },
    { id: 11, name: "Gorra Universitaria", description: "Gorra con diseño exclusivo de la universidad.", points: 70, image: "png/Producto11.png" },
    { id: 12, name: "Marcadores Fluorescentes", description: "Set de 4 marcadores fluorescentes en colores vivos.", points: 35, image: "png/Producto12.png" },
    { id: 13, name: "Bloc de Notas Adhesivas", description: "Paquete de notas adhesivas para organizar tus tareas.", points: 25, image: "png/Producto13.png" },
    { id: 14, name: "Lápices Universitarios", description: "Lápiz resistente para uso diario.", points: 40, image: "png/Producto14.png" },
    { id: 15, name: "Llavero Universitario", description: "Llavero con diseño del logo de la universidad.", points: 20, image: "png/Producto15.png" },
    { id: 16, name: "Set de Clips y Sujetapapeles", description: "Clips y sujetapapeles para organizar documentos.", points: 15, image: "png/Producto16.png" },
    { id: 17, name: "Camiseta Universitaria", description: "Camiseta con el logo de la universidad.", points: 120, image: "png/Producto17.png" },
    { id: 18, name: "Pegatinas Universitarias", description: "Set de pegatinas con diseños relacionados a la universidad.", points: 10, image: "png/Producto18.png" }
];


const productsPerPage = 6; // Cambia a 6 para mostrar más productos por página
let currentPage = 1;

const productsContainer = document.getElementById("productsContainer");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Render Products
function renderProducts(page) {
    productsContainer.innerHTML = "";
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const currentProducts = products.slice(start, end);

    currentProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <button>Canjear</button>
        `;
        productsContainer.appendChild(productCard);
    });

    // Disable buttons if at the start or end
    prevButton.disabled = page === 1;
    nextButton.disabled = end >= products.length;
}

// Pagination
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

// Initial Render
renderProducts(currentPage);

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('productModal');
    const closeModal = document.getElementById('closeModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPoints = document.getElementById('pointsNeeded');
    const redeemButtons = document.querySelectorAll('.product-card button');

    const products = [
        {
            title: 'Producto 1',
            description: 'Calculadora científica avanzada.',
            points: 200,
            image: 'png/Producto1.png'
        },
        {
            title: 'Producto 2',
            description: 'Juego de reglas y escuadras.',
            points: 150,
            image: 'png/Producto2.png'
        },
        {
            title: 'Producto 3',
            description: 'Paquete de cuadernos.',
            points: 100,
            image: 'png/Producto3.png'
        }
    ];

    redeemButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = products[index];
            modalImage.src = product.image;
            modalTitle.textContent = product.title;
            modalDescription.textContent = product.description;
            modalPoints.textContent = product.points;
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
