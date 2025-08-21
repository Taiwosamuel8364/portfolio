// Portfolio Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // Theme Toggle Functionality
    initializeThemeToggle();
    
    // Smooth scrolling for anchor links
    initializeSmoothScrolling();
    
    // Contact form enhancements
    initializeContactForm();
    
    // Project filtering
    initializeProjectFiltering();
    
    // Navbar scroll effect
    initializeNavbarScrollEffect();
    
    // Loading animations
    initializeLoadingAnimations();
    
    // Initialize tooltips and popovers
    initializeBootstrapComponents();
});

// Theme Toggle Functions
function initializeThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    setTheme(savedTheme);
    
    // Add event listener for theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    function toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('portfolio-theme', newTheme);
    }
    
    function setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        
        // Update theme toggle button icon
        if (themeToggle) {
            themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
        }
        
        // Apply theme to body and document
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-bs-theme');
        }
    }
}

// Smooth Scrolling
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form Enhancements
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Add form validation
        contactForm.addEventListener('submit', function(e) {
            if (!validateContactForm()) {
                e.preventDefault();
            } else {
                // Show loading state
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<span class="loading me-2"></span>Sending...';
                submitBtn.disabled = true;
                
                // Note: Form will submit normally, this is just for UX
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1000);
            }
        });
        
        // Real-time validation
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                // Clear validation state when user starts typing
                this.classList.remove('is-valid', 'is-invalid');
                const feedback = this.parentNode.querySelector('.invalid-feedback');
                if (feedback) feedback.remove();
            });
        });
    }
    
    function validateContactForm() {
        const form = document.getElementById('contactForm');
        const name = form.querySelector('#name');
        const email = form.querySelector('#email');
        const message = form.querySelector('#message');
        
        let isValid = true;
        
        // Validate name
        if (!validateField(name)) isValid = false;
        
        // Validate email
        if (!validateField(email)) isValid = false;
        
        // Validate message
        if (!validateField(message)) isValid = false;
        
        return isValid;
    }
    
    function validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let message = '';
        
        // Remove existing feedback
        const existingFeedback = field.parentNode.querySelector('.invalid-feedback');
        if (existingFeedback) existingFeedback.remove();
        
        // Validate based on field type
        switch (field.type) {
            case 'text':
                if (field.id === 'name' && value.length < 2) {
                    isValid = false;
                    message = 'Name must be at least 2 characters long.';
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    message = 'Please enter a valid email address.';
                }
                break;
            default:
                if (field.tagName === 'TEXTAREA' && value.length < 10) {
                    isValid = false;
                    message = 'Message must be at least 10 characters long.';
                }
        }
        
        // Apply validation classes
        if (isValid) {
            field.classList.remove('is-invalid');
            field.classList.add('is-valid');
        } else {
            field.classList.remove('is-valid');
            field.classList.add('is-invalid');
            
            // Add error message
            const feedback = document.createElement('div');
            feedback.className = 'invalid-feedback';
            feedback.textContent = message;
            field.parentNode.appendChild(feedback);
        }
        
        return isValid;
    }
}

// Project Filtering (for projects page)
function initializeProjectFiltering() {
    const filterButtons = document.querySelectorAll('.project-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            filterProjects(category);
        });
    });
    
    function filterProjects(category) {
        const projects = document.querySelectorAll('.project-card');
        
        projects.forEach(project => {
            const projectCategory = project.getAttribute('data-category');
            
            if (category === 'all' || projectCategory === category) {
                project.style.display = 'block';
                project.classList.add('fade-in');
            } else {
                project.style.display = 'none';
                project.classList.remove('fade-in');
            }
        });
    }
}

// Navbar Scroll Effect
function initializeNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(33, 37, 41, 0.98)';
                navbar.style.backdropFilter = 'blur(15px)';
            } else {
                navbar.style.background = 'rgba(33, 37, 41, 0.95)';
                navbar.style.backdropFilter = 'blur(10px)';
            }
        });
    }
}

// Loading Animations
function initializeLoadingAnimations() {
    // Add loading animation to external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', function() {
            // Add a small loading indicator
            const icon = this.querySelector('i');
            if (icon && !icon.classList.contains('fa-external-link-alt')) {
                const originalClass = icon.className;
                icon.className = 'fas fa-spinner fa-spin';
                
                setTimeout(() => {
                    icon.className = originalClass;
                }, 1000);
            }
        });
    });
}

// Bootstrap Components Initialization
function initializeBootstrapComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// Utility Functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
document.addEventListener('scroll', debounce(function() {
    const scrollButton = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
        if (scrollButton) {
            scrollButton.style.display = 'block';
            scrollButton.classList.add('fade-in');
        }
    } else {
        if (scrollButton) {
            scrollButton.style.display = 'none';
            scrollButton.classList.remove('fade-in');
        }
    }
}, 100));

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show success message
        showToast('Copied to clipboard!', 'success');
    }, function() {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Copied to clipboard!', 'success');
    });
}

// Toast notification system
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `alert alert-${type} toast-notification`;
    toast.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check' : 'info'}-circle me-2"></i>
        ${message}
        <button type="button" class="btn-close ms-auto" onclick="this.parentElement.remove()"></button>
    `;
    
    // Add toast styles
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }
    }, 3000);
}

// Performance optimization - Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// Error handling for failed resource loads
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = '/images/placeholder.jpg';
    }
}, true);

// Analytics event tracking (if needed)
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}
