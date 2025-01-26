// animations.js

// Scroll animations
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
 }, { threshold: 0.1 });
 
 document.querySelectorAll('[data-scroll]').forEach(el => scrollObserver.observe(el));
 
 // Glitch effect
 const glitchText = {
    elements: document.querySelectorAll('.glitch-text'),
    
    init() {
        this.elements.forEach(el => {
            setInterval(() => this.glitch(el), 3000);
        });
    },
 
    glitch(element) {
        const originalText = element.textContent;
        const iterations = 3;
        let i = 0;
 
        const interval = setInterval(() => {
            element.textContent = originalText
                .split('')
                .map((char, idx) => {
                    if (Math.random() < 0.3) {
                        return String.fromCharCode(char.charCodeAt(0) + Math.floor(Math.random() * 5));
                    }
                    return char;
                })
                .join('');
 
            i++;
            if (i >= iterations) {
                clearInterval(interval);
                element.textContent = originalText;
            }
        }, 50);
    }
 };
 
 // Warning tape effect
 const warningTape = {
    init() {
        document.querySelectorAll('.warning-tape').forEach(el => {
            el.addEventListener('mouseover', () => {
                el.style.setProperty('--scan-position', '100%');
            });
            el.addEventListener('mouseout', () => {
                el.style.setProperty('--scan-position', '0%');
            });
        });
    }
 };
 
 // Page transitions
 const pageTransition = {
    init() {
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                if (link.href && link.href.startsWith(window.location.origin)) {
                    e.preventDefault();
                    document.body.classList.add('page-exit');
                    setTimeout(() => {
                        window.location = link.href;
                    }, 500);
                }
            });
        });
    }
 };
 
 // Initialize
 document.addEventListener('DOMContentLoaded', () => {
    glitchText.init();
    warningTape.init();
    pageTransition.init();
 });
 
 // Cursor effect
 const cursor = document.createElement('div');
 cursor.className = 'custom-cursor';
 document.body.appendChild(cursor);
 
 document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
 });