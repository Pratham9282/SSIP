
// Welcome Popup
window.onload = function () {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = "👋 Welcome to the AI & GPS Attendance System!";
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('fade-out');
        setTimeout(() => popup.remove(), 1000);
    }, 3000);
}

document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sample user data for testing
    const users = [
        { email: 'user1@example.com', password: 'password123', role: 'user' },
        { email: 'user2@example.com', password: 'mypassword', role: 'user' },
        { email: 'admin@company.com', password: 'admin123', role: 'admin' }
    ];

    // Check if entered credentials match any user in the data
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful! Welcome, ' + email);
        if (user.role === 'admin') {
            window.location.href = 'admin_dashboard.html';
        } else {
            window.location.href = 'select.html';
        }
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
