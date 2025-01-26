document.querySelector('.btn.btn--primary').addEventListener('click', () => {
    const content = `
        <div class="manifesto reveal">
            <h2>OUR MISSION</h2>
            <p>At Psych Ward Blend, we're not just selling coffee. We're leading a revolution against mundane mornings and mediocre mindsets.</p>
            
            <div class="principles">
                <h3>WHAT WE STAND FOR:</h3>
                <div class="principle">Cognitive Enhancement Through Natural Means</div>
                <div class="principle">Ethical Sourcing: From Blue Mountain to Your Brain</div>
                <div class="principle">Transparency in our Madness</div>
            </div>

            <p class="disclaimer">WARNING: Side effects may include sudden career changes, existential clarity, and uncontrollable authenticity.</p>
        </div>
    `;

    document.querySelector('.hero .container').innerHTML = content;
    
    // Add event listeners after content is created
    initializePrinciples();
});

function initializePrinciples() {
    const principleDetails = {
        'Cognitive Enhancement': {
            content: `
                <div class="principle-expanded">
                    <p>Our proprietary blend combines:</p>
                    <ul>
                        <li>Lion's Mane for neural regeneration</li>
                        <li>Cordyceps for mental clarity</li>
                        <li>Premium Blue Mountain coffee for sustained focus</li>
                    </ul>
                    <p class="warning">No synthetic additives. Just pure botanical madness.</p>
                </div>
            `
        },
        'Ethical Sourcing': {
            content: `
                <div class="principle-expanded">
                    <p>Every bean is:</p>
                    <ul>
                        <li>Hand-picked by certified coffee shamans</li>
                        <li>Blessed under a full moon</li>
                        <li>Fair trade and farmer-empowering</li>
                    </ul>
                    <p class="ritual">Each batch undergoes Dr. O's proprietary consciousness-expanding ritual</p>
                </div>
            `
        },
        'Transparency': {
            content: `
                <div class="principle-expanded">
                    <p>We believe in:</p>
                    <ul>
                        <li>Full disclosure of our experimental methods</li>
                        <li>Open-source enlightenment</li>
                        <li>Building a community of awakened minds</li>
                    </ul>
                    <p class="note">Results may vary. Enlightenment not guaranteed but highly probable.</p>
                </div>
            `
        }
    };

    document.querySelectorAll('.principle').forEach(principle => {
        principle.addEventListener('click', () => {
            const key = Object.keys(principleDetails).find(k => principle.textContent.includes(k));
            const isExpanded = principle.classList.contains('expanded');
            
            if (!isExpanded) {
                principle.classList.add('expanded');
                principle.insertAdjacentHTML('beforeend', principleDetails[key].content);
            } else {
                principle.classList.remove('expanded');
                principle.querySelector('.principle-expanded').remove();
            }
        });
    });
}