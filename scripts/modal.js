// In scripts/modal.js
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('warning-modal');
    const acceptBtn = document.getElementById('accept');
    const declineBtn = document.getElementById('decline');
 
    acceptBtn.addEventListener('click', () => {
        modal.querySelector('.modal__content').innerHTML = `
            <h2>🧠 ENLIGHTENMENT ACHIEVED</h2>
            <p class="glitch-text">Welcome to the ward, brave soul.</p>
            <p>Your journey to cognitive enhancement begins now.</p>
            <img src="../assets/images/logo.png" alt="Dr. O's Logo" class="pulse">
            
        `;
    });
 
    declineBtn.addEventListener('click', () => {
        modal.querySelector('.modal__content').innerHTML = `
            <h2>😈 COWARD'S EXIT</h2>
            <p class="flicker">Return to your mundane existence...</p>
            <p class="redacted">[POTENTIAL WASTED]</p>
            <small>Dr. O will remember this weakness</small>
            
        `;
    });
 });