
        // scripts/cart.js

const cartSystem = {
    init() {
        this.bindAddToCartButtons();
        this.updateCartCount();
    },

    addToCart(productId) {
        const products = {
            // Coffee products
            'original': {
                id: 'original',
                name: 'Original Blend',
                price: 49.99,
                type: 'coffee',
                effects: 'Sudden career epiphanies'
            },
            'double': {
                id: 'double',
                name: 'Double Dose',
                price: 59.99,
                type: 'coffee',
                effects: 'Uncontrollable authenticity'
            },
            'experimental': {
                id: 'experimental',
                name: 'Experimental Batch',
                price: 99.99,
                type: 'coffee',
                effects: 'Unknown'
            },
            // Merch products
            'survived-tee': {
                id: 'survived-tee',
                name: 'I Survived Dr. O\'s Lab Tee',
                price: 35.99,
                type: 'merch'
            },
            'microdose-mug': {
                id: 'microdose-mug',
                name: 'Microdose Me Mug',
                price: 24.99,
                type: 'merch'
            },
            'delusions-hoodie': {
                id: 'delusions-hoodie',
                name: 'Delusions of Grandeur Hoodie',
                price: 69.99,
                type: 'merch'
            }
        };

        const product = products[productId];
        if (!product) return;

        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        cart.push({...product, quantity: 1});
        localStorage.setItem('cart', JSON.stringify(cart));
        
        this.updateCartCount();
        this.showAddedEffect(event.target);
        this.showNotification(`Added ${product.name} to your prescription`);
    },

    showAddedEffect(button) {
        button.classList.add('added-to-cart');
        setTimeout(() => button.classList.remove('added-to-cart'), 1000);

        const ripple = document.createElement('div');
        ripple.className = 'cart-ripple';
        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1000);
    },

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `
            <div class="notification-content">
                <span>💊 ${message}</span>
            </div>
        `;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    },

    updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const count = document.querySelector('.cart-count');
        if (count) {
            count.textContent = cart.length;
            count.style.display = cart.length ? 'block' : 'none';
        }
    },

    bindAddToCartButtons() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (event) => {
                this.addToCart(event.target.dataset.id);
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => cartSystem.init());