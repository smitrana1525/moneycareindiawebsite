document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#inquiryForm');
    const inputs = form.querySelectorAll('input[required], textarea[required]');

    // Real-time validation on input
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (input.checkValidity()) {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            } else {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
            }
        });
    });

    // Final validation on submit
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        let allValid = true;
        inputs.forEach(input => {
            if (!input.checkValidity()) {
                input.classList.remove('is-valid');
                input.classList.add('is-invalid');
                allValid = false;
            } else {
                input.classList.remove('is-invalid');
                input.classList.add('is-valid');
            }
        });

        if (allValid) {
            alert('Thank you for your inquiry! We will get back to you soon.');
            form.reset();
            inputs.forEach(input => input.classList.remove('is-valid'));
        } 
    });
});
