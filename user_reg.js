// Function to create a popup
function showPopup(message, type = 'success') {
    const popup = document.createElement('div');
    popup.className = `popup ${type}`;
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('show');
    }, 100);

    setTimeout(() => {
        popup.classList.remove('show');
        setTimeout(() => popup.remove(), 300);
    }, 3000);
}

// Registration Function
function registerUser() {
    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();

    if (!username || !password || !confirmPassword) {
        showPopup("All fields are required.", 'error');
        return;
    }

    if (password !== confirmPassword) {
        showPopup("Passwords do not match.", 'error');
        return;
    }

    // Example: Simulated database storage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const isUserExists = registeredUsers.some(user => user.username === username);

    if (isUserExists) {
        showPopup("Username already exists.", 'error');
        return;
    }

    registeredUsers.push({ username, password });
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    showPopup("Registration successful! Redirecting to login...", 'success');

    setTimeout(() => {
        window.location.href = "user.html";
    }, 2000);
}
