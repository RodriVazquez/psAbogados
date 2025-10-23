const form = document.querySelector('form#contact-form');
if (form) {
    form.addEventListener('submit', e => {
        // Allow default submit to proceed to action (formsubmit.co)
        // But disable the submit button to prevent double submits
        const btn = form.querySelector('button[type="submit"]');
        if (btn) {
            btn.disabled = true;
            btn.classList.add('is-submitting');
        }
        // Optionally you can show a simple message or let formsubmit handle redirect
        // If you need to do AJAX instead, replace this behavior accordingly.
    });
}

