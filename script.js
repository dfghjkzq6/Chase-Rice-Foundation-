/**
 * Chase Rice Foundation - Refactored JavaScript
 * High-fidelity interactivity inspired by Radix UI & shadcn/ui
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons (if not already handled in HTML)
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // --- Navigation & Smooth Scrolling ---
    const setupNavigation = () => {
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navHeight = document.querySelector('nav').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // --- Form Handling with Radix-style Feedback ---
    const setupContactForm = () => {
        const form = document.getElementById('contact-form');
        const successMessage = document.getElementById('form-success');
        
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading state on button
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
            `;

            // Simulate API call
            try {
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                console.log('Form Submission:', data);

                // Artificial delay for "snappy" but realistic feel
                await new Promise(resolve => setTimeout(resolve, 1200));

                // Success Transition
                form.classList.add('hidden');
                successMessage.classList.remove('hidden');
                successMessage.classList.add('animate-scale-in');
                
            } catch (error) {
                console.error('Submission error:', error);
                alert('There was an error sending your message. Please try again.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });
    };

    // Global reset function for the success message
    window.resetForm = () => {
        const form = document.getElementById('contact-form');
        const successMessage = document.getElementById('form-success');
        if (form && successMessage) {
            form.reset();
            successMessage.classList.add('hidden');
            form.classList.remove('hidden');
        }
    };

    // --- Intersection Observer for Reveal Animations ---
    const setupRevealAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Apply to cards and section headers
        const elementsToReveal = document.querySelectorAll('#program .group, #about img, #gallery .group');
        elementsToReveal.forEach(el => {
            el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-8');
            revealObserver.observe(el);
        });
    };

    // --- Navbar Scroll Effect ---
    const setupNavbarScroll = () => {
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('border-b', 'shadow-sm');
            } else {
                nav.classList.remove('shadow-sm');
            }
        });
    };

    // Initialize all components
    setupNavigation();
    setupContactForm();
    setupRevealAnimations();
    setupNavbarScroll();
});
