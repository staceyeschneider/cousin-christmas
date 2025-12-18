// Snowfall - reduced frequency
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '<i class="fa-regular fa-snowflake"></i>';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 3 + 7 + 's';
    snowflake.style.opacity = Math.random() * 0.6 + 0.4;
    snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.getElementById('snowflakes').appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 10000);
}
setInterval(createSnowflake, 600); // Reduced from 300ms to 600ms

// Large decorative snowflakes for roster section
function createRosterSnowflakes() {
    const rosterSection = document.getElementById('players');
    if (!rosterSection) return;
    const positions = [
        { top: '10%', left: '5%', size: '120px', rotation: '15deg' },
        { top: '60%', right: '8%', size: '100px', rotation: '-20deg' },
        { top: '30%', left: '85%', size: '90px', rotation: '45deg' },
        { top: '75%', left: '15%', size: '110px', rotation: '-10deg' },
        { top: '20%', right: '20%', size: '95px', rotation: '30deg' }
    ];

    positions.forEach(pos => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('roster-snowflake');
        snowflake.innerHTML = '<i class="fa-regular fa-snowflake"></i>';
        snowflake.style.fontSize = pos.size;
        snowflake.style.top = pos.top;
        if (pos.left) snowflake.style.left = pos.left;
        if (pos.right) snowflake.style.right = pos.right;
        snowflake.style.transform = `rotate(${pos.rotation})`;
        rosterSection.appendChild(snowflake);
    });
}
createRosterSnowflakes();

// Large decorative snowflakes for activities section
function createActivitiesSnowflakes() {
    const activitiesSection = document.getElementById('activities');
    if (!activitiesSection) return;
    const positions = [
        { top: '15%', left: '10%', size: '110px', rotation: '-25deg' },
        { top: '70%', right: '12%', size: '95px', rotation: '35deg' },
        { top: '40%', left: '80%', size: '105px', rotation: '-15deg' },
        { top: '25%', right: '25%', size: '90px', rotation: '50deg' }
    ];

    positions.forEach(pos => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('roster-snowflake');
        snowflake.innerHTML = '<i class="fa-regular fa-snowflake"></i>';
        snowflake.style.fontSize = pos.size;
        snowflake.style.top = pos.top;
        if (pos.left) snowflake.style.left = pos.left;
        if (pos.right) snowflake.style.right = pos.right;
        snowflake.style.transform = `rotate(${pos.rotation})`;
        activitiesSection.appendChild(snowflake);
    });
}
createActivitiesSnowflakes();

// Large decorative snowflakes for archives section
function createArchivesSnowflakes() {
    const archivesSection = document.getElementById('archives');
    if (!archivesSection) return;
    const positions = [
        { top: '20%', left: '8%', size: '115px', rotation: '20deg' },
        { top: '65%', right: '10%', size: '100px', rotation: '-30deg' },
        { top: '35%', left: '88%', size: '95px', rotation: '40deg' },
        { top: '50%', left: '12%', size: '105px', rotation: '-5deg' }
    ];

    positions.forEach(pos => {
        const snowflake = document.createElement('div');
        snowflake.classList.add('roster-snowflake');
        snowflake.innerHTML = '<i class="fa-regular fa-snowflake"></i>';
        snowflake.style.fontSize = pos.size;
        snowflake.style.top = pos.top;
        if (pos.left) snowflake.style.left = pos.left;
        if (pos.right) snowflake.style.right = pos.right;
        snowflake.style.transform = `rotate(${pos.rotation})`;
        archivesSection.appendChild(snowflake);
    });
}
createArchivesSnowflakes();

// Countdown
function updateCountdown() {
    const eventDate = new Date('December 23, 2025 12:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) return;
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minsEl = document.getElementById('minutes');

    if (daysEl) daysEl.innerText = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
    if (hoursEl) hoursEl.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
    if (minsEl) minsEl.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Accordion
function toggleGame(header) {
    const details = header.nextElementSibling;
    const icon = header.querySelector('div:last-child i');
    if (details.style.maxHeight) {
        details.style.maxHeight = null;
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
        icon.style.color = 'var(--ice-blue)';
    } else {
        details.style.maxHeight = details.scrollHeight + "px";
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
        icon.style.color = 'var(--accent-red)';
    }
}
// Lightbox
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightbox-img');
    if (lb && lbImg) {
        lb.style.display = 'flex';
        lbImg.src = src;
    }
}

// Global exposure for onclick handlers
window.toggleGame = toggleGame;
window.openLightbox = openLightbox;
