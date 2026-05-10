// Admin Authentication
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password123';

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('adminLoggedIn') === 'true';
}

// Login handler
function handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        localStorage.setItem('adminLoggedIn', 'true');
        window.location.href = '/dashboard.html';
    } else {
        errorMsg.textContent = 'Invalid username or password';
        errorMsg.classList.add('show');
    }
}

// Logout handler
function handleLogout() {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = '/admin.html';
}

// Check login on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    
    // If on dashboard and not logged in, redirect to login
    if (currentPage.includes('dashboard') && !isLoggedIn()) {
        window.location.href = '/admin.html';
    }
    
    // If on login page and already logged in, redirect to dashboard
    if (currentPage.includes('admin.html') && isLoggedIn()) {
        window.location.href = '/dashboard.html';
    }
    
    // Setup login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    // Setup logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            handleLogout();
        });
    }
});
