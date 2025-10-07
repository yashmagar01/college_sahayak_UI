import { supabase } from '../supabaseClient.js';

let authState = {
    currentForm: 'login',
    isLoading: false
};

const loginTab = document.getElementById('login-tab');
const registerTab = document.getElementById('register-tab');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const loginFormElement = document.getElementById('login-form-element');
const registerFormElement = document.getElementById('register-form-element');
const messageContainer = document.getElementById('message-container');

const passwordInput = document.getElementById('register-password');
const passwordStrengthFill = document.getElementById('password-strength-fill');
const passwordStrengthText = document.getElementById('password-strength-text');

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

    if (!formData.email || !validateEmail(formData.email)) {
        errors.push('Please enter a valid email address');
    }

    if (!formData.password || formData.password.length < 6) {
        errors.push('Password must be at least 6 characters long');
    }

    if (!isLogin) {
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
            button.innerHTML = `
                <span class="spinner mr-2"></span>
                Processing...
            `;
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
}

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

async function handleLogin(formData) {
    setLoading(true);

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: formData.email,
            password: formData.password
        });

        if (error) {
            showMessage(error.message, 'error');
            setLoading(false);
            return;
        }

        showMessage('Login successful! Welcome back to College Sahayak.', 'success');

        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);

    } catch (error) {
        showMessage('An unexpected error occurred. Please try again.', 'error');
        setLoading(false);
    }
}

async function handleRegister(formData) {
    setLoading(true);

    try {
        const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
                data: {
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    branch: formData.branch,
                    semester: formData.semester
                }
            }
        });

        if (error) {
            showMessage(error.message, 'error');
            setLoading(false);
            return;
        }

        showMessage('Account created successfully! Welcome to College Sahayak.', 'success');

        setTimeout(() => {
            switchToLogin();
            showMessage('Please log in with your new account.', 'info');
            setLoading(false);
        }, 1500);

    } catch (error) {
        showMessage('An unexpected error occurred. Please try again.', 'error');
        setLoading(false);
    }
}

function loginWithGoogle() {
    showMessage('Social login is not yet configured.', 'info');
}

function loginWithGithub() {
    showMessage('Social login is not yet configured.', 'info');
}

function loginWithFacebook() {
    showMessage('Social login is not yet configured.', 'info');
}

function registerWithGoogle() {
    showMessage('Social login is not yet configured.', 'info');
}

function registerWithGithub() {
    showMessage('Social login is not yet configured.', 'info');
}

function registerWithFacebook() {
    showMessage('Social login is not yet configured.', 'info');
}

document.addEventListener('DOMContentLoaded', async function() {
    const { data: { session } } = await supabase.auth.getSession();
    if (session) {
        window.location.href = '../index.html';
        return;
    }

    loginTab.addEventListener('click', switchToLogin);
    registerTab.addEventListener('click', switchToRegister);

    if (passwordInput) {
        passwordInput.addEventListener('input', function() {
            updatePasswordStrength(this.value);
        });
    }

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

    const emailInputs = document.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !validateEmail(this.value)) {
                this.classList.add('input-error');
            }
        });
    });

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

    lucide.createIcons();
});

window.togglePassword = togglePassword;
window.loginWithGoogle = loginWithGoogle;
window.loginWithGithub = loginWithGithub;
window.loginWithFacebook = loginWithFacebook;
window.registerWithGoogle = registerWithGoogle;
window.registerWithGithub = registerWithGithub;
window.registerWithFacebook = registerWithFacebook;
