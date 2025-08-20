// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add parallax effect to hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe feature blocks
document.querySelectorAll('.feature-block').forEach(el => {
    observer.observe(el);
});

// Add CSS for animation
const style = document.createElement('style');
style.textContent = `
    .feature-block {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }
    
    .feature-block.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// CTA button click handlers
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Log click event (replace with actual download/signup logic)
        console.log('CTA clicked:', this.textContent);
        
        // Show alert for demo purposes
        if (this.textContent.includes('Download')) {
            alert('Redirecting to app store...');
        } else {
            alert('Starting your kanji battle journey!');
        }
    });
});

// Add ripple effect styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .cta-button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 26, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
    } else {
        navbar.style.background = 'linear-gradient(180deg, rgba(10,14,26,0.9) 0%, transparent 100%)';
        navbar.style.backdropFilter = 'none';
        navbar.style.borderBottom = 'none';
    }
});

// Add hover effect to FAQ items
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Countdown timer animation for hero stats
function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        
        if (element.textContent.includes('+')) {
            element.textContent = Math.floor(current).toLocaleString() + '+';
        } else if (element.textContent.includes('min')) {
            element.textContent = '2-3 min';
        } else {
            element.textContent = Math.floor(current).toLocaleString() + '+';
        }
    }, 16);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                if (stat.textContent.includes('50,000')) {
                    animateValue(stat, 0, 50000, 2000);
                } else if (stat.textContent.includes('2,000')) {
                    animateValue(stat, 0, 2000, 2000);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Mobile menu toggle (for future implementation)
function createMobileMenu() {
    const navbar = document.querySelector('.navbar .container');
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-toggle';
    menuButton.innerHTML = '☰';
    menuButton.style.display = 'none';
    
    // Show on mobile
    if (window.innerWidth <= 768) {
        menuButton.style.display = 'block';
        menuButton.style.position = 'absolute';
        menuButton.style.right = '20px';
        menuButton.style.top = '50%';
        menuButton.style.transform = 'translateY(-50%)';
        menuButton.style.background = 'none';
        menuButton.style.border = 'none';
        menuButton.style.color = 'white';
        menuButton.style.fontSize = '28px';
        menuButton.style.cursor = 'pointer';
        navbar.appendChild(menuButton);
    }
    
    menuButton.addEventListener('click', () => {
        alert('Mobile menu would open here');
    });
}

// Initialize mobile menu
createMobileMenu();
window.addEventListener('resize', createMobileMenu);

// Add floating animation to kanji characters
function createFloatingKanji() {
    const kanjiChars = ['戦', '勇', '力', '技', '道', '心', '龍', '虎', '拳', '勝'];
    const heroSection = document.querySelector('.hero');
    
    if (!heroSection) return;
    
    for (let i = 0; i < 5; i++) {
        const kanji = document.createElement('div');
        kanji.className = 'floating-kanji';
        kanji.textContent = kanjiChars[Math.floor(Math.random() * kanjiChars.length)];
        kanji.style.cssText = `
            position: absolute;
            font-size: ${20 + Math.random() * 30}px;
            opacity: 0.1;
            color: var(--accent-yellow);
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-kanji ${10 + Math.random() * 20}s infinite linear;
            pointer-events: none;
            z-index: 1;
        `;
        heroSection.appendChild(kanji);
    }
}

// Add floating kanji animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float-kanji {
        from {
            transform: translateY(100vh) rotate(0deg);
        }
        to {
            transform: translateY(-100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(floatStyle);

// Initialize floating kanji
createFloatingKanji();

// Console welcome message
console.log('%c⚔️ KANJI BATTLER ⚔️', 'font-size: 30px; font-weight: bold; color: #FFD93D;');
console.log('%cReady to master kanji through epic battles?', 'font-size: 16px; color: #3B7FFF;');
console.log('%cJoin 50,000+ fighters at kanjibattler.com', 'font-size: 14px; color: #B8BCC8;');