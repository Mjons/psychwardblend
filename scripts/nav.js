document.addEventListener('DOMContentLoaded', () => {
    const nav = `
        <nav class="nav">
            <div class="nav__container container">
                <div class="nav__logo">
                    <a href="index.html">
                    <img src="assets/images/logo.png" alt="Dr. O's Logo">
                    <span class="glitch-text">PSYCH WARD BLEND</span>
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
    document.body.insertAdjacentHTML('afterbegin', nav);
    updateCartCount();
 });
 
 const hasEntered = document.cookie.includes('entered=true');
    
 if (hasEntered || window.location.pathname.includes('index.html')) {
     const nav = `
         <nav class="nav ${hasEntered ? 'fade-in' : 'hidden'}">
             <!-- ... rest of your nav HTML ... -->
         </nav>
     `;
     document.body.insertAdjacentHTML('afterbegin', nav);
     updateCartCount();
 }

 function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
        cartCount.style.display = cart.length ? 'inline' : 'none';
    }
 }