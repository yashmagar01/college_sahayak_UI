// Profile Data
const profileData = {
    user: {
        name: 'yash magar',
        initials: 'YM',
        branch: 'Computer Engineering',
        semester: 3,
        college: 'Government Polytechnic Awasari(kh.)',
        bio: 'Passionate about software development and emerging technologies. Currently exploring web development, machine learning, and mobile app development. Always eager to learn and contribute to innovative projects.',
        avatar: null
    },
    
    resources: {
        recent: [
            {
                id: 1,
                title: 'Data Structures Syllabus',
                type: 'Syllabus',
                subject: 'Computer Engineering',
                semester: 'Semester 4',
                icon: 'file-text',
                iconColor: 'text-blue-600',
                bgColor: 'bg-blue-100',
                timestamp: '2 hours ago'
            },
            {
                id: 2,
                title: 'Library Management System',
                type: 'Microproject',
                subject: 'Computer Engineering',
                semester: '',
                icon: 'lightbulb',
                iconColor: 'text-green-600',
                bgColor: 'bg-green-100',
                timestamp: '1 day ago'
            },
            {
                id: 3,
                title: 'Programming Fundamentals Assignment',
                type: 'Assignment',
                subject: 'Semester 4',
                semester: '',
                icon: 'clipboard-check',
                iconColor: 'text-purple-600',
                bgColor: 'bg-purple-100',
                timestamp: '3 days ago'
            }
        ],
        
        bookmarked: [
            {
                id: 1,
                title: 'Engineering Mathematics Notes',
                description: 'Important formulas and concepts',
                icon: 'star',
                iconColor: 'text-yellow-600',
                bgColor: 'bg-yellow-100'
            },
            {
                id: 2,
                title: 'Previous Year Question Papers',
                description: 'Computer Engineering 2023',
                icon: 'file-text',
                iconColor: 'text-red-600',
                bgColor: 'bg-red-100'
            }
        ],
        
        downloaded: [
            {
                id: 1,
                title: 'Digital Electronics Syllabus.pdf',
                description: 'Downloaded 2 days ago • 2.4 MB',
                icon: 'download',
                iconColor: 'text-green-600',
                bgColor: 'bg-green-100'
            },
            {
                id: 2,
                title: 'Microproject Guidelines.pdf',
                description: 'Downloaded 1 week ago • 1.8 MB',
                icon: 'download',
                iconColor: 'text-blue-600',
                bgColor: 'bg-blue-100'
            }
        ]
    },
    
    progress: {
        overall: 68,
        subjects: [
            { name: 'Data Structures', progress: 85, color: 'green' },
            { name: 'Digital Electronics', progress: 72, color: 'blue' },
            { name: 'Mathematics', progress: 58, color: 'yellow' },
            { name: 'Computer Organization', progress: 63, color: 'purple' }
        ]
    },
    
    activities: [
        {
            id: 1,
            action: 'Completed',
            item: 'Programming Assignment #3',
            icon: 'check',
            iconColor: 'text-green-600',
            bgColor: 'bg-green-100',
            timestamp: '2 hours ago'
        },
        {
            id: 2,
            action: 'Downloaded',
            item: 'Digital Electronics Syllabus',
            icon: 'download',
            iconColor: 'text-blue-600',
            bgColor: 'bg-blue-100',
            timestamp: '1 day ago'
        },
        {
            id: 3,
            action: 'Bookmarked',
            item: 'Mathematics Formula Sheet',
            icon: 'star',
            iconColor: 'text-yellow-600',
            bgColor: 'bg-yellow-100',
            timestamp: '3 days ago'
        }
    ],
    
    achievements: [
        {
            id: 1,
            title: 'First Semester Complete',
            description: 'Completed all subjects with 85% average',
            icon: 'trophy',
            bgGradient: 'from-yellow-50 to-orange-50',
            borderColor: 'border-yellow-200',
            iconBg: 'bg-yellow-500'
        },
        {
            id: 2,
            title: 'Microproject Master',
            description: 'Completed 5 microprojects successfully',
            icon: 'lightbulb',
            bgGradient: 'from-blue-50 to-purple-50',
            borderColor: 'border-blue-200',
            iconBg: 'bg-blue-500'
        },
        {
            id: 3,
            title: 'Top Contributor',
            description: 'Helped 20+ students with resources',
            icon: 'users',
            bgGradient: 'from-green-50 to-emerald-50',
            borderColor: 'border-green-200',
            iconBg: 'bg-green-500'
        }
    ],
    
    stats: {
        resourcesAccessed: 47,
        downloads: 12,
        bookmarks: 8,
        achievements: 3
    },
    
    notifications: [
        {
            id: 1,
            title: 'New syllabus update available',
            description: 'Computer Engineering - Semester 4',
            type: 'info',
            borderColor: 'border-blue-500',
            bgColor: 'bg-blue-50'
        },
        {
            id: 2,
            title: 'Assignment deadline approaching',
            description: 'Due in 2 days',
            type: 'warning',
            borderColor: 'border-yellow-500',
            bgColor: 'bg-yellow-50'
        },
        {
            id: 3,
            title: 'New microproject ideas added',
            description: 'Check out the latest projects',
            type: 'success',
            borderColor: 'border-green-500',
            bgColor: 'bg-green-50'
        }
    ]
};

// Application State
let appState = {
    currentResourceTab: 'recent',
    darkMode: false,
    notifications: true
};

// DOM Elements
const resourceTabs = document.querySelectorAll('.resource-tab');
const resourcePanels = document.querySelectorAll('.resource-panel');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const notificationsToggle = document.getElementById('notifications-toggle');

// Utility Functions
function updateProfileInfo() {
    const user = profileData.user;
    
    document.getElementById('profile-initials').textContent = user.initials;
    document.getElementById('profile-name').textContent = user.name;
    document.getElementById('profile-branch').textContent = user.branch;
    document.getElementById('profile-semester').textContent = user.semester;
    document.getElementById('profile-college').textContent = user.college;
    document.getElementById('profile-bio').textContent = user.bio;
}

function renderResourcePanel(type) {
    const panel = document.getElementById(`${type}-panel`);
    const resources = profileData.resources[type];
    
    if (!panel || !resources) return;
    
    const resourcesHTML = resources.map(resource => {
        if (type === 'recent') {
            return `
                <div class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div class="w-10 h-10 ${resource.bgColor} rounded-lg flex items-center justify-center mr-3">
                        <i data-lucide="${resource.icon}" class="w-5 h-5 ${resource.iconColor}"></i>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-medium text-gray-900">${resource.title}</h4>
                        <p class="text-sm text-gray-500">${resource.subject}${resource.semester ? ' • ' + resource.semester : ''}</p>
                    </div>
                    <span class="text-xs text-gray-400">${resource.timestamp}</span>
                </div>
            `;
        } else if (type === 'bookmarked') {
            return `
                <div class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div class="w-10 h-10 ${resource.bgColor} rounded-lg flex items-center justify-center mr-3">
                        <i data-lucide="${resource.icon}" class="w-5 h-5 ${resource.iconColor}"></i>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-medium text-gray-900">${resource.title}</h4>
                        <p class="text-sm text-gray-500">${resource.description}</p>
                    </div>
                    <button class="text-yellow-500 hover:text-yellow-600">
                        <i data-lucide="bookmark" class="w-4 h-4"></i>
                    </button>
                </div>
            `;
        } else if (type === 'downloaded') {
            return `
                <div class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                    <div class="w-10 h-10 ${resource.bgColor} rounded-lg flex items-center justify-center mr-3">
                        <i data-lucide="${resource.icon}" class="w-5 h-5 ${resource.iconColor}"></i>
                    </div>
                    <div class="flex-1">
                        <h4 class="font-medium text-gray-900">${resource.title}</h4>
                        <p class="text-sm text-gray-500">${resource.description}</p>
                    </div>
                    <button class="text-blue-600 hover:text-blue-700">
                        <i data-lucide="external-link" class="w-4 h-4"></i>
                    </button>
                </div>
            `;
        }
    }).join('');
    
    panel.innerHTML = `<div class="space-y-3">${resourcesHTML}</div>`;
}

function renderAllResourcePanels() {
    renderResourcePanel('recent');
    renderResourcePanel('bookmarked');
    renderResourcePanel('downloaded');
}

function switchResourceTab(tabName) {
    // Update tab states
    resourceTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.tab === tabName) {
            tab.classList.add('active');
        }
    });
    
    // Update panel visibility
    resourcePanels.forEach(panel => {
        panel.classList.remove('active');
        if (panel.id === `${tabName}-panel`) {
            panel.classList.add('active');
        }
    });
    
    appState.currentResourceTab = tabName;
}

function renderProgressBars() {
    const overallProgress = profileData.progress.overall;
    const overallBar = document.querySelector('.bg-blue-600');
    if (overallBar) {
        overallBar.style.width = `${overallProgress}%`;
    }
    
    profileData.progress.subjects.forEach((subject, index) => {
        const progressBars = document.querySelectorAll('.progress-bar');
        if (progressBars[index]) {
            progressBars[index].style.width = `${subject.progress}%`;
        }
    });
}

function renderActivityFeed() {
    const activities = profileData.activities;
    const activityContainer = document.querySelector('#recent-activity .space-y-4');
    
    if (!activityContainer) return;
    
    const activitiesHTML = activities.map(activity => `
        <div class="flex items-start space-x-3">
            <div class="w-8 h-8 ${activity.bgColor} rounded-full flex items-center justify-center">
                <i data-lucide="${activity.icon}" class="w-4 h-4 ${activity.iconColor}"></i>
            </div>
            <div class="flex-1">
                <p class="text-sm text-gray-900">${activity.action} <strong>${activity.item}</strong></p>
                <p class="text-xs text-gray-500">${activity.timestamp}</p>
            </div>
        </div>
    `).join('');
    
    activityContainer.innerHTML = activitiesHTML;
}

function renderStats() {
    const stats = profileData.stats;
    const statElements = document.querySelectorAll('.text-2xl.font-bold');
    
    if (statElements.length >= 4) {
        statElements[0].textContent = stats.resourcesAccessed;
        statElements[1].textContent = stats.downloads;
        statElements[2].textContent = stats.bookmarks;
        statElements[3].textContent = stats.achievements;
    }
}

function handleTabClick(event) {
    const tabName = event.target.dataset.tab;
    if (tabName) {
        switchResourceTab(tabName);
    }
}

function handleToggleChange(toggleId, settingName) {
    const toggle = document.getElementById(toggleId);
    if (toggle) {
        appState[settingName] = toggle.checked;
        
        // Handle specific toggle actions
        if (settingName === 'darkMode') {
            // Implement dark mode toggle logic here
            console.log('Dark mode:', appState.darkMode ? 'enabled' : 'disabled');
        } else if (settingName === 'notifications') {
            console.log('Notifications:', appState.notifications ? 'enabled' : 'disabled');
        }
    }
}

function handleEditProfile() {
    // Implement edit profile functionality
    console.log('Edit profile clicked');
    // This could open a modal or navigate to an edit page
}

function handleResourceClick(resourceId, type) {
    // Implement resource click handling
    console.log(`Resource clicked: ${resourceId} of type ${type}`);
    // This could open the resource or navigate to its page
}

function handleBookmarkToggle(resourceId) {
    // Implement bookmark toggle functionality
    console.log(`Bookmark toggled for resource: ${resourceId}`);
    // This would update the bookmark state and re-render
}

function handleNotificationClick(notificationId) {
    // Implement notification click handling
    console.log(`Notification clicked: ${notificationId}`);
    // This could mark as read or navigate to relevant content
}

// Event Listeners
function initializeEventListeners() {
    // Resource tab switching
    resourceTabs.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
    });
    
    // Toggle switches
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            handleToggleChange('dark-mode-toggle', 'darkMode');
        });
    }
    
    if (notificationsToggle) {
        notificationsToggle.addEventListener('change', () => {
            handleToggleChange('notifications-toggle', 'notifications');
        });
    }
    
    // Edit profile button
    const editProfileBtn = document.querySelector('button:has([data-lucide="edit"])');
    if (editProfileBtn) {
        editProfileBtn.addEventListener('click', handleEditProfile);
    }
    
    // Profile picture upload
    const profilePictureBtn = document.querySelector('button:has([data-lucide="camera"])');
    if (profilePictureBtn) {
        profilePictureBtn.addEventListener('click', () => {
            console.log('Profile picture upload clicked');
            // Implement file upload functionality
        });
    }
}

// Animation Functions
function animateProgressBars() {
    const progressBars = document.querySelectorAll('[style*="width"]');
    progressBars.forEach((bar, index) => {
        setTimeout(() => {
            bar.classList.add('progress-bar');
        }, index * 100);
    });
}

function animateCounters() {
    const counters = document.querySelectorAll('.text-2xl.font-bold');
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 20;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 50);
    });
}

// Initialization
function initializeProfile() {
    updateProfileInfo();
    renderAllResourcePanels();
    renderStats();
    initializeEventListeners();
    
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    // Add animations
    setTimeout(() => {
        animateProgressBars();
        animateCounters();
    }, 500);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProfile);

// Export functions for potential external use
window.profileApp = {
    switchResourceTab,
    handleEditProfile,
    handleResourceClick,
    handleBookmarkToggle,
    handleNotificationClick,
    profileData,
    appState
};