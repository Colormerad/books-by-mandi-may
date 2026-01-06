// ============================================
// MATRIX CODE RAIN ANIMATION
// ============================================

const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Matrix characters - mix of code symbols and numbers
const matrixChars = '01{}</>[]();=+-*%$#@!&|^~`\'"\\';
const fontSize = 14;
const columns = canvas.width / fontSize;

// Array of drops - one per column
const drops = [];
for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -100;
}

// Draw the matrix
function drawMatrix() {
    // Black background with slight transparency for trail effect
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00EA64'; // HackerRank green
    ctx.font = fontSize + 'px monospace';

    // Loop through drops
    for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top randomly after it has crossed the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Run the animation
setInterval(drawMatrix, 50);

// ============================================
// MOBILE HAMBURGER MENU
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a nav link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHTING
// ============================================

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.pageYOffset + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.style.color = '';
                link.style.background = '';
            });
            navLink.style.color = '#00EA64';
            navLink.style.background = 'rgba(0, 234, 100, 0.1)';
        }
    });
});

// ============================================
// STAT COUNTER ANIMATION
// ============================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString();
        }
    }, 16);
}

// Trigger counters when hero section is visible
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate all stat counters
            document.querySelectorAll('.stat-value').forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ============================================
// INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
// ============================================

const fadeObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, fadeObserverOptions);

// Observe elements for animations
document.querySelectorAll('.section-title, .book-card, .skill-tag, .terminal-header').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// ============================================
// CODE WINDOW TYPING ANIMATION
// ============================================

function typeCode() {
    const codeWindow = document.querySelector('.code-content code');
    if (!codeWindow) return;

    const originalText = codeWindow.textContent;
    codeWindow.textContent = '';
    let index = 0;

    const typeInterval = setInterval(() => {
        if (index < originalText.length) {
            codeWindow.textContent += originalText[index];
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, 30);
}

// Trigger typing animation when code window is visible
const codeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(typeCode, 500);
            codeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const codeWindow = document.querySelector('.code-window');
if (codeWindow) {
    codeObserver.observe(codeWindow);
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            showFormStatus('// Error: All fields required', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormStatus('// Error: Invalid email format', 'error');
            return;
        }

        // Construct mailto link with form data
        const subject = encodeURIComponent(`Message from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`
        );

        const mailtoLink = `mailto:mandi@mandimay.org?subject=${subject}&body=${body}`;

        // Open default mail app
        window.location.href = mailtoLink;

        // Show success message and reset form
        showFormStatus('// Success: Opening mail client...', 'success');
        setTimeout(() => {
            contactForm.reset();
        }, 1000);
    });
}

function showFormStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';

    // Hide status after 5 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 5000);
}

// ============================================
// GLITCH EFFECT ON HOVER FOR BOOK COVERS
// ============================================

document.querySelectorAll('.cover-glitch').forEach(element => {
    element.addEventListener('mouseenter', function() {
        const original = this.textContent;
        let iterations = 0;
        const maxIterations = 10;

        const glitchInterval = setInterval(() => {
            this.textContent = original
                .split('')
                .map((char, index) => {
                    if (index < iterations) {
                        return original[index];
                    }
                    return matrixChars[Math.floor(Math.random() * matrixChars.length)];
                })
                .join('');

            if (iterations >= original.length) {
                clearInterval(glitchInterval);
                this.textContent = original;
            }

            iterations += 1 / 3;
        }, 50);
    });
});

// ============================================
// CURSOR TRAIL EFFECT (SUBTLE)
// ============================================

let cursorTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });

    // Keep trail length limited
    if (cursorTrail.length > maxTrailLength) {
        cursorTrail.shift();
    }
});

// Clean up old trail points
setInterval(() => {
    const now = Date.now();
    cursorTrail = cursorTrail.filter(point => now - point.time < 1000);
}, 100);

// ============================================
// CONSOLE EASTER EGG
// ============================================

console.log('%c System.initialize() ', 'background: #00EA64; color: #0a0a0a; font-size: 16px; padding: 8px; font-family: monospace;');
console.log('%c Reality.version = "1.0.0" ', 'color: #00EA64; font-size: 14px; font-family: monospace;');
console.log('%c // Welcome to the code... ', 'color: #8b949e; font-size: 12px; font-family: monospace;');
console.log('%c // The universe is listening. ', 'color: #8b949e; font-size: 12px; font-family: monospace;');

// ============================================
// KONAMI CODE EASTER EGG
// ============================================

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiPosition = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiPosition]) {
        konamiPosition++;
        if (konamiPosition === konamiCode.length) {
            activateKonamiCode();
            konamiPosition = 0;
        }
    } else {
        konamiPosition = 0;
    }
});

function activateKonamiCode() {
    // Easter egg: Make the entire page briefly glitch
    document.body.style.animation = 'glitch 0.3s linear';

    // Show console message
    console.log('%c >> CODE UNLOCKED << ', 'background: #00EA64; color: #0a0a0a; font-size: 20px; padding: 10px; font-family: monospace; font-weight: bold;');
    console.log('%c Cheat code activated: Reality.debug = true ', 'color: #00EA64; font-size: 14px; font-family: monospace;');

    // Visual effect
    const originalBg = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#00EA64';
    setTimeout(() => {
        document.body.style.backgroundColor = originalBg;
        document.body.style.animation = '';
    }, 300);
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Pause matrix animation when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Page is hidden, could pause animations here
    } else {
        // Page is visible again
    }
});

// ============================================
// INITIALIZATION
// ============================================

window.addEventListener('load', () => {
    console.log('%c [✓] Website loaded successfully ', 'color: #00EA64; font-family: monospace;');
    console.log('%c [✓] Matrix initialized ', 'color: #00EA64; font-family: monospace;');
    console.log('%c [✓] All systems operational ', 'color: #00EA64; font-family: monospace;');
});
