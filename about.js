// Initialize Lucide icons and application
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    initializeAboutPage();
});

// Team data
const cofounders = [
    {
        id: 1,
        name: 'Priya Patel',
        role: 'Co-Founder & CTO',
        initials: 'PP',
        description: 'Full-stack developer with 8+ years of experience in EdTech. Leads our technical architecture and product development.',
        expertise: ['Full-Stack Development', 'System Architecture', 'EdTech Solutions'],
        gradientClass: 'cofounder-gradient-1'
    },
    {
        id: 2,
        name: 'Rahul Deshmukh',
        role: 'Co-Founder & COO',
        initials: 'RD',
        description: 'Operations expert and former polytechnic lecturer. Ensures our content quality and educational standards.',
        expertise: ['Operations Management', 'Educational Content', 'Quality Assurance'],
        gradientClass: 'cofounder-gradient-2'
    },
    {
        id: 3,
        name: 'Sneha Kulkarni',
        role: 'Co-Founder & CMO',
        initials: 'SK',
        description: 'Marketing strategist with deep understanding of student needs. Drives our outreach and community building efforts.',
        expertise: ['Digital Marketing', 'Community Building', 'Student Engagement'],
        gradientClass: 'cofounder-gradient-3'
    }
];

const teamMembers = [
    {
        id: 1,
        name: 'Amit Joshi',
        role: 'Senior Developer',
        initials: 'AJ',
        department: 'Engineering',
        gradientClass: 'team-gradient-1'
    },
    {
        id: 2,
        name: 'Kavya Reddy',
        role: 'UI/UX Designer',
        initials: 'KR',
        department: 'Design',
        gradientClass: 'team-gradient-2'
    },
    {
        id: 3,
        name: 'Vikram Singh',
        role: 'Content Manager',
        initials: 'VS',
        department: 'Content',
        gradientClass: 'team-gradient-3'
    },
    {
        id: 4,
        name: 'Anita Sharma',
        role: 'Quality Analyst',
        initials: 'AS',
        department: 'Quality',
        gradientClass: 'team-gradient-4'
    },
    {
        id: 5,
        name: 'Rohit Mehta',
        role: 'DevOps Engineer',
        initials: 'RM',
        department: 'Engineering',
        gradientClass: 'team-gradient-5'
    },
    {
        id: 6,
        name: 'Pooja Gupta',
        role: 'Community Manager',
        initials: 'PG',
        department: 'Community',
        gradientClass: 'team-gradient-6'
    },
    {
        id: 7,
        name: 'Kiran Yadav',
        role: 'Data Analyst',
        initials: 'KY',
        department: 'Analytics',
        gradientClass: 'team-gradient-7'
    }
];

const values = [
    {
        icon: 'heart',
        title: 'Student-Centric',
        description: 'Every decision we make is guided by what\'s best for our students\' learning experience.',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-100'
    },
    {
        icon: 'shield-check',
        title: 'Quality First',
        description: 'We maintain the highest standards in content accuracy, relevance, and educational value.',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-100'
    },
    {
        icon: 'zap',
        title: 'Innovation',
        description: 'We continuously explore new technologies and methods to enhance the learning experience.',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-100'
    },
    {
        icon: 'users',
        title: 'Collaboration',
        description: 'We believe in the power of community and collaborative learning to achieve better outcomes.',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-100'
    }
];

// Initialize the about page
function initializeAboutPage() {
    renderCofounders();
    renderTeamMembers();
    renderValues();
    setupScrollAnimations();
}

// Render co-founders
function renderCofounders() {
    const container = document.getElementById('cofounders-grid');
    container.innerHTML = cofounders.map(cofounder => `
        <div class="cofounder-card bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div class="text-center">
                <div class="w-20 h-20 mx-auto mb-4 rounded-full ${cofounder.gradientClass} flex items-center justify-center text-white text-xl font-bold profile-image">
                    ${cofounder.initials}
                </div>
                <h4 class="text-lg font-bold text-gray-900 mb-1">${cofounder.name}</h4>
                <p class="text-blue-600 font-semibold mb-3">${cofounder.role}</p>
                <p class="text-gray-600 text-sm leading-relaxed mb-4">
                    ${cofounder.description}
                </p>
                <div class="mb-4">
                    <div class="flex flex-wrap gap-2 justify-center">
                        ${cofounder.expertise.map(skill => `
                            <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                ${skill}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="flex justify-center space-x-3">
                    <a href="#" class="social-link w-8 h-8 bg-blue-100 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors">
                        <i data-lucide="linkedin" class="w-4 h-4 text-blue-600"></i>
                    </a>
                    <a href="#" class="social-link w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                        <i data-lucide="twitter" class="w-4 h-4 text-gray-600"></i>
                    </a>
                    <a href="#" class="social-link w-8 h-8 bg-green-100 hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors">
                        <i data-lucide="mail" class="w-4 h-4 text-green-600"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// Render team members
function renderTeamMembers() {
    const container = document.getElementById('team-grid');
    container.innerHTML = teamMembers.map(member => `
        <div class="team-member-card bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <div class="text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full ${member.gradientClass} flex items-center justify-center text-white text-lg font-bold profile-image">
                    ${member.initials}
                </div>
                <h4 class="font-semibold text-gray-900 mb-1">${member.name}</h4>
                <p class="text-blue-600 text-sm font-medium mb-2">${member.role}</p>
                <p class="text-gray-500 text-xs">${member.department}</p>
                <div class="mt-4 flex justify-center space-x-2">
                    <a href="#" class="social-link w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                        <i data-lucide="linkedin" class="w-3 h-3 text-gray-600"></i>
                    </a>
                    <a href="#" class="social-link w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors">
                        <i data-lucide="mail" class="w-3 h-3 text-gray-600"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

// Render values
function renderValues() {
    const container = document.getElementById('values-grid');
    container.innerHTML = values.map(value => `
        <div class="value-card text-center p-6 rounded-xl ${value.bgColor} ${value.borderColor} border hover:shadow-lg transition-all duration-200">
            <div class="w-12 h-12 mx-auto mb-4 rounded-full bg-white shadow-md flex items-center justify-center ${value.color}">
                <i data-lucide="${value.icon}" class="w-6 h-6"></i>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-3">${value.title}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">${value.description}</p>
        </div>
    `).join('');
    lucide.createIcons();
}

// Setup scroll animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all animated elements
    document.querySelectorAll('.mission-card, .founder-card, .cofounder-card, .team-member-card, .value-card').forEach(el => {
        observer.observe(el);
    });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
});

// Add some interactive effects
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.team-member-card') || e.target.closest('.cofounder-card')) {
        const card = e.target.closest('.team-member-card') || e.target.closest('.cofounder-card');
        card.style.transform = 'translateY(-8px)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.team-member-card') || e.target.closest('.cofounder-card')) {
        const card = e.target.closest('.team-member-card') || e.target.closest('.cofounder-card');
        card.style.transform = 'translateY(0)';
    }
});

// Add click handlers for buttons
document.addEventListener('click', function(e) {
    if (e.target.textContent === 'View Open Positions') {
        alert('Careers page coming soon! We\'ll be posting exciting opportunities for passionate individuals who want to make a difference in education.');
    }
    
    if (e.target.textContent === 'Get in Touch') {
        alert('Contact form coming soon! For now, you can reach us at careers@collegesahayak.com');
    }
});