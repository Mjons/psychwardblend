// scripts/cart-page.js
const cartPage = {
    init() {
        this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
        this.renderCart();
        this.bindCheckout();
    },
 
    renderCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        let total = 0;
 
        if (this.cart.length === 0) {
            cartItems.innerHTML = '<p>Your prescription is empty. Return to <a href="prescriptions.html">prescriptions</a>.</p>';
            return;
        }
 
        cartItems.innerHTML = this.cart.map(item => {
            total += item.price * item.quantity;
            return `
                <div class="cart-item">
                    <div class="item-details">
                        <h3>${item.name}</h3>
                        <p class="effects">Side Effects: ${item.effects}</p>
                    </div>
                    <div class="item-controls">
                        <div class="quantity">
                            <button class="btn" onclick="cartPage.updateQuantity('${item.id}', -1)">-</button>
                            <span>${item.quantity}</span>
                            <button class="btn" onclick="cartPage.updateQuantity('${item.id}', 1)">+</button>
                        </div>
                        <p class="price">$${(item.price * item.quantity).toFixed(2)}</p>
                        <button class="btn btn--error" onclick="cartPage.removeItem('${item.id}')">×</button>
                    </div>
                </div>
            `;
        }).join('');
 
        cartTotal.innerHTML = `
            <div class="cart-summary">
                <div class="subtotal">Subtotal: $${total.toFixed(2)}</div>
                <div class="shipping">Shipping: FREE</div>
                <div class="total">Total: $${total.toFixed(2)}</div>
            </div>
        `;
    },
 
    updateQuantity(id, change) {
        const item = this.cart.find(item => item.id === id);
        item.quantity = Math.max(1, item.quantity + change);
        this.saveAndUpdate();
    },
 
    removeItem(id) {
        this.cart = this.cart.filter(item => item.id !== id);
        this.saveAndUpdate();
    },
 
    saveAndUpdate() {
        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.renderCart();
    },
 
    bindCheckout() {
        document.getElementById('checkout').addEventListener('click', () => {
            window.location.href = 'checkout.html';
        });
    }
 };

 function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        return;
    }

    const itemsHTML = cart.map(item => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item">
                <div class="item-info">
                    <h3>${item.name}</h3>
                    ${item.effects ? `<p class="effects">Effects: ${item.effects}</p>` : ''}
                    ${item.size ? `<p class="size">Size: ${item.size}</p>` : ''}
                </div>
                <div class="item-price">$${(item.price * item.quantity).toFixed(2)}</div>
                <button onclick="removeFromCart('${item.id}')" class="btn btn--warning">Remove</button>
            </div>
        `;
    }).join('');

    cartItems.innerHTML = itemsHTML;
    document.getElementById('cart-total').innerHTML = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    displayCart();
    updateCartCount();
}

document.addEventListener('DOMContentLoaded', displayCart);
 
 document.addEventListener('DOMContentLoaded', () => cartPage.init());