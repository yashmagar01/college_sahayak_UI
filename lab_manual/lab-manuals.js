// Data Structure
const labManualData = {
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
            description: 'Basic laboratory experiments and practical fundamentals'
        },
        {
            id: 'sem2',
            number: 2,
            name: 'Second Semester',
            description: 'Core engineering lab practicals and measurements'
        },
        {
            id: 'sem3',
            number: 3,
            name: 'Third Semester',
            description: 'Specialized branch laboratory experiments'
        },
        {
            id: 'sem4',
            number: 4,
            name: 'Fourth Semester',
            description: 'Advanced practical applications and testing'
        },
        {
            id: 'sem5',
            number: 5,
            name: 'Fifth Semester',
            description: 'Industry-standard lab practices and projects'
        },
        {
            id: 'sem6',
            number: 6,
            name: 'Sixth Semester',
            description: 'Final semester practicals and comprehensive experiments'
        }
    ],
    
    labManuals: [
        // Computer Engineering - Semester 1
        {
            id: 'comp-sem1-lab1',
            name: 'Programming Fundamentals Lab',
            code: 'COMP101L',
            description: 'Hands-on programming exercises covering C language basics, data types, control structures, and functions with practical implementations.',
            experiments: 12,
            manualUrl: '/lab-manuals/computer/sem1/programming-fundamentals-lab.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-lab2',
            name: 'Digital Electronics Lab',
            code: 'COMP102L',
            description: 'Practical experiments on digital circuits, logic gates, Boolean algebra, and combinational circuit design and testing.',
            experiments: 10,
            manualUrl: '/lab-manuals/computer/sem1/digital-electronics-lab.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-lab3',
            name: 'Engineering Graphics Lab',
            code: 'COMP103L',
            description: 'CAD software training, technical drawing exercises, orthographic projections, and 3D modeling practical sessions.',
            experiments: 8,
            manualUrl: '/lab-manuals/computer/sem1/engineering-graphics-lab.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        {
            id: 'comp-sem1-lab4',
            name: 'Physics Lab',
            code: 'COMP104L',
            description: 'Physics experiments covering mechanics, optics, electricity, and magnetism with measurement techniques and error analysis.',
            experiments: 15,
            manualUrl: '/lab-manuals/computer/sem1/physics-lab.pdf',
            branchId: 'computer',
            semesterId: 'sem1'
        },
        
        // Computer Engineering - Semester 2
        {
            id: 'comp-sem2-lab1',
            name: 'Data Structures Lab',
            code: 'COMP201L',
            description: 'Implementation of various data structures including arrays, linked lists, stacks, queues, trees, and graphs using C programming.',
            experiments: 14,
            manualUrl: '/lab-manuals/computer/sem2/data-structures-lab.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        {
            id: 'comp-sem2-lab2',
            name: 'Computer Organization Lab',
            code: 'COMP202L',
            description: 'Assembly language programming, microprocessor experiments, and computer architecture simulation exercises.',
            experiments: 12,
            manualUrl: '/lab-manuals/computer/sem2/computer-organization-lab.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        {
            id: 'comp-sem2-lab3',
            name: 'Web Development Lab',
            code: 'COMP203L',
            description: 'HTML, CSS, JavaScript practical exercises, responsive web design, and basic web application development projects.',
            experiments: 16,
            manualUrl: '/lab-manuals/computer/sem2/web-development-lab.pdf',
            branchId: 'computer',
            semesterId: 'sem2'
        },
        
        // Mechanical Engineering - Semester 1
        {
            id: 'mech-sem1-lab1',
            name: 'Engineering Mechanics Lab',
            code: 'MECH101L',
            description: 'Practical experiments on force analysis, moment calculations, equilibrium of structures, and friction studies.',
            experiments: 10,
            manualUrl: '/lab-manuals/mechanical/sem1/engineering-mechanics-lab.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        {
            id: 'mech-sem1-lab2',
            name: 'Materials Testing Lab',
            code: 'MECH102L',
            description: 'Testing of engineering materials including tensile, compression, hardness, and impact tests with report preparation.',
            experiments: 12,
            manualUrl: '/lab-manuals/mechanical/sem1/materials-testing-lab.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        {
            id: 'mech-sem1-lab3',
            name: 'Workshop Practice Lab',
            code: 'MECH103L',
            description: 'Hands-on training in machining operations, welding, fitting, and basic manufacturing processes with safety protocols.',
            experiments: 20,
            manualUrl: '/lab-manuals/mechanical/sem1/workshop-practice-lab.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        {
            id: 'mech-sem1-lab4',
            name: 'Thermodynamics Lab',
            code: 'MECH104L',
            description: 'Experiments on heat engines, refrigeration cycles, calorimetry, and thermal property measurements.',
            experiments: 8,
            manualUrl: '/lab-manuals/mechanical/sem1/thermodynamics-lab.pdf',
            branchId: 'mechanical',
            semesterId: 'sem1'
        },
        
        // Electrical Engineering - Semester 1
        {
            id: 'elec-sem1-lab1',
            name: 'Circuit Analysis Lab',
            code: 'ELEC101L',
            description: 'DC and AC circuit experiments, network theorem verification, and electrical measurement techniques using multimeters and oscilloscopes.',
            experiments: 14,
            manualUrl: '/lab-manuals/electrical/sem1/circuit-analysis-lab.pdf',
            branchId: 'electrical',
            semesterId: 'sem1'
        },
        {
            id: 'elec-sem1-lab2',
            name: 'Electrical Machines Lab',
            code: 'ELEC102L',
            description: 'Practical experiments on DC motors, generators, transformers including load tests, efficiency calculations, and characteristic curves.',
            experiments: 12,
            manualUrl: '/lab-manuals/electrical/sem1/electrical-machines-lab.pdf',
            branchId: 'electrical',
            semesterId: 'sem1'
        },
        {
            id: 'elec-sem1-lab3',
            name: 'Electronics Lab',
            code: 'ELEC103L',
            description: 'Semiconductor device characteristics, amplifier circuits, oscillators, and basic electronic circuit design and testing.',
            experiments: 16,
            manualUrl: '/lab-manuals/electrical/sem1/electronics-lab.pdf',
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
const labManualListingView = document.getElementById('lab-manual-listing');

const branchesGrid = document.getElementById('branches-grid');
const semestersGrid = document.getElementById('semesters-grid');
const labManualsGrid = document.getElementById('lab-manuals-grid');
const noLabManualsMessage = document.getElementById('no-lab-manuals');

// Breadcrumb elements
const breadcrumbBranch = document.getElementById('breadcrumb-branch');
const breadcrumbBranchBtn = document.getElementById('breadcrumb-branch-btn');
const breadcrumbSemester = document.getElementById('breadcrumb-semester');
const breadcrumbSemesterText = document.getElementById('breadcrumb-semester-text');
const breadcrumbLabManual = document.getElementById('breadcrumb-lab-manual');

// Text elements
const selectedBranchName = document.getElementById('selected-branch-name');
const selectedBranchNameLabs = document.getElementById('selected-branch-name-labs');
const selectedSemesterName = document.getElementById('selected-semester-name');
const selectedSemesterNumber = document.getElementById('selected-semester-number');

// Utility Functions
function hideAllViews() {
    branchSelectionView.classList.add('hidden');
    semesterSelectionView.classList.add('hidden');
    labManualListingView.classList.add('hidden');
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
        case 'lab-manuals':
            labManualListingView.classList.remove('hidden');
            labManualListingView.classList.add('fade-in');
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
    
    labManualData.branches.forEach(branch => {
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
                    Latest lab manuals and practical experiment guides
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
    
    labManualData.semesters.forEach(semester => {
        const semesterCard = document.createElement('div');
        semesterCard.className = 'semester-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer group';
        semesterCard.setAttribute('data-semester-id', semester.id);
        
        semesterCard.innerHTML = `
            <div class="p-8 text-center">
                <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i data-lucide="flask-conical" class="w-8 h-8 text-blue-600"></i>
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
                    View Lab Manuals
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

function renderLabManuals() {
    const labManuals = getLabManualsByBranchAndSemester(appState.selectedBranch.id, appState.selectedSemester.id);
    
    labManualsGrid.innerHTML = '';
    
    if (labManuals.length === 0) {
        noLabManualsMessage.classList.remove('hidden');
        return;
    }
    
    noLabManualsMessage.classList.add('hidden');
    
    labManuals.forEach(labManual => {
        const labManualCard = document.createElement('div');
        labManualCard.className = 'lab-manual-card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100';
        
        labManualCard.innerHTML = `
            <div class="p-6">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                        <div class="flex items-center mb-2">
                            <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                                <i data-lucide="flask-conical" class="w-5 h-5 text-blue-600"></i>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-gray-900">
                                    ${labManual.name}
                                </h3>
                                <p class="text-sm text-gray-500">
                                    ${labManual.code} • ${labManual.experiments} Experiments
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="text-gray-600 text-sm mb-6 leading-relaxed">
                    ${labManual.description}
                </p>
                <div class="flex flex-col sm:flex-row gap-3">
                    <button class="btn-primary flex-1" onclick="handleLabManualDownload('${labManual.manualUrl}')">
                        <i data-lucide="download" class="w-4 h-4 mr-2"></i>
                        Download Manual
                    </button>
                    <button class="btn-secondary flex-1" onclick="handleLabManualView('${labManual.manualUrl}')">
                        <i data-lucide="external-link" class="w-4 h-4 mr-2"></i>
                        View Online
                    </button>
                </div>
            </div>
        `;
        
        labManualsGrid.appendChild(labManualCard);
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
    appState.currentView = 'lab-manuals';
    
    selectedSemesterName.textContent = semester.name;
    selectedSemesterNumber.textContent = semester.number;
    selectedBranchNameLabs.textContent = appState.selectedBranch.name;
    
    showView('lab-manuals');
    updateBreadcrumb();
    renderLabManuals();
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

function handleLabManualDownload(url) {
    // In a real application, this would handle the actual download
    // For now, we'll simulate opening the PDF
    window.open(url, '_blank');
}

function handleLabManualView(url) {
    // Open the PDF in a new tab for viewing
    window.open(url, '_blank');
}

// Utility function to get lab manuals by branch and semester
function getLabManualsByBranchAndSemester(branchId, semesterId) {
    return labManualData.labManuals.filter(labManual => 
        labManual.branchId === branchId && labManual.semesterId === semesterId
    );
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    renderBranches();
    
    // Breadcrumb navigation
    breadcrumbLabManual.addEventListener('click', handleNavigateToBranches);
    breadcrumbBranchBtn.addEventListener('click', handleNavigateToSemesters);
    
    // Initialize Lucide icons
    lucide.createIcons();
});

// Global functions for inline event handlers
window.handleLabManualDownload = handleLabManualDownload;
window.handleLabManualView = handleLabManualView;