// scripts/image-loader.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.product-card img').forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});