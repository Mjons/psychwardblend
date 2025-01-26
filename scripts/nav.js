// Updated nav.js
document.addEventListener('DOMContentLoaded', () => {
    // Create nav HTML
    const nav = `
        <nav class="nav">
            <div class="nav__container container">
                <div class="nav__logo">
                    <a href="index.html">
                        <img src="assets/images/logo.png" alt="Dr. O's Logo">
                        <span class="glitch-text">PSYCH WARD BLEND</span>
                    </a>
                </div>
                <ul class="nav__menu">
                    <li><a href="lab.html" class="flicker">THE LAB</a></li>
                    <li><a href="prescriptions.html">PRESCRIPTIONS</a></li>
                    <li><a href="effects.html">SIDE EFFECTS</a></li>
                    <li><a href="therapy.html">THERAPY</a></li>
                    <li>
                        <a href="cart.html" class="cart-nav">
                            <span class="cart-icon">🛒</span>
                            <span class="cart-count">0</span>
                        </a>
                    </li>
                </ul>
                <button class="nav__toggle" aria-label="Toggle menu">
                    <span></span>
                </button>
            </div>
        </nav>
    `;
    
    // Insert nav at top of body
    document.body.insertAdjacentHTML('afterbegin', nav);
    
    // Update cart count
    updateCartCount();
    
    // Initialize mobile menu toggle
    const toggle = document.querySelector('.nav__toggle');
    const menu = document.querySelector('.nav__menu');
    toggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        toggle.classList.toggle('active');
    });
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
        cartCount.style.display = cart.length ? 'inline' : 'none';
    }
}