// Data Structure
const syllabusData = {
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
            description: 'Foundation subjects and basic engineering concepts'
        },
        {
            id: 'sem2',
            number: 2,
            name: 'Second Semester',
            description: 'Core engineering fundamentals and mathematics'
        },
        {
            id: 'sem3',
            number: 3,
            name: 'Third Semester',
            description: 'Specialized branch subjects introduction'
        },
        {
            id: 'sem4',
            number: 4,
            name: 'Fourth Semester',
            description: 'Advanced concepts and practical applications'
        },
        {
            id: 'sem5',
            number: 5,
            name: 'Fifth Semester',
            description: 'Industry-focused subjects and projects'
        },
        {
            id: 'sem6',
            number: 6,
            name: 'Sixth Semester',
            description: 'Final semester with specialization and internship'
        }
    ],
    
    subjects: [
        // Computer Engineering - Semester 1
        {
            id: 'comp-sem1-1',
            name: 'Engineering Mathematics I',
            code: 'COMP101',
            description: 'Fundamental mathematical concepts for engineering including calculus, algebra, and differential equations.',
            credits: 4,
            syllabusUrl: '/syllabus/computer/sem1/engineering-mathematics-1.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-2',
            name: 'Engineering Physics',
            code: 'COMP102',
            description: 'Basic physics principles applied to engineering including mechanics, thermodynamics, and electromagnetism.',
            credits: 3,
            syllabusUrl: '/syllabus/computer/sem1/engineering-physics.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-3',
            name: 'Programming Fundamentals',
            code: 'COMP103',
            description: 'Introduction to programming concepts and C language including data types, control structures, and functions.',
            credits: 4,
            syllabusUrl: '/syllabus/computer/sem1/programming-fundamentals.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-4',
            name: 'Engineering Graphics',
            code: 'COMP104',
            description: 'Technical drawing and CAD fundamentals including orthographic projections and 3D modeling.',
            credits: 3,
            syllabusUrl: '/syllabus/computer/sem1/engineering-graphics.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-5',
            name: 'Workshop Practice',
            code: 'COMP105',
            description: 'Hands-on experience with basic engineering tools and manufacturing processes.',
            credits: 2,
            syllabusUrl: '/syllabus/computer/sem1/workshop-practice.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        
        // Computer Engineering - Semester 2
        {
            id: 'comp-sem2-1',
            name: 'Engineering Mathematics II',
            code: 'COMP201',
            description: 'Advanced mathematical concepts including linear algebra, probability, and statistics.',
            credits: 4,
            syllabusUrl: '/syllabus/computer/sem2/engineering-mathematics-2.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        {
            id: 'comp-sem2-2',
            name: 'Data Structures',
            code: 'COMP202',
            description: 'Fundamental data structures and algorithms including arrays, linked lists, stacks, and queues.',
            credits: 4,
            syllabusUrl: '/syllabus/computer/sem2/data-structures.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        {
            id: 'comp-sem2-3',
            name: 'Digital Electronics',
            code: 'COMP203',
            description: 'Digital circuits and logic design including Boolean algebra and combinational circuits.',
            credits: 3,
            syllabusUrl: '/syllabus/computer/sem2/digital-electronics.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        {
            id: 'comp-sem2-4',
            name: 'Computer Organization',
            code: 'COMP204',
            description: 'Computer architecture and organization principles including CPU design and memory systems.',
            credits: 3,
            syllabusUrl: '/syllabus/computer/sem2/computer-organization.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        
        // Mechanical Engineering - Semester 1
        {
            id: 'mech-sem1-1',
            name: 'Engineering Mathematics I',
            code: 'MECH101',
            description: 'Fundamental mathematical concepts for engineering applications.',
            credits: 4,
            syllabusUrl: '/syllabus/mechanical/sem1/engineering-mathematics-1.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        {
            id: 'mech-sem1-2',
            name: 'Engineering Mechanics',
            code: 'MECH102',
            description: 'Statics and dynamics of mechanical systems including force analysis.',
            credits: 4,
            syllabusUrl: '/syllabus/mechanical/sem1/engineering-mechanics.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        {
            id: 'mech-sem1-3',
            name: 'Engineering Materials',
            code: 'MECH103',
            description: 'Properties and applications of engineering materials including metals and composites.',
            credits: 3,
            syllabusUrl: '/syllabus/mechanical/sem1/engineering-materials.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        {
            id: 'mech-sem1-4',
            name: 'Manufacturing Processes',
            code: 'MECH104',
            description: 'Basic manufacturing and machining processes including casting and welding.',
            credits: 3,
            syllabusUrl: '/syllabus/mechanical/sem1/manufacturing-processes.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        
        // Electrical Engineering - Semester 1
        {
            id: 'elec-sem1-1',
            name: 'Circuit Analysis',
            code: 'ELEC101',
            description: 'DC and AC circuit analysis techniques including network theorems.',
            credits: 4,
            syllabusUrl: '/syllabus/electrical/sem1/circuit-analysis.pdf',
            branchId: 'electrical',
            semesterId: 'sem1'
        },
        {
            id: 'elec-sem1-2',
            name: 'Electrical Machines I',
            code: 'ELEC102',
            description: 'DC machines and transformers including construction and operation.',
            credits: 4,
            syllabusUrl: '/syllabus/electrical/sem1/electrical-machines-1.pdf',
            branchId: 'electrical',
            semesterId: 'sem1'
        },
        {
            id: 'elec-sem1-3',
            name: 'Power Systems',
            code: 'ELEC103',
            description: 'Introduction to power generation and distribution systems.',
            credits: 3,
            syllabusUrl: '/syllabus/electrical/sem1/power-systems.pdf',
            branchId: 'electrical',
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
const subjectListingView = document.getElementById('subject-listing');

const branchesGrid = document.getElementById('branches-grid');
const semestersGrid = document.getElementById('semesters-grid');
const subjectsGrid = document.getElementById('subjects-grid');
const noSubjectsMessage = document.getElementById('no-subjects');

// Breadcrumb elements
const breadcrumbBranch = document.getElementById('breadcrumb-branch');
const breadcrumbBranchBtn = document.getElementById('breadcrumb-branch-btn');
const breadcrumbSemester = document.getElementById('breadcrumb-semester');
const breadcrumbSemesterText = document.getElementById('breadcrumb-semester-text');
const breadcrumbSyllabus = document.getElementById('breadcrumb-syllabus');

// Text elements
const selectedBranchName = document.getElementById('selected-branch-name');
const selectedBranchNameSubjects = document.getElementById('selected-branch-name-subjects');
const selectedSemesterName = document.getElementById('selected-semester-name');
const selectedSemesterNumber = document.getElementById('selected-semester-number');

// Utility Functions
function hideAllViews() {
    branchSelectionView.classList.add('hidden');
    semesterSelectionView.classList.add('hidden');
    subjectListingView.classList.add('hidden');
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
        case 'subjects':
            subjectListingView.classList.remove('hidden');
            subjectListingView.classList.add('fade-in');
            break;
    }
}

function updateBreadcrumb() {
    // Reset breadcrumb
    breadcrumbBranch.classList.add('hidden');
    breadcrumbSemester.classList.add('hidden');
    
    // Update breadcrumb based on current state
    if (appState.selectedBranch) {
        // Show branch in breadcrumb
        breadcrumbBranch.classList.remove('hidden');
        breadcrumbBranchBtn.textContent = appState.selectedBranch.name;
        
        // Style branch breadcrumb based on current view
        if (appState.currentView === 'semesters') {
            breadcrumbBranchBtn.classList.add('text-blue-600', 'font-medium');
            breadcrumbBranchBtn.classList.remove('text-gray-900');
        } else {
            breadcrumbBranchBtn.classList.remove('text-blue-600', 'font-medium');
            breadcrumbBranchBtn.classList.add('text-gray-900');
        }
        
        // Show semester in breadcrumb if selected
        if (appState.selectedSemester) {
            breadcrumbSemester.classList.remove('hidden');
            breadcrumbSemesterText.textContent = appState.selectedSemester.name;
            
            // Style semester breadcrumb based on current view
            if (appState.currentView === 'subjects') {
                breadcrumbSemesterText.classList.add('text-blue-600');
                breadcrumbSemesterText.classList.remove('text-gray-900');
            } else {
                breadcrumbSemesterText.classList.remove('text-blue-600');
                breadcrumbSemesterText.classList.add('text-gray-900');
            }
        } else {
            breadcrumbSemester.classList.add('hidden');
        }
    } else {
        breadcrumbBranch.classList.add('hidden');
        breadcrumbSemester.classList.add('hidden');
    }
}

// Render Functions
function renderBranches() {
    branchesGrid.innerHTML = '';
    
    syllabusData.branches.forEach(branch => {
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
                    Latest curriculum and updated syllabus documents
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
    
    syllabusData.semesters.forEach(semester => {
        const semesterCard = document.createElement('div');
        semesterCard.className = 'semester-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer group';
        semesterCard.setAttribute('data-semester-id', semester.id);
        
        semesterCard.innerHTML = `
            <div class="p-8 text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i data-lucide="calendar" class="w-8 h-8 text-blue-600"></i>
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
                    View Subjects
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

function renderSubjects() {
    const subjects = getSubjectsByBranchAndSemester(appState.selectedBranch.id, appState.selectedSemester.id);
    
    subjectsGrid.innerHTML = '';
    
    if (subjects.length === 0) {
        noSubjectsMessage.classList.remove('hidden');
        return;
    }
    
    noSubjectsMessage.classList.add('hidden');
    
    subjects.forEach(subject => {
        const subjectCard = document.createElement('div');
        subjectCard.className = 'subject-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100';
        
        subjectCard.innerHTML = `
            <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                        <div class="flex items-center mb-2">
                            <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                                <i data-lucide="book-open" class="w-5 h-5 text-blue-600"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900">
                                    ${subject.name}
                                </h3>
                                <p class="text-sm text-gray-500">
                                    ${subject.code} • ${subject.credits} Credits
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="text-gray-600 text-sm mb-6 leading-relaxed">
                    ${subject.description}
                </p>
                <div class="flex flex-col sm:flex-row gap-3">
                    <button class="btn-primary flex-1" onclick="handleSyllabusDownload('${subject.syllabusUrl}')">
                        <i data-lucide="download" class="w-4 h-4 mr-2"></i>
                        Download Syllabus
                    </button>
                    <button class="btn-secondary flex-1" onclick="handleSyllabusView('${subject.syllabusUrl}')">
                        <i data-lucide="external-link" class="w-4 h-4 mr-2"></i>
                        View Online
                    </button>
                </div>
            </div>
        `;
        
        subjectsGrid.appendChild(subjectCard);
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
    appState.currentView = 'subjects';
    
    selectedSemesterName.textContent = semester.name;
    selectedSemesterNumber.textContent = semester.number;
    selectedBranchNameSubjects.textContent = appState.selectedBranch.name;
    
    showView('subjects');
    updateBreadcrumb();
    renderSubjects();
    
    // Update browser history
    window.history.pushState(
        { 
            view: 'subjects', 
            branchId: appState.selectedBranch.id, 
            semesterId: semester.id 
        },
        '',
        `?branch=${appState.selectedBranch.id}&semester=${semester.id}`
    );
}

function handleNavigateToBranches() {
    appState.selectedBranch = null;
    appState.selectedSemester = null;
    appState.currentView = 'branches';
    showView('branches');
    // Update browser history
    window.history.pushState(
        { view: 'branches' },
        '',
        window.location.pathname
    );
    updateBreadcrumb();
}

function handleNavigateToSemesters() {
    if (appState.selectedBranch) {
        appState.selectedSemester = null;
        appState.currentView = 'semesters';
        showView('semesters');
        // Update browser history
        window.history.pushState(
            { view: 'semesters', branchId: appState.selectedBranch.id },
            '',
            `?branch=${appState.selectedBranch.id}`
        );
        updateBreadcrumb();
        renderSemesters();
    }
}

function handleSyllabusDownload(url) {
    // In a real application, this would handle the actual download
    // For now, we'll simulate opening the PDF
    window.open(url, '_blank');
}

function handleSyllabusView(url) {
    // Open the PDF in a new tab for viewing
    window.open(url, '_blank');
}

// Utility function to get subjects by branch and semester
function getSubjectsByBranchAndSemester(branchId, semesterId) {
    return syllabusData.subjects.filter(subject => 
        subject.branchId === branchId && subject.semesterId === semesterId
    );
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    renderBranches();
    
    // Add event listeners for breadcrumb navigation
    breadcrumbSyllabus.addEventListener('click', function(e) {
        e.preventDefault();
        handleNavigateToBranches();
    });
    
    breadcrumbBranchBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (appState.selectedBranch) {
            handleNavigateToSemesters();
        }
    });
    
    // Handle back/forward browser navigation
    window.addEventListener('popstate', function(event) {
        if (event.state) {
            const { view, branchId, semesterId } = event.state;
            
            if (branchId) {
                const branch = syllabusData.branches.find(b => b.id === branchId);
                if (branch) {
                    appState.selectedBranch = branch;
                    
                    if (semesterId) {
                        const semester = syllabusData.semesters.find(s => s.id === semesterId);
                        if (semester) {
                            appState.selectedSemester = semester;
                            appState.currentView = 'subjects';
                            showView('subjects');
                            renderSubjects();
                            return;
                        }
                    }
                    appState.currentView = 'semesters';
                    showView('semesters');
                    renderSemesters();
                    return;
                }
            }
            appState.currentView = 'branches';
            showView('branches');
        } else {
            appState.currentView = 'branches';
            showView('branches');
        }
        updateBreadcrumb();
    });
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    console.log('Syllabus page initialized');
});

// Global functions for inline event handlers
window.handleSyllabusDownload = handleSyllabusDownload;
window.handleSyllabusView = handleSyllabusView;