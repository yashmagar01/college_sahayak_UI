// Data Structure
const microprojectData = {
    branches: [
        {
            id: 'computer',
            name: 'Computer Engineering',
            icon: 'monitor',
            color: 'bg-blue-50 hover:bg-blue-100',
            iconColor: 'text-blue-600'
        },
        {
            id: 'mechanical',
            name: 'Mechanical Engineering',
            icon: 'settings',
            color: 'bg-green-50 hover:bg-green-100',
            iconColor: 'text-green-600'
        },
        {
            id: 'electrical',
            name: 'Electrical Engineering',
            icon: 'zap',
            color: 'bg-yellow-50 hover:bg-yellow-100',
            iconColor: 'text-yellow-600'
        },
        {
            id: 'civil',
            name: 'Civil Engineering',
            icon: 'building',
            color: 'bg-orange-50 hover:bg-orange-100',
            iconColor: 'text-orange-600'
        },
        {
            id: 'electronics',
            name: 'Electronics Engineering',
            icon: 'cpu',
            color: 'bg-purple-50 hover:bg-purple-100',
            iconColor: 'text-purple-600'
        },
        {
            id: 'automobile',
            name: 'Automobile Engineering',
            icon: 'car',
            color: 'bg-red-50 hover:bg-red-100',
            iconColor: 'text-red-600'
        }
    ],
    
    semesters: [
        {
            id: 'sem1',
            number: 1,
            name: 'First Semester',
            description: 'Basic engineering microprojects and fundamental concepts'
        },
        {
            id: 'sem2',
            number: 2,
            name: 'Second Semester',
            description: 'Core engineering microprojects with practical applications'
        },
        {
            id: 'sem3',
            number: 3,
            name: 'Third Semester',
            description: 'Specialized branch microprojects and innovative solutions'
        },
        {
            id: 'sem4',
            number: 4,
            name: 'Fourth Semester',
            description: 'Advanced microprojects with industry-relevant technologies'
        },
        {
            id: 'sem5',
            number: 5,
            name: 'Fifth Semester',
            description: 'Complex microprojects with real-world problem solving'
        },
        {
            id: 'sem6',
            number: 6,
            name: 'Sixth Semester',
            description: 'Final semester capstone microprojects and research'
        }
    ],
    
    projects: [
        // Computer Engineering - Semester 1
        {
            id: 'comp-sem1-1',
            name: 'Student Management System',
            category: 'Database Application',
            description: 'A comprehensive web-based system for managing student records, attendance, and grades with user authentication.',
            difficulty: 'Medium',
            duration: '2-3 weeks',
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
            features: ['User Login', 'Student Records', 'Attendance Tracking', 'Grade Management'],
            projectUrl: '/microprojects/computer/sem1/student-management-system.pdf',
            sourceUrl: '/microprojects/computer/sem1/student-management-system-code.zip',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-2',
            name: 'Library Management System',
            category: 'Web Application',
            description: 'Digital library system for book cataloging, member management, and book issue/return tracking.',
            difficulty: 'Easy',
            duration: '1-2 weeks',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            features: ['Book Catalog', 'Member Registration', 'Issue/Return Books', 'Search Functionality'],
            projectUrl: '/microprojects/computer/sem1/library-management-system.pdf',
            sourceUrl: '/microprojects/computer/sem1/library-management-system-code.zip',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-3',
            name: 'Calculator Application',
            category: 'Desktop Application',
            description: 'Scientific calculator with basic and advanced mathematical operations using GUI programming.',
            difficulty: 'Easy',
            duration: '1 week',
            technologies: ['Python', 'Tkinter', 'Math Library'],
            features: ['Basic Operations', 'Scientific Functions', 'Memory Functions', 'History'],
            projectUrl: '/microprojects/computer/sem1/calculator-application.pdf',
            sourceUrl: '/microprojects/computer/sem1/calculator-application-code.zip',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        
        // Computer Engineering - Semester 2
        {
            id: 'comp-sem2-1',
            name: 'E-Commerce Website',
            category: 'Web Development',
            description: 'Complete online shopping platform with product catalog, shopping cart, and payment integration.',
            difficulty: 'Hard',
            duration: '3-4 weeks',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
            features: ['Product Catalog', 'Shopping Cart', 'User Authentication', 'Payment Gateway'],
            projectUrl: '/microprojects/computer/sem2/ecommerce-website.pdf',
            sourceUrl: '/microprojects/computer/sem2/ecommerce-website-code.zip',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        {
            id: 'comp-sem2-2',
            name: 'Chat Application',
            category: 'Real-time Application',
            description: 'Real-time messaging application with group chat, file sharing, and emoji support.',
            difficulty: 'Medium',
            duration: '2-3 weeks',
            technologies: ['Socket.io', 'Node.js', 'HTML', 'CSS'],
            features: ['Real-time Messaging', 'Group Chat', 'File Sharing', 'Emoji Support'],
            projectUrl: '/microprojects/computer/sem2/chat-application.pdf',
            sourceUrl: '/microprojects/computer/sem2/chat-application-code.zip',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        
        // Mechanical Engineering - Semester 1
        {
            id: 'mech-sem1-1',
            name: 'Hydraulic Jack Design',
            category: 'Mechanical Design',
            description: 'Design and analysis of hydraulic jack system with force calculations and material selection.',
            difficulty: 'Medium',
            duration: '2-3 weeks',
            technologies: ['AutoCAD', 'SolidWorks', 'Material Analysis'],
            features: ['3D Modeling', 'Force Analysis', 'Material Selection', 'Safety Calculations'],
            projectUrl: '/microprojects/mechanical/sem1/hydraulic-jack-design.pdf',
            sourceUrl: '/microprojects/mechanical/sem1/hydraulic-jack-design-files.zip',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        {
            id: 'mech-sem1-2',
            name: 'Solar Water Heater',
            category: 'Renewable Energy',
            description: 'Design and fabrication of solar water heating system with efficiency calculations.',
            difficulty: 'Easy',
            duration: '1-2 weeks',
            technologies: ['Thermal Analysis', 'Material Science', 'Solar Technology'],
            features: ['Heat Transfer Analysis', 'Efficiency Calculations', 'Cost Analysis', 'Environmental Impact'],
            projectUrl: '/microprojects/mechanical/sem1/solar-water-heater.pdf',
            sourceUrl: '/microprojects/mechanical/sem1/solar-water-heater-files.zip',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        
        // Electrical Engineering - Semester 1
        {
            id: 'elec-sem1-1',
            name: 'Automatic Street Light',
            category: 'Electronics Project',
            description: 'Light-dependent resistor based automatic street lighting system with energy efficiency.',
            difficulty: 'Easy',
            duration: '1-2 weeks',
            technologies: ['LDR', 'Relay', 'LED', 'Circuit Design'],
            features: ['Light Sensing', 'Automatic Control', 'Energy Efficient', 'Weather Resistant'],
            projectUrl: '/microprojects/electrical/sem1/automatic-street-light.pdf',
            sourceUrl: '/microprojects/electrical/sem1/automatic-street-light-circuit.zip',
            branchId: 'electrical',
            semesterId: 'sem1'
        },
        {
            id: 'elec-sem1-2',
            name: 'Home Automation System',
            category: 'IoT Project',
            description: 'Smart home automation using Arduino with mobile app control for appliances.',
            difficulty: 'Hard',
            duration: '3-4 weeks',
            technologies: ['Arduino', 'WiFi Module', 'Mobile App', 'Sensors'],
            features: ['Remote Control', 'Voice Commands', 'Scheduling', 'Energy Monitoring'],
            projectUrl: '/microprojects/electrical/sem1/home-automation-system.pdf',
            sourceUrl: '/microprojects/electrical/sem1/home-automation-system-code.zip',
            branchId: 'electrical',
            semesterId: 'sem1'
        },
        
        // Civil Engineering - Semester 1
        {
            id: 'civil-sem1-1',
            name: 'Rainwater Harvesting System',
            category: 'Environmental Engineering',
            description: 'Design of rainwater collection and storage system for residential buildings.',
            difficulty: 'Medium',
            duration: '2-3 weeks',
            technologies: ['Hydraulic Design', 'AutoCAD', 'Water Management'],
            features: ['Collection System', 'Storage Design', 'Filtration', 'Cost Analysis'],
            projectUrl: '/microprojects/civil/sem1/rainwater-harvesting-system.pdf',
            sourceUrl: '/microprojects/civil/sem1/rainwater-harvesting-drawings.zip',
            branchId: 'civil',
            semesterId: 'sem1'
        },
        
        // Electronics Engineering - Semester 1
        {
            id: 'elec-eng-sem1-1',
            name: 'Digital Clock with Alarm',
            category: 'Digital Electronics',
            description: 'Microcontroller-based digital clock with alarm functionality and LCD display.',
            difficulty: 'Medium',
            duration: '2 weeks',
            technologies: ['Microcontroller', 'LCD Display', 'RTC Module', 'Buzzer'],
            features: ['Time Display', 'Alarm Setting', 'Snooze Function', 'Battery Backup'],
            projectUrl: '/microprojects/electronics/sem1/digital-clock-alarm.pdf',
            sourceUrl: '/microprojects/electronics/sem1/digital-clock-alarm-code.zip',
            branchId: 'electronics',
            semesterId: 'sem1'
        },
        
        // Automobile Engineering - Semester 1
        {
            id: 'auto-sem1-1',
            name: 'Vehicle Tracking System',
            category: 'Automotive Electronics',
            description: 'GPS-based vehicle tracking system with real-time location monitoring.',
            difficulty: 'Hard',
            duration: '3-4 weeks',
            technologies: ['GPS Module', 'GSM', 'Microcontroller', 'Mobile App'],
            features: ['Real-time Tracking', 'Route History', 'Speed Monitoring', 'Theft Alert'],
            projectUrl: '/microprojects/automobile/sem1/vehicle-tracking-system.pdf',
            sourceUrl: '/microprojects/automobile/sem1/vehicle-tracking-system-code.zip',
            branchId: 'automobile',
            semesterId: 'sem1'
        }
    ]
};

// Application State
let appState = {
    currentView: 'branches',
    selectedBranch: null,
    selectedSemester: null
};

// DOM Elements
const branchSelectionView = document.getElementById('branch-selection');
const semesterSelectionView = document.getElementById('semester-selection');
const projectListingView = document.getElementById('project-listing');

const branchesGrid = document.getElementById('branches-grid');
const semestersGrid = document.getElementById('semesters-grid');
const projectsGrid = document.getElementById('projects-grid');
const noProjectsMessage = document.getElementById('no-projects');

// Breadcrumb elements
const breadcrumbBranch = document.getElementById('breadcrumb-branch');
const breadcrumbBranchBtn = document.getElementById('breadcrumb-branch-btn');
const breadcrumbSemester = document.getElementById('breadcrumb-semester');
const breadcrumbSemesterText = document.getElementById('breadcrumb-semester-text');
const breadcrumbMicroproject = document.getElementById('breadcrumb-microproject');

// Text elements
const selectedBranchName = document.getElementById('selected-branch-name');
const selectedBranchNameProjects = document.getElementById('selected-branch-name-projects');
const selectedSemesterName = document.getElementById('selected-semester-name');
const selectedSemesterNumber = document.getElementById('selected-semester-number');

// Utility Functions
function hideAllViews() {
    branchSelectionView.classList.add('hidden');
    semesterSelectionView.classList.add('hidden');
    projectListingView.classList.add('hidden');
}

function showView(viewName) {
    hideAllViews();
    
    switch(viewName) {
        case 'branches':
            branchSelectionView.classList.remove('hidden');
            branchSelectionView.classList.add('fade-in');
            break;
        case 'semesters':
            semesterSelectionView.classList.remove('hidden');
            semesterSelectionView.classList.add('fade-in');
            break;
        case 'projects':
            projectListingView.classList.remove('hidden');
            projectListingView.classList.add('fade-in');
            break;
    }
}

function updateBreadcrumb() {
    // Reset breadcrumb
    breadcrumbBranch.classList.add('hidden');
    breadcrumbSemester.classList.add('hidden');
    
    // Update based on current state
    if (appState.selectedBranch) {
        breadcrumbBranch.classList.remove('hidden');
        breadcrumbBranchBtn.textContent = appState.selectedBranch.name;
        
        if (appState.currentView === 'semesters') {
            breadcrumbBranchBtn.classList.add('text-blue-600', 'font-medium');
        } else {
            breadcrumbBranchBtn.classList.remove('text-blue-600', 'font-medium');
        }
    }
    
    if (appState.selectedSemester) {
        breadcrumbSemester.classList.remove('hidden');
        breadcrumbSemesterText.textContent = appState.selectedSemester.name;
    }
}

// Render Functions
function renderBranches() {
    branchesGrid.innerHTML = '';
    
    microprojectData.branches.forEach(branch => {
        const branchCard = document.createElement('div');
        branchCard.className = `branch-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${branch.color} border border-gray-100 cursor-pointer group`;
        branchCard.setAttribute('data-branch-id', branch.id);
        
        branchCard.innerHTML = `
            <div class="p-8 text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i data-lucide="${branch.icon}" class="w-8 h-8 ${branch.iconColor}"></i>
                </div>
                <h3 class="text-xl font-semibold text-gray-900 mb-3">
                    ${branch.name}
                </h3>
                <p class="text-gray-600 text-sm mb-6">
                    Innovative microprojects with complete documentation
                </p>
                <button class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    Select Branch
                    <i data-lucide="chevron-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"></i>
                </button>
            </div>
        `;
        
        branchCard.addEventListener('click', () => handleBranchSelect(branch));
        branchesGrid.appendChild(branchCard);
    });
    
    // Initialize Lucide icons
    lucide.createIcons();
}

function renderSemesters() {
    semestersGrid.innerHTML = '';
    
    microprojectData.semesters.forEach(semester => {
        const semesterCard = document.createElement('div');
        semesterCard.className = 'semester-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer group';
        semesterCard.setAttribute('data-semester-id', semester.id);
        
        semesterCard.innerHTML = `
            <div class="p-8 text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i data-lucide="folder" class="w-8 h-8 text-blue-600"></i>
                </div>
                <div class="mb-4">
                    <div class="text-2xl font-bold text-blue-600 mb-1">
                        Semester ${semester.number}
                    </div>
                    <h3 class="text-lg font-semibold text-gray-900 mb-2">
                        ${semester.name}
                    </h3>
                </div>
                <p class="text-gray-600 text-sm mb-6">
                    ${semester.description}
                </p>
                <button class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
                    View Microprojects
                    <i data-lucide="chevron-right" class="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"></i>
                </button>
            </div>
        `;
        
        semesterCard.addEventListener('click', () => handleSemesterSelect(semester));
        semestersGrid.appendChild(semesterCard);
    });
    
    // Initialize Lucide icons
    lucide.createIcons();
}

function renderProjects() {
    const projects = getProjectsByBranchAndSemester(appState.selectedBranch.id, appState.selectedSemester.id);
    
    projectsGrid.innerHTML = '';
    
    if (projects.length === 0) {
        noProjectsMessage.classList.remove('hidden');
        return;
    }
    
    noProjectsMessage.classList.add('hidden');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100';
        
        const difficultyClass = project.difficulty.toLowerCase() === 'easy' ? 'difficulty-easy' : 
                               project.difficulty.toLowerCase() === 'medium' ? 'difficulty-medium' : 'difficulty-hard';
        
        projectCard.innerHTML = `
            <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                        <div class="flex items-center mb-2">
                            <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                                <i data-lucide="lightbulb" class="w-5 h-5 text-blue-600"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900">
                                    ${project.name}
                                </h3>
                                <p class="text-sm text-gray-500">
                                    ${project.category} • ${project.duration}
                                </p>
                            </div>
                        </div>
                    </div>
                    <span class="px-2 py-1 text-xs rounded-md font-medium ${difficultyClass}">
                        ${project.difficulty}
                    </span>
                </div>
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                    ${project.description}
                </p>
                <div class="mb-4">
                    <p class="text-sm font-medium text-gray-700 mb-2">Technologies:</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.map(tech => `
                            <span class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                                ${tech}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="mb-4">
                    <p class="text-sm font-medium text-gray-700 mb-2">Key Features:</p>
                    <div class="flex flex-wrap gap-2">
                        ${project.features.map(feature => `
                            <span class="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md">
                                ${feature}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row gap-3">
                    <button class="btn-primary flex-1" onclick="handleProjectDownload('${project.projectUrl}')">
                        <i data-lucide="download" class="w-4 h-4 mr-2"></i>
                        Download Project
                    </button>
                    <button class="btn-secondary flex-1" onclick="handleSourceDownload('${project.sourceUrl}')">
                        <i data-lucide="code" class="w-4 h-4 mr-2"></i>
                        Get Source Code
                    </button>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Initialize Lucide icons
    lucide.createIcons();
}

// Event Handlers
function handleBranchSelect(branch) {
    appState.selectedBranch = branch;
    appState.currentView = 'semesters';
    
    selectedBranchName.textContent = branch.name;
    
    showView('semesters');
    updateBreadcrumb();
    renderSemesters();
}

function handleSemesterSelect(semester) {
    appState.selectedSemester = semester;
    appState.currentView = 'projects';
    
    selectedSemesterName.textContent = semester.name;
    selectedSemesterNumber.textContent = semester.number;
    selectedBranchNameProjects.textContent = appState.selectedBranch.name;
    
    showView('projects');
    updateBreadcrumb();
    renderProjects();
}

function handleNavigateToBranches() {
    appState.currentView = 'branches';
    appState.selectedBranch = null;
    appState.selectedSemester = null;
    
    showView('branches');
    updateBreadcrumb();
}

function handleNavigateToSemesters() {
    if (appState.selectedBranch) {
        appState.currentView = 'semesters';
        appState.selectedSemester = null;
        
        showView('semesters');
        updateBreadcrumb();
        renderSemesters();
    }
}

function handleProjectDownload(url) {
    // In a real application, this would handle the actual download
    // For now, we'll simulate opening the PDF
    window.open(url, '_blank');
}

function handleSourceDownload(url) {
    // In a real application, this would handle the source code download
    // For now, we'll simulate opening the ZIP file
    window.open(url, '_blank');
}

// Utility function to get projects by branch and semester
function getProjectsByBranchAndSemester(branchId, semesterId) {
    return microprojectData.projects.filter(project => 
        project.branchId === branchId && project.semesterId === semesterId
    );
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    renderBranches();
    
    // Breadcrumb navigation
    breadcrumbMicroproject.addEventListener('click', handleNavigateToBranches);
    breadcrumbBranchBtn.addEventListener('click', handleNavigateToSemesters);
    
    // Initialize Lucide icons
    lucide.createIcons();
});

// Global functions for inline event handlers
window.handleProjectDownload = handleProjectDownload;
window.handleSourceDownload = handleSourceDownload;