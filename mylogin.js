document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve stored credentials from local storage
    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    // Validate credentials
    if (username === storedUsername && password === storedPassword) {
        // Redirect to shopping page if credentials are valid
        window.location.href = 'shopping.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});