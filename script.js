let cartCount = localStorage.getItem("cartCount") || 0;

window.onload = function () {
    const cartElement = document.getElementById("cart-count");

    if (cartElement) {
        cartElement.innerText = cartCount;
    }
};

function addToCart() {
    cartCount++;
    localStorage.setItem("cartCount", cartCount);

    const cartElement = document.getElementById("cart-count");

    if (cartElement) {
        cartElement.innerText = cartCount;
    }

    alert("Product added to cart!");
}

function clearCart() {
    cartCount = 0;
    localStorage.setItem("cartCount", cartCount);

    const cartElement = document.getElementById("cart-count");

    if (cartElement) {
        cartElement.innerText = cartCount;
    }
}

function filterProducts(category) {
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        if (category === 'all') {
            product.style.display = '';
        }
        else if (product.classList.contains(category)) {
            product.style.display = '';
        }
        else {
            product.style.display = 'none';
        }
    });
}

