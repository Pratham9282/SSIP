// Function to create a popup
function showPopup(message, type = 'success') {
    const popup = document.createElement('div');
    popup.className = `popup ${type}`;
    popup.innerHTML = `<span>${message}</span> <button onclick="this.parentElement.remove()">✖️</button>`;
    document.body.appendChild(popup);
    setTimeout(() => popup.classList.add('show'), 100);
    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 300);
    }, 3000);
}

// Sample user data (simulating a database)
const users = [
    { email: 'employee1@company.com', password: 'emp123', role: 'employee' },
    { email: 'admin@company.com', password: 'admin123', role: 'admin' }
];

// Save sample users in localStorage (for simulation purposes)
localStorage.setItem('registeredUsers', JSON.stringify(users));

// Admin Login Function
function loginAdmin() {
    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginPassword = document.getElementById('loginPassword').value.trim();

    if (!loginEmail || !loginPassword) {
        showPopup("All fields are required.", 'error');
        return;
    }

    // Retrieve registered users
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = registeredUsers.find(user => user.email === loginEmail);

    if (!user) {
        showPopup("User not found. Please register first.", 'error');
        return;
    }

    if (user.password !== loginPassword) {
        showPopup("Incorrect password. Try again.", 'error');
        document.getElementById('loginPassword').value = ''; 
        return;
    }

    if (user.role !== 'admin') {
        showPopup("Access denied! Only admins can log in.", 'error');
        return;
    }

    showPopup("Login successful! Redirecting...", 'success');
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));

    setTimeout(() => {
        window.location.href = "admin.html";
    }, 2000);
}

// Event Listener for Login Button
document.getElementById('loginBtn').addEventListener('click', loginAdmin);

// Optional: Add 'Enter' key support
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        loginAdmin();
    }
});

// Function to check if the logged-in user is an admin
function checkAdmin() {
    const loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

    if (!loggedInUser || loggedInUser.role !== 'admin') {
        showPopup("Unauthorized access! Redirecting...", 'error');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
}
