// Redirect logic for User and Admin
function redirectTo(role) {
    if (role === 'user') {
        window.location.href = 'comp_user.html';
    } else if (role === 'admin') {
        window.location.href = 'comp_admin.html';
    }
}

// Welcome Popup
window.onload = function () {
    const popup = document.createElement('div');
    popup.className = 'popup';
    popup.textContent = "👋 Welcome! Please choose your role.";
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('fade-out');
        setTimeout(() => popup.remove(), 1000);
    }, 3000);
}
// Redirect logic for User and Admin
document.getElementById('userBtn').addEventListener('click', function () {
    window.location.href = 'user_login.html';
});

document.getElementById('adminBtn').addEventListener('click', function () {
    window.location.href = 'admin_login.html';
});
