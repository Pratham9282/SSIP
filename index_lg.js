function redirectTo(role) {
    if (role === 'user') {
        window.location.href = "main.html";
    } else if (role === 'admin') {
        // Add a confirmation prompt for security
        const confirmAdmin = confirm("Are you sure you want to access the Admin Panel?");
        if (confirmAdmin) {
            window.location.href = "login.html";    
        }
    }
}
