// Sample user data (simulating a database)
const users = [
    { email: 'employee1@company.com', password: 'emp123', role: 'employee' },
    { email: 'admin@company.com', password: 'admin123', role: 'admin' }
];

// ================== LOGIN FUNCTION ==================
document.getElementById('loginBtn').addEventListener('click', function () {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const loginError = document.getElementById('loginError');

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`✅ Welcome, ${email}!`);
        window.location.href = user.role === 'admin' ? 'admin.html' : 'main.html';
    } else {
        loginError.textContent = '❌ Invalid email or password. Please try again.';
    }
});

// ================== REGISTRATION FUNCTION ==================
document.getElementById('registerBtn').addEventListener('click', function () {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const registerError = document.getElementById('registerError');

    if (!name || !email || !password || !confirmPassword) {
        registerError.textContent = '❌ All fields are required.';
        return;
    }

    if (password !== confirmPassword) {
        registerError.textContent = '❌ Passwords do not match.';
        return;
    }

    if (users.some(user => user.email === email)) {
        registerError.textContent = '❌ Email is already registered.';
        return;
    }

    users.push({ email, password, role: 'employee' });
    alert(`✅ Registration successful! Welcome, ${name}.`);
    window.location.href = 'index.html';
});