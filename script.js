document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('contact-submit');
    const successMessage = document.getElementById('form-success');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show loading
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Sending...`;

        try {
            const formData = new FormData(form);
            await fetch("https://formspree.io/f/mwvnbryz", {
                method: "POST",
                body: formData,
                headers: { "Accept": "application/json" }
            });

            // Fake delay for animation
            await new Promise(resolve => setTimeout(resolve, 1200));

            // Show success message
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');

        } catch (error) {
            console.error(error);
            alert("There was an error sending your message. Try again.");
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });
});
