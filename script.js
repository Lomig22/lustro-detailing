// ========================================
// NAVIGATION
// ========================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll effect sur la navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Menu hamburger mobile
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Fermeture du menu mobile au clic sur un lien
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Active link selon la section visible
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ========================================
// ANIMATIONS AU SCROLL
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer tous les éléments à animer
const animateElements = document.querySelectorAll(
    '.prestation-card, .galerie-item, .avantage-card, .stat-item, .contact-item'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// FORMULAIRE DE CONTACT
// ========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupération des données du formulaire
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
    console.log('Formulaire soumis:', formData);
    
    // Affichage d'un message de confirmation
    showNotification('Votre message a été envoyé avec succès ! Nous vous recontacterons rapidement.', 'success');
    
    // Réinitialisation du formulaire
    contactForm.reset();
});

// ========================================
// BOUTON DE RÉSERVATION
// ========================================

const bookingBtn = document.getElementById('bookingBtn');

bookingBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Ici, vous pouvez intégrer votre système de réservation
    // Par exemple, redirection vers SumUp Bookings ou autre plateforme
    
    showNotification('Redirection vers le système de réservation...', 'info');
    
    // Exemple de redirection (à personnaliser)
    // window.location.href = 'https://votre-lien-sumup-bookings.com';
    
    // Ou ouverture d'une modal de réservation
    // openBookingModal();
});

// ========================================
// SYSTÈME DE NOTIFICATIONS
// ========================================

function showNotification(message, type = 'info') {
    // Suppression des notifications existantes
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Création de la notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">
                ${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
            </span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Ajout au DOM
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Suppression automatique après 5 secondes
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Styles pour les notifications (ajoutés dynamiquement)
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    .notification {
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 10000;
        background: #1a1a1a;
        border: 1px solid #C9A24D;
        border-radius: 8px;
        padding: 20px;
        min-width: 300px;
        max-width: 500px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        transform: translateX(120%);
        transition: transform 0.3s ease;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .notification-icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        flex-shrink: 0;
    }
    
    .notification-success .notification-icon {
        background: #4CAF50;
        color: white;
    }
    
    .notification-error .notification-icon {
        background: #f44336;
        color: white;
    }
    
    .notification-info .notification-icon {
        background: #C9A24D;
        color: #0B0B0B;
    }
    
    .notification-message {
        flex: 1;
        color: #E5E5E5;
        font-size: 0.95rem;
        line-height: 1.4;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: #999999;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: color 0.3s ease;
    }
    
    .notification-close:hover {
        color: #C9A24D;
    }
    
    @media (max-width: 768px) {
        .notification {
            right: 10px;
            left: 10px;
            min-width: auto;
        }
    }
`;
document.head.appendChild(notificationStyles);

// ========================================
// SMOOTH SCROLL AVEC OFFSET POUR LA NAVBAR
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// PARALLAX EFFECT SUR LE HERO
// ========================================

const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
    }
});

// ========================================
// LAZY LOADING DES IMAGES
// ========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// COMPTEUR ANIMÉ POUR LES STATS
// ========================================

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Observer pour les stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumber = entry.target.querySelector('.stat-number');
            if (statNumber) {
                const text = statNumber.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[0-9]/g, '');
                statNumber.dataset.suffix = suffix;
                statNumber.textContent = '0' + suffix;
                animateCounter(statNumber, number);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-item').forEach(stat => {
    statsObserver.observe(stat);
});

// ========================================
// GALERIE - LIGHTBOX SIMPLE
// ========================================

const galerieItems = document.querySelectorAll('.galerie-item');

galerieItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            openLightbox(img.src, img.alt);
        }
    });
});

function openLightbox(src, alt) {
    // Création de la lightbox
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close">&times;</button>
            <img src="${src}" alt="${alt}">
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    // Animation d'entrée
    setTimeout(() => {
        lightbox.classList.add('active');
    }, 10);
    
    // Fermeture
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => closeLightbox(lightbox));
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox(lightbox);
        }
    });
    
    // Fermeture avec Escape
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeLightbox(lightbox);
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

function closeLightbox(lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        lightbox.remove();
    }, 300);
}

// Styles pour la lightbox
const lightboxStyles = document.createElement('style');
lightboxStyles.textContent = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(11, 11, 11, 0.95);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        padding: 20px;
    }
    
    .lightbox.active {
        opacity: 1;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        animation: zoomIn 0.3s ease;
    }
    
    @keyframes zoomIn {
        from {
            transform: scale(0.8);
        }
        to {
            transform: scale(1);
        }
    }
    
    .lightbox-content img {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 8px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
    }
    
    .lightbox-close {
        position: absolute;
        top: -50px;
        right: 0;
        background: none;
        border: none;
        color: #C9A24D;
        font-size: 3rem;
        cursor: pointer;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
    }
    
    .lightbox-close:hover {
        transform: rotate(90deg);
    }
    
    @media (max-width: 768px) {
        .lightbox-close {
            top: 10px;
            right: 10px;
            background: rgba(11, 11, 11, 0.8);
            border-radius: 50%;
            width: 40px;
            height: 40px;
            font-size: 2rem;
        }
    }
`;
document.head.appendChild(lightboxStyles);

// ========================================
// PERFORMANCE - DEBOUNCE POUR LE SCROLL
// ========================================

function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Application du debounce sur les événements de scroll
const debouncedHighlight = debounce(highlightNavLink, 10);
window.removeEventListener('scroll', highlightNavLink);
window.addEventListener('scroll', debouncedHighlight);

// ========================================
// CONSOLE MESSAGE
// ========================================

console.log(
    '%c🚗 Lustro Detailing',
    'font-size: 24px; font-weight: bold; color: #C9A24D; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);'
);
console.log(
    '%cSite développé avec passion pour l\'excellence automobile',
    'font-size: 14px; color: #999999;'
);
