// scripts/checkout.js
const checkout = {
    init() {
        this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
        this.renderSummary();
        this.bindForm();
    },

    renderSummary() {
        const items = document.getElementById('checkout-items');
        const total = document.getElementById('checkout-total');
        let sum = 0;

        items.innerHTML = this.cart.map(item => {
            sum += item.price * item.quantity;
            return `
                <div class="checkout-item">
                    <span>${item.name} x${item.quantity}</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `;
        }).join('');

        total.innerHTML = `
            <div class="total-line">Subtotal: $${sum.toFixed(2)}</div>
            <div class="total-line">Shipping: FREE</div>
            <div class="total-amount">Total: $${sum.toFixed(2)}</div>
        `;
    },

    bindForm() {
        document.getElementById('payment-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.processOrder();
        });
    },

    processOrder() {
        localStorage.removeItem('cart');
        window.location.href = 'confirmation.html';
    }
};

document.addEventListener('DOMContentLoaded', () => checkout.init());