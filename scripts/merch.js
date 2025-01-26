// merch.js

const merchStore = {
    init() {
        this.bindSizeSelectors();
        this.initMobileGallery();
        this.handleQRHovers();
    },
 
    bindSizeSelectors() {
        document.querySelectorAll('.size').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.merch-card');
                card.querySelectorAll('.size').forEach(b => b.classList.remove('selected'));
                e.target.classList.add('selected');
                this.updateAddButton(card, e.target.dataset.size);
            });
        });
    },
 
    updateAddButton(card, size) {
        const btn = card.querySelector('.add-to-cart');
        btn.dataset.size = size;
        const originalText = btn.dataset.originalText || btn.textContent;
        btn.dataset.originalText = originalText;
        btn.textContent = `${originalText} - SIZE ${size}`;
    },
 
    initMobileGallery() {
        const gallery = document.querySelector('.merch-mobile-gallery');
        if (!gallery) return;
 
        let startX, isDragging = false;
 
        gallery.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX;
            isDragging = true;
        });
 
        gallery.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const x = e.touches[0].pageX;
            const walk = (x - startX) * 2;
            gallery.scrollLeft = gallery.scrollLeft - walk;
            startX = x;
        });
 
        gallery.addEventListener('touchend', () => {
            isDragging = false;
        });
    },
 
    handleQRHovers() {
        document.querySelectorAll('.qr-overlay').forEach(overlay => {
            overlay.addEventListener('mouseenter', () => {
                overlay.classList.add('active');
            });
            overlay.addEventListener('mouseleave', () => {
                overlay.classList.remove('active');
            });
        });
    }
 };
 
 // Size guide modal
 const sizeGuide = {
    init() {
        const btn = document.querySelector('.size-guide-btn');
        if (!btn) return;
 
        btn.addEventListener('click', () => this.show());
    },
 
    show() {
        const modal = document.getElementById('size-modal');
        modal.classList.add('active');
    },
 
    hide() {
        const modal = document.getElementById('size-modal');
        modal.classList.remove('active');
    }
 };
 
 document.addEventListener('DOMContentLoaded', () => {
    merchStore.init();
    sizeGuide.init();
 });