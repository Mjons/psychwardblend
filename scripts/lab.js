// lab.js

// Handle security clearance modal
const securityModal = {
   init() {
       if (!localStorage.getItem('labClearance')) {
           this.show();
       }
   },

   show() {
       const modal = document.createElement('div');
       modal.className = 'modal active';
       modal.innerHTML = `
           <div class="modal__content">
               <h2>⚠️ SECURITY CLEARANCE REQUIRED</h2>
               <form id="clearance-form">
                   <input type="text" placeholder="ACCESS CODE" required>
                   <button type="submit" class="btn btn--warning">VERIFY</button>
               </form>
           </div>
       `;
       document.body.appendChild(modal);
       this.bindEvents(modal);
   },

   bindEvents(modal) {
       const form = modal.querySelector('#clearance-form');
       form.addEventListener('submit', (e) => {
           e.preventDefault();
           const code = form.querySelector('input').value;
           if (code.toLowerCase() === 'unstable') {
               localStorage.setItem('labClearance', 'granted');
               modal.remove();
               this.revealContent();
           } else {
               this.showError(form);
           }
       });
   },

   showError(form) {
       form.classList.add('shake');
       setTimeout(() => form.classList.remove('shake'), 500);
   },

   revealContent() {
       document.querySelectorAll('.redacted').forEach(el => {
           el.classList.add('revealed');
       });
   }
};

// Handle experiment animations
const experiments = {
   init() {
       this.animate();
       this.bindHoverEffects();
   },

   animate() {
       const experiments = document.querySelectorAll('.experiment');
       experiments.forEach(exp => {
           setInterval(() => {
               exp.classList.add('pulse');
               setTimeout(() => exp.classList.remove('pulse'), 1000);
           }, Math.random() * 5000 + 2000);
       });
   },

   bindHoverEffects() {
       document.querySelectorAll('.experiment').forEach(exp => {
           exp.addEventListener('mouseover', () => {
               exp.querySelector('p').textContent = 
                   exp.querySelector('p').textContent.replace('[REDACTED]', 'CLASSIFIED');
           });
       });
   }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
   securityModal.init();
   experiments.init();
});

// Easter egg
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
   if (e.key === konamiCode[konamiIndex]) {
       konamiIndex++;
       if (konamiIndex === konamiCode.length) {
           document.body.classList.add('ascended');
           konamiIndex = 0;
       }
   } else {
       konamiIndex = 0;
   }
});