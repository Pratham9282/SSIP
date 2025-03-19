// Show Welcome Popup
window.onload = function() {
    showPopup("👋 Welcome! Please select your organization type to proceed.");
};

// Add OnClick Events to Buttons
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('company-btn').addEventListener('click', () => redirectToLogin('company'));
    document.getElementById('school-btn').addEventListener('click', () => redirectToLogin('school'));
    document.getElementById('college-btn').addEventListener('click', () => redirectToLogin('college'));
    document.getElementById('hospital-btn').addEventListener('click', () => redirectToLogin('hospital'));
});

// Function to Redirect to Specific Login Pages
function redirectToLogin(type) {
    const link = `${type}_login.html`; // Example: company_login.html
    window.location.href = link;
}

// Function for Welcome Popup
function showPopup(message) {
    const popup = document.createElement('div');
    popup.className = 'welcome-popup';
    popup.textContent = message;

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add('fade-out');  // Smooth fade-out effect
        setTimeout(() => popup.remove(), 1000);  // Remove popup after fading
    }, 3000);  // Show popup for 3 seconds
}
