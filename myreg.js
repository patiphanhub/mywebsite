document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    // Save the new user credentials to local storage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    // Redirect to login page
    window.location.href = 'login.html';
});