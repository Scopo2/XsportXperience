// Show login modal when login links are clicked
document.querySelectorAll('[href="#login"], .login-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.login-section').style.display = 'flex';
    });
});

// Close login modal
document.querySelector('.close-login').addEventListener('click', function() {
    document.querySelector('.login-section').style.display = 'none';
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (replace with actual auth later)
    if (username && password) {
        // Redirect to the welcome page after successful login
        window.location.href = 'welcome.html'; // Change this to your actual welcome page
    } else {
        alert('Please enter both username and password');
    }
});

// Close modal when clicking outside
document.querySelector('.login-section').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});