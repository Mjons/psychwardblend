document.querySelector('.btn.btn--primary').addEventListener('click', () => {
    // Set cookie for navigation
    const d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    document.cookie = `entered=true;expires=${d.toUTCString()};path=/`;
    
    // Show navigation with animation
    const nav = document.querySelector('.nav');
    if (nav) {
        nav.classList.remove('hidden');
        nav.classList.add('fade-in');
        
        // Add a subtle glow effect
        setTimeout(() => {
            nav.classList.add('glow');
            setTimeout(() => nav.classList.remove('glow'), 1000);
        }, 500);
    } else {
        const navScript = document.createElement('script');
        navScript.src = '../scripts/nav.js';
        document.body.appendChild(navScript);
    }

    // Original mission content
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

// Function to check if user has entered before
function hasUserEntered() {
    return document.cookie.includes('entered=true');
}

// Initial check on page load
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav');
    if (nav && !hasUserEntered()) {
        nav.classList.add('hidden');
    }
});