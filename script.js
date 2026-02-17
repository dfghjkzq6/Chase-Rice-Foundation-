const setupContactForm = () => {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('form-success');

    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = "Sending...";

        try {
            const formData = new FormData(form);

            const response = await fetch("https://formspree.io/f/mwvnbryz", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            // Success UI
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');
            form.reset();

        } catch (error) {
            console.error("Submission error:", error);
            alert("There was an error sending your message. Please try again.");
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
};
