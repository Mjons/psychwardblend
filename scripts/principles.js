// In scripts/principles.js
document.addEventListener('DOMContentLoaded', () => {
    const principleDetails = {
        'Cognitive Enhancement': {
            title: 'Cognitive Enhancement Through Natural Means',
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
            title: 'From Blue Mountain to Your Brain',
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
            title: 'Transparency in our Madness',
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
 });