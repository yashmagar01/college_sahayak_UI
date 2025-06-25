// Profile Management
class ProfileManager {
    constructor() {
        this.isEditing = false;
        this.originalData = {};
        this.initializeEventListeners();
        this.loadTheme();
        this.setupInitials();
    }

    initializeEventListeners() {
        // Edit Profile Button
        document.getElementById('edit-btn').addEventListener('click', () => {
            this.startEditing();
        });

        // Save Button
        document.getElementById('save-btn').addEventListener('click', () => {
            this.saveProfile();
        });

        // Cancel Button
        document.getElementById('cancel-btn').addEventListener('click', () => {
            this.cancelEditing();
        });

        // Theme Toggle
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });

        // Change Photo Button (now shows initials instead of changing photo)
        document.getElementById('change-photo-btn').addEventListener('click', () => {
            // Since we're using initials, we'll just update the initials if needed
            const name = document.getElementById('name-display').textContent;
            this.updateUserInitials(name);
        });
    }

    startEditing() {
        this.isEditing = true;
        
        // Store original data
        this.originalData = {
            name: document.getElementById('name-display').textContent,
            email: document.getElementById('email-display').textContent,
            branch: document.getElementById('branch-display').textContent,
            semester: document.getElementById('semester-display').textContent,
            college: document.getElementById('college-display').textContent,
            bio: document.getElementById('bio-display').textContent
        };

        // Set input values
        document.getElementById('name-input').value = this.originalData.name;
        document.getElementById('email-input').value = this.originalData.email;
        document.getElementById('branch-input').value = this.originalData.branch;
        document.getElementById('semester-input').value = this.originalData.semester;
        document.getElementById('college-input').value = this.originalData.college;
        document.getElementById('bio-input').value = this.originalData.bio;

        // Toggle visibility
        this.toggleEditMode(true);
    }

    saveProfile() {
        // Get values from inputs
        const name = document.getElementById('name-input').value;
        const email = document.getElementById('email-input').value;
        const branch = document.getElementById('branch-input').value;
        const semester = document.getElementById('semester-input').value;
        const college = document.getElementById('college-input').value;
        const bio = document.getElementById('bio-input').value;

        // Update display fields
        document.getElementById('name-display').textContent = name;
        document.getElementById('email-display').textContent = email;
        document.getElementById('branch-display').textContent = branch;
        document.getElementById('semester-display').textContent = semester;
        document.getElementById('college-display').textContent = college;
        document.getElementById('bio-display').textContent = bio;

        // Update welcome name if it exists
        const welcomeName = document.getElementById('welcome-name');
        if (welcomeName) {
            welcomeName.textContent = name.split(' ')[0];
        }

        // Update user initials when name changes
        this.updateUserInitials(name);

        this.cancelEditing();
    }
    
    setupInitials() {
        // Get the user's name from the display field
        const name = document.getElementById('name-display').textContent;
        this.updateUserInitials(name);
    }
    
    updateUserInitials(fullName) {
        // Generate initials from the full name
        const initials = fullName
            .split(' ')
            .map(part => part[0])
            .join('')
            .toUpperCase()
            .substring(0, 2); // Get max 2 characters
            
        // Update the initials in the DOM
        const initialsElement = document.getElementById('user-initials');
        if (initialsElement) {
            initialsElement.textContent = initials;
        }
    }

    cancelEditing() {
        this.isEditing = false;
        this.toggleEditMode(false);
    }

    toggleEditMode(editing) {
        // Toggle button visibility
        document.getElementById('edit-btn').style.display = editing ? 'none' : 'flex';
        document.getElementById('save-cancel-btns').style.display = editing ? 'flex' : 'none';
        document.getElementById('change-photo-btn').style.display = editing ? 'block' : 'none';

        // Toggle field visibility
        const fields = ['name', 'email', 'branch', 'semester', 'college', 'bio'];
        fields.forEach(field => {
            document.getElementById(`${field}-display`).style.display = editing ? 'none' : 'block';
            document.getElementById(`${field}-input`).style.display = editing ? 'block' : 'none';
        });
    }

    changePhoto() {
        // Placeholder for photo change functionality
        // In a real application, this would open a file picker
        alert('Photo change functionality would be implemented here. This would typically open a file picker to select a new profile image.');
    }

    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '12px 24px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '1000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });

        // Set background color based on type
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#3b82f6'
        };
        notification.style.backgroundColor = colors[type] || colors.info;

        // Add to DOM
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Theme Management
    loadTheme() {
        const savedTheme = localStorage.getItem('darkMode');
        const isDark = savedTheme === 'true';
        
        if (isDark) {
            document.body.classList.add('dark-mode');
            this.updateThemeToggle(true);
        }
    }

    toggleTheme() {
        const isDark = document.body.classList.contains('dark-mode');
        
        if (isDark) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
            this.updateThemeToggle(false);
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
            this.updateThemeToggle(true);
        }
    }

    updateThemeToggle(isDark) {
        const toggle = document.getElementById('theme-toggle');
        const icon = document.getElementById('theme-icon');
        const title = document.getElementById('theme-title');

        if (isDark) {
            toggle.classList.add('active');
            title.textContent = 'Dark Mode';
            // Moon icon
            icon.innerHTML = `
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            `;
        } else {
            toggle.classList.remove('active');
            title.textContent = 'Light Mode';
            // Sun icon
            icon.innerHTML = `
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            `;
        }
    }

    // Load saved profile data
    loadSavedProfile() {
        const savedProfile = localStorage.getItem('userProfile');
        if (savedProfile) {
            const profileData = JSON.parse(savedProfile);
            
            // Update display fields
            document.getElementById('name-display').textContent = profileData.name;
            document.getElementById('email-display').textContent = profileData.email;
            document.getElementById('branch-display').textContent = profileData.branch;
            document.getElementById('semester-display').textContent = profileData.semester;
            document.getElementById('college-display').textContent = profileData.college;
            document.getElementById('bio-display').textContent = profileData.bio;

            // Update welcome name
            const firstName = profileData.name.split(' ')[0];
            document.getElementById('welcome-name').textContent = firstName;
        }
    }
}

// Interactive Elements
class InteractiveElements {
    constructor() {
        this.initializeInteractions();
    }

    initializeInteractions() {
        // Resource item clicks
        this.addResourceItemListeners();
        
        // Suggestion item clicks
        this.addSuggestionItemListeners();
        
        // Action item clicks
        this.addActionItemListeners();
        
        // Achievement hover effects
        this.addAchievementHoverEffects();
    }

    addResourceItemListeners() {
        const resourceItems = document.querySelectorAll('.resource-item');
        resourceItems.forEach(item => {
            item.addEventListener('click', () => {
                const title = item.querySelector('.resource-title').textContent;
                this.showResourceModal(title);
            });
        });
    }

    addSuggestionItemListeners() {
        const suggestionItems = document.querySelectorAll('.suggestion-item');
        suggestionItems.forEach(item => {
            item.addEventListener('click', () => {
                const title = item.querySelector('.suggestion-title').textContent;
                this.showSuggestionModal(title);
            });
        });
    }

    addActionItemListeners() {
        // Notifications button
        const notificationBtn = document.querySelector('.action-item');
        if (notificationBtn) {
            notificationBtn.addEventListener('click', () => {
                this.showNotificationsModal();
            });
        }

        // Account Settings button
        const settingsBtn = document.querySelectorAll('.action-item')[1];
        if (settingsBtn) {
            settingsBtn.addEventListener('click', () => {
                this.showSettingsModal();
            });
        }
    }

    addAchievementHoverEffects() {
        const achievementItems = document.querySelectorAll('.achievement-item');
        achievementItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-2px)';
                item.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0)';
                item.style.boxShadow = 'none';
            });
        });
    }

    showResourceModal(title) {
        alert(`Opening resource: ${title}\n\nThis would typically open the resource in a new tab or modal window.`);
    }

    showSuggestionModal(title) {
        alert(`Opening suggestion: ${title}\n\nThis would typically navigate to the suggested content.`);
    }

    showNotificationsModal() {
        const notifications = [
            'New assignment posted for Data Structures',
            'Microproject submission deadline approaching',
            'New study material available for your branch'
        ];
        
        alert(`Notifications (${notifications.length}):\n\n${notifications.join('\n')}`);
    }

    showSettingsModal() {
        alert('Account Settings\n\nThis would typically open a settings page where you can:\n- Change password\n- Update preferences\n- Manage notifications\n- Privacy settings');
    }
}

// Progress Animation
class ProgressAnimator {
    constructor() {
        this.animateProgressBar();
        this.animateCounters();
    }

    animateProgressBar() {
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            // Start from 0 and animate to target width
            const targetWidth = progressFill.style.width;
            progressFill.style.width = '0%';
            
            setTimeout(() => {
                progressFill.style.width = targetWidth;
            }, 500);
        }
    }

    animateCounters() {
        // Animate notification badge
        const badge = document.querySelector('.notification-badge');
        if (badge) {
            const targetCount = parseInt(badge.textContent);
            let currentCount = 0;
            
            const interval = setInterval(() => {
                currentCount++;
                badge.textContent = currentCount;
                
                if (currentCount >= targetCount) {
                    clearInterval(interval);
                }
            }, 200);
        }
    }
}

// Responsive Behavior
class ResponsiveHandler {
    constructor() {
        this.handleResize();
        window.addEventListener('resize', () => this.handleResize());
    }

    handleResize() {
        const isMobile = window.innerWidth < 768;
        
        // Adjust grid layout for mobile
        const gridLayout = document.querySelector('.grid-layout');
        if (gridLayout) {
            if (isMobile) {
                gridLayout.style.gridTemplateColumns = '1fr';
            } else {
                gridLayout.style.gridTemplateColumns = '2fr 1fr';
            }
        }

        // Adjust card padding for mobile
        const cards = document.querySelectorAll('.profile-card, .resources-card, .progress-card, .suggestions-card, .actions-card');
        cards.forEach(card => {
            if (isMobile) {
                card.style.padding = '1rem';
            } else {
                card.style.padding = '1.5rem';
            }
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const profileManager = new ProfileManager();
    const interactiveElements = new InteractiveElements();
    const progressAnimator = new ProgressAnimator();
    const responsiveHandler = new ResponsiveHandler();
    
    // Load saved profile data
    profileManager.loadSavedProfile();
    
    // Add smooth scrolling for any anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Utility Functions
const utils = {
    // Format date strings
    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
        return `${Math.ceil(diffDays / 30)} months ago`;
    },
    
    // Validate email
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
    
    // Generate random avatar
    generateAvatar(name) {
        const colors = ['#4f46e5', '#7c3aed', '#6366f1', '#8b5cf6'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
        
        return {
            initials,
            color: randomColor
        };
    }
};