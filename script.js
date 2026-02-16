/**
 * Chase Rice Foundation Website - JavaScript
 * Handles form submissions, navigation, and interactions
 */

// ============================================
// FORM HANDLING
// ============================================

/**
 * Handle form submission
 * @param {Event} event - The form submission event
 */
async function handleFormSubmit(event) {
    event.preventDefault();

    // Get form data
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);

    // Validate form
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    const phone = formData.get('phone').trim();
    const donation = formData.get('donation');

    // Validation checks
    if (!name) {
        showError('Please enter your name');
        return;
    }

    if (!email || !isValidEmail(email)) {
        showError('Please enter a valid email address');
        return;
    }

    if (!message || message.length < 10) {
        showError('Please enter a message with at least 10 characters');
        return;
    }

    // Prepare data for submission
    const submissionData = {
        name,
        email,
        phone,
        message,
        donationInterest: donation,
        timestamp: new Date().toISOString()
    };

    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    try {
        // Simulate API call (in production, this would send to your backend)
        // For now, we'll just save to localStorage and show success
        await simulateFormSubmission(submissionData);

        // Show success message
        showFormSuccess();

        // Reset form
        form.reset();

        // Scroll to success message
        setTimeout(() => {
            const successMessage = document.getElementById('form-success');
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);

    } catch (error) {
        showError('An error occurred. Please try again later.');
        console.error('Form submission error:', error);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
    }
}

/**
 * Simulate form submission (in production, connect to your backend API)
 * @param {Object} data - The form data to submit
 */
function simulateFormSubmission(data) {
    return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
            // Save to localStorage for demonstration
            const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
            submissions.push(data);
            localStorage.setItem('formSubmissions', JSON.stringify(submissions));

            // Log submission (in production, this would be sent to your backend)
            console.log('Form submission received:', data);

            resolve();
        }, 1000);
    });
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Show error message
 * @param {string} message - Error message to display
 */
function showError(message) {
    // Create error toast
    const toast = document.createElement('div');
    toast.className = 'error-toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #EF4444;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(toast);

    // Remove after 5 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

/**
 * Show form success message
 */
function showFormSuccess() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');

    form.style.display = 'none';
    successMessage.style.display = 'block';

    // Reset after 10 seconds
    setTimeout(() => {
        form.style.display = 'block';
        successMessage.style.display = 'none';
    }, 10000);
}

// ============================================
// NAVIGATION
// ============================================

/**
 * Scroll to a specific section
 * @param {string} sectionId - The ID of the section to scroll to
 */
function scrollToSection(sectionId) {
    if (sectionId === 'contact') {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

/**
 * Scroll to top of page
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// ANIMATIONS & INTERACTIONS
// ============================================

/**
 * Add scroll animations to elements
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.card, .gallery-item, .info-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Add smooth hover effects to interactive elements
 */
function initHoverEffects() {
    const interactiveElements = document.querySelectorAll('.btn, .card, .gallery-item, .nav-link');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
}

/**
 * Handle navbar scroll effect
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }

        lastScrollTop = scrollTop;
    });
}

/**
 * Add keyboard navigation support
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Escape key to close any modals/popups
        if (e.key === 'Escape') {
            const successMessage = document.getElementById('form-success');
            if (successMessage && successMessage.style.display !== 'none') {
                successMessage.style.display = 'none';
                document.getElementById('contact-form').style.display = 'block';
            }
        }

        // Ctrl/Cmd + Enter to submit form
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            const form = document.getElementById('contact-form');
            if (form && form.style.display !== 'none') {
                form.dispatchEvent(new Event('submit'));
            }
        }
    });
}

// ============================================
// FORM ENHANCEMENTS
// ============================================

/**
 * Add real-time form validation
 */
function initFormValidation() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');

    // Name validation
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            if (this.value.trim().length < 2) {
                this.style.borderColor = '#EF4444';
            } else {
                this.style.borderColor = '#E5E7EB';
            }
        });
    }

    // Email validation
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            if (!isValidEmail(this.value)) {
                this.style.borderColor = '#EF4444';
            } else {
                this.style.borderColor = '#E5E7EB';
            }
        });
    }

    // Message validation
    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            if (this.value.trim().length < 10) {
                this.style.borderColor = '#EF4444';
            } else {
                this.style.borderColor = '#E5E7EB';
            }
        });
    }
}

/**
 * Add character counter to message field
 */
function initCharacterCounter() {
    const messageInput = document.querySelector('#message');
    if (!messageInput) return;

    const counter = document.createElement('div');
    counter.style.cssText = `
        font-size: 0.85rem;
        color: #9CA3AF;
        margin-top: 5px;
        text-align: right;
    `;

    messageInput.parentElement.appendChild(counter);

    messageInput.addEventListener('input', function() {
        const count = this.value.length;
        counter.textContent = `${count} characters`;
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get all form submissions from localStorage
 * @returns {Array} - Array of form submissions
 */
function getFormSubmissions() {
    return JSON.parse(localStorage.getItem('formSubmissions') || '[]');
}

/**
 * Clear all form submissions from localStorage
 */
function clearFormSubmissions() {
    localStorage.removeItem('formSubmissions');
}

/**
 * Log form submissions to console
 */
function logFormSubmissions() {
    const submissions = getFormSubmissions();
    console.log('Form Submissions:', submissions);
    return submissions;
}

// ============================================
// CSS ANIMATIONS
// ============================================

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize all features when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Chase Rice Foundation Website Initialized');

    // Initialize all features
    initScrollAnimations();
    initHoverEffects();
    initNavbarScroll();
    initKeyboardNavigation();
    initFormValidation();
    initCharacterCounter();

    // Add event listeners to navigation buttons
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
        });
    });

    // Log available commands
    console.log('Available commands:');
    console.log('- logFormSubmissions() : View all form submissions');
    console.log('- clearFormSubmissions() : Clear all submissions');
    console.log('- scrollToSection(sectionId) : Scroll to a section');
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

/**
 * Lazy load images (for future use)
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ============================================
// EXPORT FOR TESTING
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        handleFormSubmit,
        isValidEmail,
        showError,
        scrollToSection,
        getFormSubmissions,
        clearFormSubmissions
    };
}
