// Application State
let authState = {
    currentForm: 'login',
    isLoading: false
};

// DOM Elements
const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginFormElement = document.getElementById('login-form-element');
const registerFormElement = document.getElementById('register-form-element');
const messageContainer = document.getElementById('message-container');

// Password strength elements
const passwordInput = document.getElementById('register-password');
const passwordStrengthFill = document.getElementById('password-strength-fill');
const passwordStrengthText = document.getElementById('password-strength-text');

// Utility Functions
function showMessage(message, type = 'info') {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    
    const icon = type === 'success' ? 'check-circle' : 
                 type === 'error' ? 'x-circle' : 'info';
    
    messageElement.innerHTML = `
        <i data-lucide="${icon}" class="w-5 h-5 mr-2"></i>
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="ml-auto">
            <i data-lucide="x" class="w-4 h-4"></i>
        </button>
    `;
    
    messageContainer.appendChild(messageElement);
    lucide.createIcons();
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageElement.parentElement) {
            messageElement.remove();
        }
    }, 5000);
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.nextElementSibling;
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.setAttribute('data-lucide', 'eye-off');
    } else {
        input.type = 'password';
        icon.setAttribute('data-lucide', 'eye');
    }
    
    lucide.createIcons();
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const score = [minLength, hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar]
        .reduce((acc, curr) => acc + (curr ? 1 : 0), 0);
    
    return {
        score,
        isValid: score >= 3,
        strength: score <= 1 ? 'weak' : 
                 score <= 2 ? 'fair' : 
                 score <= 3 ? 'good' : 'strong'
    };
}

function updatePasswordStrength(password) {
    const validation = validatePassword(password);
    
    passwordStrengthFill.className = `password-strength-fill ${validation.strength}`;
    
    const strengthTexts = {
        weak: 'Weak password',
        fair: 'Fair password',
        good: 'Good password',
        strong: 'Strong password'
    };
    
    passwordStrengthText.textContent = password ? strengthTexts[validation.strength] : 'Password strength';
    passwordStrengthText.className = `text-xs mt-1 ${
        validation.strength === 'weak' ? 'text-red-500' :
        validation.strength === 'fair' ? 'text-yellow-500' :
        validation.strength === 'good' ? 'text-blue-500' : 'text-green-500'
    }`;
}

function validateForm(formData, isLogin = true) {
    const errors = [];
    
    // Email validation
    if (!formData.email || !validateEmail(formData.email)) {
        errors.push('Please enter a valid email address');
    }
    
    // Password validation
    if (!formData.password || formData.password.length < 6) {
        errors.push('Password must be at least 6 characters long');
    }
    
    if (!isLogin) {
        // Registration specific validations
        if (!formData.firstName || formData.firstName.trim().length < 2) {
            errors.push('First name must be at least 2 characters long');
        }
        
        if (!formData.lastName || formData.lastName.trim().length < 2) {
            errors.push('Last name must be at least 2 characters long');
        }
        
        if (!formData.branch) {
            errors.push('Please select your engineering branch');
        }
        
        if (!formData.semester) {
            errors.push('Please select your current semester');
        }
        
        if (formData.password !== formData.confirmPassword) {
            errors.push('Passwords do not match');
        }
        
        const passwordValidation = validatePassword(formData.password);
        if (!passwordValidation.isValid) {
            errors.push('Password must contain at least 8 characters with uppercase, lowercase, and numbers');
        }
        
        if (!formData.terms) {
            errors.push('Please accept the terms and conditions');
        }
    }
    
    return errors;
}

function setLoading(isLoading) {
    authState.isLoading = isLoading;
    const forms = [loginFormElement, registerFormElement];
    const buttons = document.querySelectorAll('button[type="submit"]');
    
    forms.forEach(form => {
        if (isLoading) {
            form.classList.add('loading');
        } else {
            form.classList.remove('loading');
        }
    });
    
    buttons.forEach(button => {
        if (isLoading) {
            const originalText = button.textContent;
            button.innerHTML = `
                <span class="spinner mr-2"></span>
                Processing...
            `;
            button.disabled = true;
        } else {
            button.disabled = false;
            // Restore original text would need to be handled differently
        }
    });
}

// Tab Switching
function switchToLogin() {
    authState.currentForm = 'login';
    
    loginTab.classList.add('active');
    registerTab.classList.remove('active');
    
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
}

function switchToRegister() {
    authState.currentForm = 'register';
    
    registerTab.classList.add('active');
    loginTab.classList.remove('active');
    
    registerForm.classList.remove('hidden');
    loginForm.classList.add('hidden');
}

// Form Handlers
function handleLogin(formData) {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
        setLoading(false);
        
        // Mock successful login
        showMessage('Login successful! Welcome back to College Sahayak.', 'success');
        
        // In a real app, you would:
        // 1. Store authentication token
        // 2. Redirect to dashboard
        // 3. Update user state
        
        setTimeout(() => {
            // Redirect to home page or dashboard
            window.location.href = 'index.html';
        }, 1500);
        
    }, 2000);
}

function handleRegister(formData) {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
        setLoading(false);
        
        // Mock successful registration
        showMessage('Account created successfully! Welcome to College Sahayak.', 'success');
        
        // In a real app, you would:
        // 1. Create user account
        // 2. Send verification email
        // 3. Store authentication token
        // 4. Redirect to onboarding or dashboard
        
        setTimeout(() => {
            // Switch to login or redirect
            switchToLogin();
            showMessage('Please log in with your new account.', 'info');
        }, 1500);
        
    }, 2000);
}

// Social Login Handlers
function loginWithGoogle() {
    showMessage('Redirecting to Google authentication...', 'info');
    // In a real app, integrate with Google OAuth
    setTimeout(() => {
        showMessage('Google login successful!', 'success');
    }, 2000);
}

function loginWithGithub() {
    showMessage('Redirecting to GitHub authentication...', 'info');
    // In a real app, integrate with GitHub OAuth
    setTimeout(() => {
        showMessage('GitHub login successful!', 'success');
    }, 2000);
}

function loginWithFacebook() {
    showMessage('Redirecting to Facebook authentication...', 'info');
    // In a real app, integrate with Facebook OAuth
    setTimeout(() => {
        showMessage('Facebook login successful!', 'success');
    }, 2000);
}

function registerWithGoogle() {
    showMessage('Redirecting to Google registration...', 'info');
    setTimeout(() => {
        showMessage('Google registration successful!', 'success');
    }, 2000);
}

function registerWithGithub() {
    showMessage('Redirecting to GitHub registration...', 'info');
    setTimeout(() => {
        showMessage('GitHub registration successful!', 'success');
    }, 2000);
}

function registerWithFacebook() {
    showMessage('Redirecting to Facebook registration...', 'info');
    setTimeout(() => {
        showMessage('Facebook registration successful!', 'success');
    }, 2000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    loginTab.addEventListener('click', switchToLogin);
    registerTab.addEventListener('click', switchToRegister);
    
    // Password strength monitoring
    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            updatePasswordStrength(this.value);
        });
    }
    
    // Login form submission
    loginFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (authState.isLoading) return;
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        const errors = validateForm(data, true);
        
        if (errors.length > 0) {
            errors.forEach(error => showMessage(error, 'error'));
            return;
        }
        
        handleLogin(data);
    });
    
    // Register form submission
    registerFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (authState.isLoading) return;
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        data.terms = formData.has('terms');
        
        const errors = validateForm(data, false);
        
        if (errors.length > 0) {
            errors.forEach(error => showMessage(error, 'error'));
            return;
        }
        
        handleRegister(data);
    });
    
    // Real-time validation
    const inputs = document.querySelectorAll('input[required]');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.classList.add('input-error');
            } else {
                this.classList.remove('input-error');
                this.classList.add('input-success');
            }
        });
        
        input.addEventListener('input', function() {
            this.classList.remove('input-error', 'input-success');
        });
    });
    
    // Email validation
    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.classList.add('input-error');
            }
        });
    });
    
    // Password confirmation validation
    const confirmPasswordInput = document.getElementById('confirm-password');
    if (confirmPasswordInput) {
        confirmPasswordInput.addEventListener('input', function() {
            const password = passwordInput.value;
            if (this.value && this.value !== password) {
                this.classList.add('input-error');
            } else if (this.value === password && password) {
                this.classList.remove('input-error');
                this.classList.add('input-success');
            }
        });
    }
    
    // Initialize Lucide icons
    lucide.createIcons();
});

// Global functions for inline event handlers
window.togglePassword = togglePassword;
window.loginWithGoogle = loginWithGoogle;
window.loginWithGithub = loginWithGithub;
window.loginWithFacebook = loginWithFacebook;
window.registerWithGoogle = registerWithGoogle;
window.registerWithGithub = registerWithGithub;
window.registerWithFacebook = registerWithFacebook;