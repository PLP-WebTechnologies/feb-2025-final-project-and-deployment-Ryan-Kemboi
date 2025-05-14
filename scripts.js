let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} added to cart!`);
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous content

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('cart-item');
            div.innerHTML = `<p>${item.name} - $${item.price}</p>`;
            cartItemsContainer.appendChild(div);
        });
    }
}

function goToCheckout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        window.location.href = 'checkout.html';
    }
}

document.getElementById('checkout-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your purchase!');
    localStorage.removeItem('cart'); // Clear the cart after purchase
    window.location.href = 'index.html'; // Redirect to home after checkout
});

window.onload = function() {
    if (document.getElementById('cart-items')) {
        updateCart();
    }
};
