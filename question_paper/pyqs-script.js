// Data Structure
const pyqsData = {
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
            description: 'Foundation subjects question papers and basic engineering concepts'
        },
        {
            id: 'sem2',
            number: 2,
            name: 'Second Semester',
            description: 'Core engineering fundamentals and mathematics question papers'
        },
        {
            id: 'sem3',
            number: 3,
            name: 'Third Semester',
            description: 'Specialized branch subjects question papers introduction'
        },
        {
            id: 'sem4',
            number: 4,
            name: 'Fourth Semester',
            description: 'Advanced concepts and practical applications question papers'
        },
        {
            id: 'sem5',
            number: 5,
            name: 'Fifth Semester',
            description: 'Industry-focused subjects and projects question papers'
        },
        {
            id: 'sem6',
            number: 6,
            name: 'Sixth Semester',
            description: 'Final semester with specialization question papers'
        }
    ],
    
    subjects: [
        // Computer Engineering - Semester 1
        {
            id: 'comp-sem1-1',
            name: 'Engineering Mathematics I',
            code: 'COMP101',
            description: 'Previous year question papers for fundamental mathematical concepts including calculus, algebra, and differential equations.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/computer/sem1/engineering-mathematics-1.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-2',
            name: 'Engineering Physics',
            code: 'COMP102',
            description: 'Question papers covering basic physics principles applied to engineering including mechanics and thermodynamics.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/computer/sem1/engineering-physics.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-3',
            name: 'Programming Fundamentals',
            code: 'COMP103',
            description: 'Previous year papers for programming concepts and C language including data types and control structures.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/computer/sem1/programming-fundamentals.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-4',
            name: 'Engineering Graphics',
            code: 'COMP104',
            description: 'Question papers for technical drawing and CAD fundamentals including orthographic projections.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/computer/sem1/engineering-graphics.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-5',
            name: 'Workshop Practice',
            code: 'COMP105',
            description: 'Previous year papers for hands-on experience with basic engineering tools and manufacturing processes.',
            years: ['2023', '2022', '2021', '2020'],
            paperUrl: '/pyqs/computer/sem1/workshop-practice.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        
        // Computer Engineering - Semester 2
        {
            id: 'comp-sem2-1',
            name: 'Engineering Mathematics II',
            code: 'COMP201',
            description: 'Question papers for advanced mathematical concepts including linear algebra, probability, and statistics.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/computer/sem2/engineering-mathematics-2.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        {
            id: 'comp-sem2-2',
            name: 'Data Structures',
            code: 'COMP202',
            description: 'Previous year papers for fundamental data structures and algorithms including arrays and linked lists.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/computer/sem2/data-structures.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        {
            id: 'comp-sem2-3',
            name: 'Digital Electronics',
            code: 'COMP203',
            description: 'Question papers for digital circuits and logic design including Boolean algebra and combinational circuits.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/computer/sem2/digital-electronics.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        {
            id: 'comp-sem2-4',
            name: 'Computer Organization',
            code: 'COMP204',
            description: 'Previous year papers for computer architecture and organization principles including CPU design.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/computer/sem2/computer-organization.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        
        // Mechanical Engineering - Semester 1
        {
            id: 'mech-sem1-1',
            name: 'Engineering Mathematics I',
            code: 'MECH101',
            description: 'Previous year question papers for fundamental mathematical concepts for engineering applications.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/mechanical/sem1/engineering-mathematics-1.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        {
            id: 'mech-sem1-2',
            name: 'Engineering Mechanics',
            code: 'MECH102',
            description: 'Question papers for statics and dynamics of mechanical systems including force analysis.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/mechanical/sem1/engineering-mechanics.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        {
            id: 'mech-sem1-3',
            name: 'Engineering Materials',
            code: 'MECH103',
            description: 'Previous year papers for properties and applications of engineering materials including metals.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/mechanical/sem1/engineering-materials.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        {
            id: 'mech-sem1-4',
            name: 'Manufacturing Processes',
            code: 'MECH104',
            description: 'Question papers for basic manufacturing and machining processes including casting and welding.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/mechanical/sem1/manufacturing-processes.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        
        // Electrical Engineering - Semester 1
        {
            id: 'elec-sem1-1',
            name: 'Circuit Analysis',
            code: 'ELEC101',
            description: 'Previous year papers for DC and AC circuit analysis techniques including network theorems.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/electrical/sem1/circuit-analysis.pdf',
            branchId: 'electrical',
            semesterId: 'sem1'
        },
        {
            id: 'elec-sem1-2',
            name: 'Electrical Machines I',
            code: 'ELEC102',
            description: 'Question papers for DC machines and transformers including construction and operation.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/electrical/sem1/electrical-machines-1.pdf',
            branchId: 'electrical',
            semesterId: 'sem1'
        },
        {
            id: 'elec-sem1-3',
            name: 'Power Systems',
            code: 'ELEC103',
            description: 'Previous year papers for introduction to power generation and distribution systems.',
            years: ['2023', '2022', '2021', '2020', '2019'],
            paperUrl: '/pyqs/electrical/sem1/power-systems.pdf',
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
const breadcrumbPyqs = document.getElementById('breadcrumb-pyqs');

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
    
    pyqsData.branches.forEach(branch => {
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
                    Previous year question papers from last 5 years
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
    
    pyqsData.semesters.forEach(semester => {
        const semesterCard = document.createElement('div');
        semesterCard.className = 'semester-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer group';
        semesterCard.setAttribute('data-semester-id', semester.id);
        
        semesterCard.innerHTML = `
            <div class="p-8 text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i data-lucide="file-text" class="w-8 h-8 text-blue-600"></i>
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
                    View Question Papers
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
                                <i data-lucide="file-text" class="w-5 h-5 text-blue-600"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900">
                                    ${subject.name}
                                </h3>
                                <p class="text-sm text-gray-500">
                                    ${subject.code} • ${subject.years.length} Years Available
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                    ${subject.description}
                </p>
                <div class="mb-4">
                    <p class="text-sm font-medium text-gray-700 mb-2">Available Years:</p>
                    <div class="flex flex-wrap gap-2">
                        ${subject.years.map(year => `
                            <span class="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-md font-medium">
                                ${year}
                            </span>
                        `).join('')}
                    </div>
                </div>
                <div class="flex flex-col sm:flex-row gap-3">
                    <button class="btn-primary flex-1" onclick="handlePaperDownload('${subject.paperUrl}')">
                        <i data-lucide="download" class="w-4 h-4 mr-2"></i>
                        Download Papers
                    </button>
                    <button class="btn-secondary flex-1" onclick="handlePaperView('${subject.paperUrl}')">
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

function handlePaperDownload(url) {
    // In a real application, this would handle the actual download
    // For now, we'll simulate opening the PDF
    window.open(url, '_blank');
}

function handlePaperView(url) {
    // Open the PDF in a new tab for viewing
    window.open(url, '_blank');
}

// Utility function to get subjects by branch and semester
function getSubjectsByBranchAndSemester(branchId, semesterId) {
    return pyqsData.subjects.filter(subject => 
        subject.branchId === branchId && subject.semesterId === semesterId
    );
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    renderBranches();
    
    // Breadcrumb navigation
    breadcrumbPyqs.addEventListener('click', handleNavigateToBranches);
    breadcrumbBranchBtn.addEventListener('click', handleNavigateToSemesters);
    
    // Initialize Lucide icons
    lucide.createIcons();
});

// Global functions for inline event handlers
window.handlePaperDownload = handlePaperDownload;
window.handlePaperView = handlePaperView;