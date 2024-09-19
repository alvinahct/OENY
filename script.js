// ... (previous code remains unchanged)

// Render products
function renderProducts(productsToRender, containerId) {
    console.log('Rendering products:', productsToRender);
    console.log('Container ID:', containerId);
    const container = document.getElementById(containerId);
    if (container) {
        console.log('Container found, rendering products');
        container.innerHTML = productsToRender.map(product => `
            <div class="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
                <div class="p-4">
                    <img src="${product.image}" alt="${product.name}" class="w-full aspect-square object-cover rounded-md">
                </div>
                <div class="p-4">
                    <h3 class="text-lg mb-2 text-gray-800">${product.name}</h3>
                    <p class="text-sm text-gray-600 mb-2">${product.description}</p>
                    <p class="text-green-800 font-semibold">${product.price} kr</p>
                    <button onclick="addToCart(${product.id})" class="w-full mt-2 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">
                        Förbeställ
                    </button>
                </div>
            </div>
        `).join('');
        console.log('Products rendered');
    } else {
        console.error('Container not found:', containerId);
    }
}

// ... (rest of the code remains unchanged)

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    updateCartCount();
    if (document.getElementById('product-grid')) {
        console.log('Rendering all products');
        renderProducts(products, 'product-grid');
    }
    if (document.getElementById('featured-products')) {
        console.log('Rendering featured products');
        renderProducts(products.slice(0, 4), 'featured-products');
    }
    if (document.getElementById('cart-items')) {
        renderCart();
    }
});

// Log the products array to check if it's defined
console.log('Products:', products);