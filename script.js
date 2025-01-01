document.addEventListener('DOMContentLoaded', function() {
    // Modal elements
    const modal = document.getElementById('signupModal');
    const signUpBtn = document.getElementById('signUpBtn');
    const closeBtn = document.getElementById('closeBtn');
    const submitBtn = document.getElementById('signupForm');
    
    // Open the modal when "Sign Up" button is clicked
    signUpBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    // Close the modal when the "X" button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    submitBtn.addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Process form data here (you can send it to a backend or handle it further)
        alert('Account created successfully!');

        // Close the modal after form submission
        modal.style.display = 'none';

        // Reset the form fields
        submitBtn.reset();
    });
});
