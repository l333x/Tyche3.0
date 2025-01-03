const products = [
    { id: 1, name: "Producto 1", image: "png/Producto1.png" },
    { id: 2, name: "Producto 2", image: "png/Producto2.png" },
    { id: 3, name: "Producto 3", image: "png/Producto3.png" },
    { id: 4, name: "Producto 4", image: "heart.png" },
    { id: 5, name: "Producto 5", image: "heart.png" },
    { id: 6, name: "Producto 6", image: "heart.png" },

];

const productsPerPage = 3; // Mostrar solo los tres productos
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
